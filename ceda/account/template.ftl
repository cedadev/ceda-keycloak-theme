<#import "base.ftl" as base>

<#macro mainLayout active bodyClass>

<@base.baseLayout; section>

<#if section = "header">Account</#if>

<#if section = "content">

<li><a href="${url.logoutUrl}">${msg("doSignOut")}</a></li>

<div class="row">
        <div class="bs-sidebar col-sm-3">
            <ul>
                <li class="<#if active=='account'>active</#if>"><a href="${url.accountUrl}">${msg("account")}</a></li>
                <#if features.passwordUpdateSupported><li class="<#if active=='password'>active</#if>"><a href="${url.passwordUrl}">${msg("password")}</a></li></#if>
                <li class="<#if active=='totp'>active</#if>"><a href="${url.totpUrl}">${msg("authenticator")}</a></li>
                <#if features.identityFederation><li class="<#if active=='social'>active</#if>"><a href="${url.socialUrl}">${msg("federatedIdentity")}</a></li></#if>
                <li class="<#if active=='sessions'>active</#if>"><a href="${url.sessionsUrl}">${msg("sessions")}</a></li>
                <li class="<#if active=='applications'>active</#if>"><a href="${url.applicationsUrl}">${msg("applications")}</a></li>
                <#if features.log><li class="<#if active=='log'>active</#if>"><a href="${url.logUrl}">${msg("log")}</a></li></#if>
                <#if realm.userManagedAccessAllowed && features.authorization><li class="<#if active=='authorization'>active</#if>"><a href="${url.resourceUrl}">${msg("myResources")}</a></li></#if>
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
