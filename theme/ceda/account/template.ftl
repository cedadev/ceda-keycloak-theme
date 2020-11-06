<#import "base.ftl" as base>

<#macro mainLayout active bodyClass>

<@base.baseLayout; section>

<#if section = "header">Account</#if>

<#if section = "content">

<div class="row">
        <div class="bs-sidebar col-sm-3">
            <ul class="nav flex-column nav-pills">
                <a class="nav-link <#if active=='account'>active</#if>" href="${url.accountUrl}">${msg("account")}</a>
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
        </div>

        <div class="col-sm-9 content-area">
            <#if message?has_content>
                <div class="alert alert-${message.type}">
                    <#if message.type=='success' ><span class="pficon pficon-ok"></span></#if>
                    <#if message.type=='error' ><span class="pficon pficon-error-circle-o"></span></#if>
                    <span class="kc-feedback-text">${kcSanitize(message.summary)?no_esc}</span>
                </div>
            </#if>

            <#nested "content">
        </div>
</div>

</#if>

</@base.baseLayout>

</#macro>
