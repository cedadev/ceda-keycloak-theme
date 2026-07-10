import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { getKcClsx } from "keycloakify/account/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/account/Template.useInitialize";
import type { TemplateProps } from "keycloakify/account/TemplateProps";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, active, classes, children } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr, currentLanguage, enabledLanguages } = i18n;

    const { url, features, realm, message } = kcContext;

    useEffect(() => {
        document.title = msgStr("accountManagementTitle");
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: clsx("admin-console", "user", kcClsx("kcBodyClass"))
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <>
            <header className="navbar navbar-default navbar-pf navbar-main header">
                <title>${msg("accountManagementTitle")}</title>
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
                        <div id="kc-locale">
                            <div id="kc-locale-wrapper">
                                <div id="kc-locale-dropdown" className="menu-button-links dropdown">
                                    <button
                                        className="dropdown-toggle btn-outline-light btn"
                                        tabIndex={1}
                                        id="kc-current-locale-link"
                                        aria-label="Languages"
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
                                        className="dropdown-menu"
                                    >
                                        {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                            <a key={languageTag} role="menuitem" id={`language-${i + 1}`} className="dropdown-item" href={href}>
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="kc-content" className="container">

                <div className="page-header" id="banner">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <h1 className="fs-3">My CEDA Account</h1>
                        </div>
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                <div className="sponsor">
                                    
                                        
                                    

                                </div>
                            </div>
                        
                    </div>
                    <div className="row">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">CEDA Services</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Datasets</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2">
                        <div className="navbar-full">
                            <ul className="nav flex-column nav-pills">
                                <li className="nav-item">
                                    <a className={`nav-link ${clsx(active === "account" && "active")}`} href={url.accountUrl}>{msg("account")}</a>
                                </li>
                                {features.passwordUpdateSupported && (
                                    <li className="nav-item">
                                        <a className={`nav-link ${clsx(active === "password" && "active")}`} href={url.passwordUrl}>{msg("password")}</a>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a className={`nav-link ${clsx(active === "totp" && "active")}`} href={url.totpUrl}>{msg("authenticator")}</a>
                                </li>
                                {features.identityFederation && (
                                    <li className="nav-item">
                                        <a className={`nav-link ${clsx(active === "social" && "active")}`} href={url.socialUrl}>{msg("federatedIdentity")}</a>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a className={`nav-link ${clsx(active === "sessions" && "active")}`} href={url.sessionsUrl}>{msg("sessions")}</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${clsx(active === "applications" && "active")}`} href={url.applicationsUrl}>{msg("applications")}</a>
                                </li>
                                {features.log && (
                                    <li className="nav-item">
                                        <a className={`nav-link ${clsx(active === "log" && "active")}`} href={url.logUrl}>{msg("log")}</a>
                                    </li>
                                )}
                                {realm.userManagedAccessAllowed && features.authorization && (
                                    <li className="nav-item">
                                        <a className={`nav-link ${clsx(active === "authorization" && "active")}`} href={url.resourceUrl}>{msg("myResources")}</a>
                                    </li>
                                )}
                            </ul>
                            <h4 className="mt-4 mb-2">My Archive Access</h4>
                            <ul className="nav flex-column nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://services.ceda.ac.uk/services/my_services/">Services Portal&thinsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-9 content-area">
                        {message !== undefined && (
                            <div className={clsx("alert", `alert-${message.type}`)}>
                                {message.type === "success" && <span className="pficon pficon-ok"></span>}
                                {message.type === "error" && <span className="pficon pficon-error-circle-o"></span>}
                                <span
                                    className="kc-feedback-text"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(message.summary)
                                    }}
                                />
                            </div>
                        )}

                        {children}
                    </div>
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
