<#import "template.ftl" as layout>
<@layout.mainLayout active='account' bodyClass='user'; section>

<#if section = "content">
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-warning text-center">
                <div style="margin-bottom: 0.4em;"><i class="fa fa-fw fa-exclamation-triangle"></i> Warning: changing your account information may affect your eligibility for certain services</div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-10">
            <h2>${msg("editAccountHtmlTitle")}</h2>
        </div>
        <div class="col-md-2 subtitle">
            <span class="subtitle"><span class="required">*</span> ${msg("requiredFields")}</span>
        </div>
    </div>

    <hr/>

    <form action="${url.accountUrl}" class="form-horizontal" method="post">

        <input type="hidden" id="stateChecker" name="stateChecker" value="${stateChecker}">

        <#if !realm.registrationEmailAsUsername>
            <div class="form-group row ${messagesPerField.printIfExists('username','has-error')}">
                <div class="col-sm-2 col-md-2">
                    <label for="username" class="control-label">${msg("username")}</label> <#if realm.editUsernameAllowed><span class="required">*</span></#if>
                </div>

                <div class="col-sm-10 col-md-10">
                    <input type="text" class="form-control" id="username" name="username" <#if !realm.editUsernameAllowed>disabled="disabled"</#if> value="${(account.username!'')}"/>
                </div>
            </div>
        </#if>

        <div class="form-group row ${messagesPerField.printIfExists('email','has-error')}">
            <div class="col-sm-2 col-md-2">
            <label for="email" class="control-label">${msg("email")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="email" name="email" autofocus value="${(account.email!'')}"/>
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('firstName','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="firstName" class="control-label">${msg("firstName")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="firstName" name="firstName" value="${(account.firstName!'')}"/>
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('lastName','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="lastName" class="control-label">${msg("lastName")}</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="lastName" name="lastName" value="${(account.lastName!'')}"/>
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('user.attributes.discipline','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.discipline" class="control-label">Discipline</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.discipline" name="user.attributes.discipline" value="${(account.attributes.discipline!'')}">
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('user.attributes.institute','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.institute" class="control-label">Institute</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.institute" name="user.attributes.institute" value="${(account.attributes.institute!'')}">
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('user.attributes.instituteType','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.instituteType" class="control-label">Institute type</label> <span class="required">*</span>
            </div>

            <div class="col-sm-10 col-md-10">
                <select class="custom-select text-muted" id="user.attributes.instituteType" name="user.attributes.instituteType" required value="${(account.attributes.instituteType!'')}">
                    <option selected disabled><span class="text-muted">${(account.attributes.instituteType!'')}</span></option>
                    <option value="Academic">Academic</option>
                    <option value="Commercial">Commercial</option>
                </select>
            </div>
        </div>

        <div class="form-group row ${messagesPerField.printIfExists('user.attributes.instituteCountry','has-error')}">
            <div class="col-sm-2 col-md-2">
                <label for="user.attributes.instituteCountry" class="control-label">Institute country</label>
            </div>

            <div class="col-sm-10 col-md-10">
                <input type="text" class="form-control" id="user.attributes.instituteCountry" name="user.attributes.instituteCountry" value="${(account.attributes.instituteCountry!'')}">
            </div>
        </div>

        <div class="form-group">
            <div id="kc-form-buttons" class="submit">
                <div class="btn-group float-right">
                    <#if url.referrerURI??><a href="${url.referrerURI}">${kcSanitize(msg("backToApplication")?no_esc)}</a></#if>
                    <button type="submit" formnovalidate="formnovalidate" class="btn btn-lg btn-outline-primary" name="submitAction" value="Cancel">${msg("doCancel")}</button>
                    <input type="button" name="btn" value="Save" id="submitBtn" data-toggle="modal" data-target="#confirm-submit" class="btn btn-lg btn-primary" />
                </div>
            </div>
        </div>

        <div class="modal fade" id="confirm-submit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="text-primary">Confirm change of details</h3>
                    </div>
                    <div class="modal-body">

                        <p>Be aware that changing <a href="https://help.ceda.ac.uk/article/39-ceda-account" target="_blank">CEDA account</a> details such as your <strong>Email</strong>, <strong>Institute type</strong> or <strong>Institute country</strong> could invalidate some of the role conditions that you have signed up to.</p>
                        <p>Remember that you cannot give your account to anybody else.</p>

                        <div class="form-group row mb-0">
                            <div class="col-sm-1 col-md-1">
                                <input type="checkbox" class="form-control form-checkbox mt-2 ml-2" id="termsConditions" name="termsConditions" value="termsConditions" required/>
                            </div>
                            <div class="col-sm-11 col-md-11">
                                <label for="termsConditions" class="control-label">Please check this box to confirm you have read and agree to the <a href="https://help.ceda.ac.uk/" target="_blank">terms and conditions<a> <span class="required">*</span></label> 
                            </div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <div class="btn-group">
                            <button type="button" class="btn btn-lg btn-outline-primary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-lg btn-primary" name="submitAction" value="Save">${msg("doSave")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </form>
</#if>

</@layout.mainLayout>
