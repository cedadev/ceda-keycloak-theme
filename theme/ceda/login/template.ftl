<#import "base.ftl" as base>

<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false displayWide=false showAnotherWayIfPresent=true headerCentered=false>

<@base.baseLayout; section>
<#if section = "header"><#nested "header"></#if>

<#if section = "content">
<#if headerCentered>
<h1 class="text-center">
<#else>
<h1>
</#if>
    <#nested "header">
</h1>

<div class="row mt-4">
    <div class="col-lg-4 col-md-5 col-sm-6">
        <div class="sponsor">
            <#if displayMessage && message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
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
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <#nested "form">
    </div>
</div>
</#if>

</@base.baseLayout>

</#macro>
