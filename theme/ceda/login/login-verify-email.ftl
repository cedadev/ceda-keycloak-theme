<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        ${msg("emailVerifyTitle")}
    <#elseif section = "form">
        <p class="instruction">
            ${msg("emailVerifyInstruction1")}
        </p>
        <p class="instruction">
            ${msg("emailVerifyInstruction2")} <a href="${url.loginAction}">${msg("doClickHere")}</a> ${msg("emailVerifyInstruction3")}
        </p>
        <p class="instruction">
            Already recieved an email? <a href="${url.loginRestartFlowUrl}">${msg("doClickHere")}</a> to login.
        </p>
    </#if>
</@layout.registrationLayout>