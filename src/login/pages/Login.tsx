import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "keycloakify/login/KcContext";
import type { I18n } from "keycloakify/login/i18n";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const displayInfo = realm.password && realm.registrationAllowed && !registrationDisabled

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("loginAccountTitle")}
            socialProvidersNode={
                <>
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                            <hr />
                            <h2>{msg("identity-provider-login-label")}</h2>
                            <ul className={kcClsx("kcFormSocialAccountListClass", social.providers.length > 3 && "kcFormSocialAccountListGridClass")}>
                                {social.providers.map((...[p, , providers]) => (
                                    <li key={p.alias}>
                                        <a
                                            id={`social-${p.alias}`}
                                            className={kcClsx(
                                                "kcFormSocialAccountListButtonClass",
                                                providers.length > 3 && "kcFormSocialAccountGridItem"
                                            )}
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                            <span
                                                className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}
                                                dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}
                                            ></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            }
        >
            <div className="d-md-flex">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-6 text-center">
                    <div className="row">
                        <div id="login" className="col-lg-7 col-md-7 col-sm-12 col-xs-6 mt-4">
                            <div className="row justify-content-left">
                                <div className="col-lg-12">
                                    {realm.password && (
                                        <form
                                            id="kc-form-login"
                                            onSubmit={() => {
                                                setIsLoginButtonDisabled(true);
                                                return true;
                                            }}
                                            action={url.loginAction}
                                            method="post"
                                        >
                                            {!usernameHidden && (
                                                <div className="form-row mb-2">
                                                    <label htmlFor="username" className="sr-only">
                                                        {!realm.loginWithEmailAllowed
                                                            ? msg("username")
                                                            : !realm.registrationEmailAsUsername
                                                            ? msg("usernameOrEmail")
                                                            : msg("email")}
                                                    </label>
                                                    <input
                                                        tabIndex={2}
                                                        id="username"
                                                        className={kcClsx("kcInputClass")}
                                                        name="username"
                                                        defaultValue={login.username ?? ""}
                                                        type="text"
                                                        autoFocus
                                                        autoComplete="username"
                                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                                    />
                                                    {messagesPerField.existsError("username", "password") && (
                                                        <span
                                                            id="input-error"
                                                            className={kcClsx("kcInputErrorMessageClass")}
                                                            aria-live="polite"
                                                            dangerouslySetInnerHTML={{
                                                                __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            )}

                                            <div className="form-row mb-2">
                                                <label htmlFor="password" className="sr-only">
                                                    {msg("password")}
                                                </label>
                                                <PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">
                                                    <input
                                                        tabIndex={3}
                                                        id="password"
                                                        className={kcClsx("kcInputClass")}
                                                        name="password"
                                                        type="password"
                                                        autoComplete="current-password"
                                                        aria-invalid={messagesPerField.existsError("username", "password")}
                                                    />
                                                </PasswordWrapper>
                                                {usernameHidden && messagesPerField.existsError("username", "password") && (
                                                    <span
                                                        id="input-error"
                                                        className={kcClsx("kcInputErrorMessageClass")}
                                                        aria-live="polite"
                                                        dangerouslySetInnerHTML={{
                                                            __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            <div id="kc-form-buttons" className="form-row">
                                                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                                <input
                                                    tabIndex={5}
                                                    disabled={isLoginButtonDisabled}
                                                    className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                                    name="login"
                                                    id="kc-login"
                                                    type="submit"
                                                    value={msgStr("doLogIn")}
                                                />
                                            </div>

                                            <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                                                <div id="kc-form-options" className="checkbox text-left mt-2">
                                                    {realm.rememberMe && !usernameHidden && (
                                                        <div className="checkbox">
                                                            <label>
                                                                <input
                                                                    tabIndex={6}
                                                                    id="rememberMe"
                                                                    name="rememberMe"
                                                                    type="checkbox"
                                                                    defaultChecked={!!login.rememberMe}
                                                                />{" "}
                                                                {msg("rememberMe")}
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>

                        {displayInfo && (
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-6 mt-4">
                                <div id="kc-info" className="row justify-content-center">
                                    <div id="kc-info-wrapper" className="col-lg-10">
                                        <div id="kc-registration-container">
                                            <div id="kc-registration">
                                                <span>
                                                    {msg("noAccount")}
                                                </span>
                                                <span>
                                                    <a tabIndex={7} href={url.registrationUrl} className="btn btn-lg btn-primary btn-block">
                                                        {msg("doRegister")}
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div  className="justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 lead pt-2">
                                            {realm.resetPasswordAllowed && (
                                                <span>
                                                    <a tabIndex={8} href={url.loginResetCredentialsUrl}>
                                                        {msg("doForgotPassword")}
                                                    </a>
                                                </span>
                                            )}
                                        </div>
                                        <div className="justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 lead pt-2">
                                            Problems logging on? Contact <a href="http://www.ceda.ac.uk/contact">CEDA</a> support for help
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Template>
    );
}

function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
    const { kcClsx, i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({ passwordInputId });

    return (
        <div className={kcClsx("kcInputGroup")}>
            {children}
            <div className="input-group-append">
            <button
                type="button"
                className={kcClsx("kcFormPasswordVisibilityButtonClass")}
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                <i className={kcClsx(isPasswordRevealed ? "kcFormPasswordVisibilityIconHide" : "kcFormPasswordVisibilityIconShow")} aria-hidden />
            </button>
            </div>
        </div>
    );
}
