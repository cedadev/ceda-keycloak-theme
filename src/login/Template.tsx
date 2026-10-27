import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";

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
        <>
            <header className="navbar navbar-default navbar-pf navbar-main header">
                <title>login-title</title>
                <div>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cedadev/orgtheme-ceda-serv@bootstrap5/orgtheme_ceda_serv/static/orgtheme/theme/css/main.css" media="screen"></link>
                    <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/custom.min.css"></link>
                    <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/org-custom.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
                </div>
                <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <a href="https://archive.ceda.ac.uk/" className="navbar-brand">
                            <img src="https://cdn.jsdelivr.net/gh/cedadev/orgtheme-ceda-serv@bootstrap533/orgtheme_ceda_serv/static/orgtheme/assets/img/ceda_archive_logo_transp_white_3_h80.png" alt="CEDA logo" width={300} />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://archive.ceda.ac.uk/about/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.ceda.ac.uk/news/">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://catalogue.ceda.ac.uk">Search Catalogue</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://data.ceda.ac.uk">Get Data</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://arrivals.ceda.ac.uk">Deposit</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://archive.ceda.ac.uk/tools">Tools</a>
                                </li>
                            </ul>
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
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                    crossOrigin="anonymous">
                </script>
                <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous">
                </script>
            </footer>
        </>
    );
}
