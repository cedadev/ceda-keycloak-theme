<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo displayWide=(realm.password && social.providers??); section>

<#if section = "header">Login</#if>

<#if section = "form">
<div class="d-md-flex">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-6 text-center">

        <div class="row">

            <div id="login" class="col-lg-7 col-md-7 col-sm-12 col-xs-6 mt-4">
                <div class="row justify-content-left">
                    <div class="col-lg-12">
                    
                        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                            
                            <div class="form-row mb-2">
                                <label for="id_username" class="sr-only"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>
                                <#if usernameEditDisabled??>
                                <input tabindex="1" id="username" class="form-control" name="username" value="${(login.username!'')}" placeholder="<#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if>" type="text" disabled />
                                <#else>
                                <input tabindex="1" id="username" class="form-control" name="username" value="${(login.username!'')}" placeholder="<#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if>" type="text" autofocus autocomplete="off" />
                                </#if>
                            </div>
                            
                            <div class="form-row mb-2">
                                <label for="id_password" class="sr-only">${msg("password")}</label>
                                <input tabindex="2" id="password" class="form-control" name="password" type="password" placeholder="${msg("password")}" autocomplete="off" />
                            </div>
                            
                            <div class="form-row">
                                <input tabindex="4" class="btn btn-lg btn-primary btn-block" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                            </div>
                            
                        <#if realm.rememberMe && !usernameEditDisabled??>
                            <div class="checkbox text-left mt-2">
                                <label>
                                    <#if login.rememberMe??>
                                        <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                                    <#else>
                                        <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                                    </#if>
                                </label>
                            </div>
                        </#if>

                        </form>
                    </div>
                </div>
            </div>

            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-6 mt-4">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <p>
                            <a href="${url.registrationUrl}" class="btn btn-lg btn-primary btn-block" >${msg("doRegister")}</a>
                        </p>
                        <p class="justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 lead pt-2">
                            <a href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a>
                        </p>
                        <p class="justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 lead pt-2">
                            Problems logging on? Contact <a href="http://www.ceda.ac.uk/contact">CEDA</a> support for help
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</#if>

</@layout.registrationLayout>
