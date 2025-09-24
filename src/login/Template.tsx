import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import logoPngUrl from "./img/logo.png";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, currentLanguage, enabledLanguages } = i18n;

    const { realm, auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss: false });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className={kcClsx("kcLoginClass")}>
            <div id="kc-header" className={kcClsx("kcHeaderClass")}>
                <div id="kc-header-wrapper" className={kcClsx("kcHeaderWrapperClass")}>
                    {msg("loginTitleHtml", realm.displayNameHtml)}
                </div>
                <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/4/flatly/bootstrap.css" media="screen"></link>
                <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/custom.min.css"></link>
                <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/org-custom.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"></link>
            </div>
            <div className={kcClsx("kcFormCardClass")}>
                <header className={kcClsx("kcFormHeaderClass")}>
                    <div className="container">
                        <div>
                            <img src={logoPngUrl} alt="CEDA logo" width={300} />
                        </div>
                        {enabledLanguages.length > 1 && (
                            <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                                <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                                    <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                                        <button
                                            className={clsx("dropdown-toggle btn-outline-light", kcClsx("kcButtonClass"))}
                                            tabIndex={1}
                                            id="kc-current-locale-link"
                                            aria-label={msgStr("languages")}
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            aria-controls="language-switch1"
                                        >
                                            <i className="fas fa-globe"></i> {currentLanguage.label}
                                        </button>
                                        <div
                                            role="menu"
                                            tabIndex={-1}
                                            aria-labelledby="dropdownMenuButton"
                                            aria-activedescendant=""
                                            id="language-switch1"
                                            className={kcClsx("kcLocaleListClass")}
                                        >
                                            {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                                <a key={languageTag} role="menuitem" id={`language-${i + 1}`} className={kcClsx("kcLocaleItemClass")} href={href}>
                                                    {label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>
                <div id="kc-content" className="container">
                    {(() => {
                        const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                            <h1 id="kc-page-title">{headerNode}</h1>
                        ) : (
                            <div id="kc-username" className={kcClsx("kcFormGroupClass")}>
                                <label id="kc-attempted-username">{auth.attemptedUsername}</label>
                                <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")}>
                                    <div className="kc-login-tooltip">
                                        <i className={kcClsx("kcResetFlowIcon")}></i>
                                        <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                    </div>
                                </a>
                            </div>
                        );

                        if (displayRequiredFields) {
                            return (
                                <div className={kcClsx("kcContentWrapperClass")}>
                                    <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                        <span className="subtitle">
                                            <span className="required">*</span>
                                            {msg("requiredFields")}
                                        </span>
                                    </div>
                                    <div className="col-md-10">{node}</div>
                                </div>
                            );
                        }

                        return node;
                    })()}
                    <div id="kc-content-wrapper">
                        {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                        {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                            <div
                                className={clsx(
                                    `alert-${message.type}`,
                                    kcClsx("kcAlertClass"),
                                    `pf-m-${message?.type === "error" ? "danger" : message.type}`
                                )}
                            >
                                <div className="pf-c-alert__icon">
                                    {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                    {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                    {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                    {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                </div>
                                <span
                                    className={kcClsx("kcAlertTitleClass")}
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(message.summary)
                                    }}
                                />
                            </div>
                        )}
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && (
                            <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <input type="hidden" name="tryAnotherWay" value="on" />
                                    <a
                                        href="#"
                                        id="try-another-way"
                                        onClick={() => {
                                            document.forms["kc-select-try-another-way-form" as never].requestSubmit();
                                            return false;
                                        }}
                                    >
                                        {msg("doTryAnotherWay")}
                                    </a>
                                </div>
                            </form>
                        )}
                        {socialProvidersNode}
                    </div>
                </div>
                <footer>
                    <div className="container">
                            <div className="row d-flex justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 pt-5 pb-2 mt-5">
                            <div className="col col-md-4 text-center ">
                                <a href="http://www.ncas.ac.uk" title="NCAS">
                                    <img src="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/img/ncas_logo_transparent_blacktext.png" title="NCAS logo" alt="NCAS logo" />
                                </a>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center small">
                                    Copyright © 2018 <a href="http://www.stfc.ac.uk">STFC</a>
                                    All Rights Reserved<br />
                                    <a href="http://www.ceda.ac.uk/accessibility" target="_blank">Accessibility</a> |
                                    <a href="http://www.ceda.ac.uk/disclaimer" target="_blank">Disclaimer</a> |
                                    <a href="http://www.ceda.ac.uk/privacy-and-cookies/" target="_blank">Privacy and Cookies</a><br/>
                                    <a href="http://www.ceda.ac.uk" target="_blank">CEDA</a>
                                </p>
                            </div>
                            <div className="col col-md-4 text-center">
                                <a href="http://www.nceo.ac.uk" title="STFC">
                                    <img src="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/img/nceologo200.png" title="NCEO logo" alt="NCEO logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/jquery/dist/jquery.min.js"></script>
                    <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/popper.js/dist/umd/popper.min.js"></script>
                    <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/bootstrap/dist/js/bootstrap.min.js"></script>
                    <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_assets/js/custom.js"></script>
                </footer>
            </div>
        </div>
    );
}
