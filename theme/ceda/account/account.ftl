<#import "template.ftl" as layout>
<@layout.mainLayout active='account' bodyClass='user'; section>

<#if section = "header">Login</#if>

<#if section = "content">
    <div class="row">
        <div class="col-md-10">
            <h2>${msg("editAccountHtmlTitle")}</h2>
        </div>
        <div class="col-md-2 subtitle">
            <span class="subtitle"><span class="required">*</span> ${msg("requiredFields")}</span>
        </div>
    </div>

    <form action="${url.accountUrl}" class="form-horizontal" method="post">

        <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker}">

        <#if !realm.registrationEmailAsUsername>
            <div class="form-group ${messagesPerField.printIfExists('username','has-error')}">
                <div class="col-sm-2 col-md-2">
                    <label for="username" class="control-label">${msg("username")}</label> <#if realm.editUsernameAllowed><span class="required">*</span></#if>
                </div>

                <div class="col-sm-10 col-md-10">
                    <input type="text" class="form-control" id="username" name="username" <#if !realm.editUsernameAllowed>disabled="disabled"</#if> value="${(account.username!'')}"/>
                </div>
            </div>
        </#if>

        <div class="form-group ${messagesPerField.printIfExists('email','has-error')}">
            <div class="col-sm-2 col-md-2">
            <label for="email" class="control-label">${msg("email")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="email" name="email" autofocus value="${(account.email!'')}"/>
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('firstName','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="firstName" class="control-label">${msg("firstName")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="firstName" name="firstName" value="${(account.firstName!'')}"/>
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('lastName','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="lastName" class="control-label">${msg("lastName")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="lastName" name="lastName" value="${(account.lastName!'')}"/>
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('user.attributes.discipline','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.discipline" class="control-label">Discipline</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.discipline" name="user.attributes.discipline" value="${(account.attributes.discipline!'')}">
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('user.attributes.institute','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.institute" class="control-label">Institute</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.institute" name="user.attributes.institute" value="${(account.attributes.institute!'')}">
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('user.attributes.instituteType','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.instituteType" class="control-label">Institute type</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <select class="custom-select text-muted" id="user.attributes.instituteType" name="user.attributes.instituteType" value="${(account.attributes.instituteType!'')}">
                    <option selected disabled><span class="text-muted">${(account.attributes.instituteType!'')}</span></option>
                    <option value="Academic">Academic</option>
                    <option value="Commercial">Commercial</option>
                </select>
            </div>
        </div>

        <div class="form-group ${messagesPerField.printIfExists('user.attributes.instituteCountry','has-error')}">
            <div class="col-sm-3 col-md-3">
                <label for="user.attributes.instituteCountry" class="control-label">Institute country</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.instituteCountry" name="user.attributes.instituteCountry" value="${(account.attributes.instituteCountry!'')}">
            </div>
        </div>

        <div class="form-group">
            <div id="kc-form-buttons" class="col-md-offset-2 col-md-10 submit">
                <div class="">
                    <#if url.referrerURI??><a href="${url.referrerURI}">${kcSanitize(msg("backToApplication")?no_esc)}</a></#if>
                    <button type="submit" class="btn-primary ${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonLargeClass!}" name="submitAction" value="Save">${msg("doSave")}</button>
                    <button type="submit" class="btn-primary ${properties.kcButtonClass!} ${properties.kcButtonDefaultClass!} ${properties.kcButtonLargeClass!}" name="submitAction" value="Cancel">${msg("doCancel")}</button>
                </div>
            </div>
        </div>
    </form>
</#if>

</@layout.mainLayout>
