<#import "base.ftl" as base>

<#macro mainLayout active bodyClass>

<@base.baseLayout; section>
<#if section = "header">CEDA Account Management</#if>

<#if section = "navbar">
<div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="http://catalogue.ceda.ac.uk">Search Catalogue</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://data.ceda.ac.uk">Get Data</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://help.ceda.ac.uk">Help</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://archive.ceda.ac.uk/tools">Tools</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://arrivals.ceda.ac.uk">Deposit</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/auth/realms/ceda/account">My Account</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://www.ceda.ac.uk/blog/">News</a>
        </li>
    </ul>
</div>

<div class="dropdown">
    <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        ${(account.username!'')}<span class="caret"></span>
    </a>
    <ul class="dropdown-menu px-2">
        <li><a href="${url.accountUrl}"><i class="fa fa-user fa-fw"></i> My account</a></li>
        <li><a href="${url.passwordUrl}"><i class="fa fa-lock fa-fw"></i> Change password</a></li>
        <li><a href="${url.logoutUrl}"><i class="fa fa-sign-out-alt fa-fw"></i> Sign out</a></li>
    </ul>
</div>
</#if>

<#if section = "content">
<div class="container">
    <div class="row">
        <div class="col-md-12 right">
            <ol class="breadcrumb bg-primary">
                <li class="breadcrumb-item">
                    <a class="breadcrumb-link text-light" style="text-decoration: none;" href="${url.accountUrl}">
                        CEDA Account
                    </a>
                </li>
                <li class="breadcrumb-item active">${active}</li>
            </ol>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="container">
        <div class="row">
            <div class="bs-sidebar col-lg-3">
                <h4 class="mb-2">Account settings</h4>
                <ul class="nav flex-column nav-pills">
                    <a class="nav-link <#if active=='account'>active</#if>" href="${url.accountUrl}">Profile</a>
                    <#if features.passwordUpdateSupported>
                    <a class="nav-link <#if active=='password'>active</#if>" href="${url.passwordUrl}">${msg("password")}</a>
                    </#if>
                    <a class="nav-link <#if active=='totp'>active</#if>" href="${url.totpUrl}">${msg("authenticator")}</a>
                    <#if features.identityFederation>
                    <li class="<#if active=='social'>active</#if>" href="${url.socialUrl}">${msg("federatedIdentity")}</a>
                    </#if>
                    <a class="nav-link <#if active=='sessions'>active</#if>" href="${url.sessionsUrl}">${msg("sessions")}</a>
                    <#if features.log>
                    <a class="nav-link <#if active=='log'>active</#if>" href="${url.logUrl}">${msg("log")}</a>
                    </#if>
                    <#if realm.userManagedAccessAllowed && features.authorization>
                    <a class="nav-link <#if active=='authorization'>active</#if>" href="${url.resourceUrl}">${msg("myResources")}</a>
                    </#if>
                </ul>
                <h4 class="mt-4 mb-2">Services</h4>
                <ul class="nav flex-column nav-pills">
                    <a class="nav-link" href="${properties.servicesPortalHomeUrl}">My services</a>
                    <a class="nav-link" href="${properties.servicesPortalDiscoverUrl}">Discover services</a>
                </ul>
            </div>
            <div class="col-lg-9 content-area">
                <#if message?has_content>
                    <#if message.type=='success' >
                    <div class="alert alert-with-icon alert-success" role="alert">
                        <span class="fa fa-check-circle"></span>
                    </#if>
                    <#if message.type=='error' >
                    <div class="alert alert-with-icon alert-danger" role="alert">
                        <span class="fa fa-exclamation-circle"></span>
                    </#if>
                    <#if message.type=='warning' >
                    <div class="alert alert-with-icon alert-warning" role="alert">
                        <span class="fa fa-exclamation-triangle"></span>
                    </#if>
                    <#if message.type=='info' >
                    <div class="alert alert-with-icon alert-info" role="alert">
                        <span class="fa fa-info-circle"></span>
                    </#if>
                        <span class="kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
                    </div>
                </#if>

                <#nested "content">
            </div>
        </div>
        </div>
    </div>
</div>
</#if>

</@base.baseLayout>

</#macro>
