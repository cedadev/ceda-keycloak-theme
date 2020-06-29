<#import "base.ftl" as base>

<#macro registrationLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false displayWide=false showAnotherWayIfPresent=true>

<@base.baseLayout; section>
<#if section = "header"><#nested "header"></#if>
<#if section = "content"><#nested "form"></#if>
</@base.baseLayout>

</#macro>
