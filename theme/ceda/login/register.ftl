<#import "template.ftl" as layout>
<#import "attributes.ftl" as attributes>
<@layout.registrationLayout; section>

<#if section = "header"></#if>

<#if section = "form">
<div class="">
<h1 class="text-center">Create a CEDA Account</h1>
<form id="kc-register-form" class="${properties.kcFormClass!}" action="${url.registrationAction}" method="post">
    <div class="mb-2 mt-4">
        <h4>Personal details</h4>
        <div class="form-row form-row">
            <div class="formColumn form-group col-md-12 mb-0" >
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input type="text" id="lastName" class="${properties.kcInputClass!}" name="lastName" value="${(register.formData.lastName!'')}" placeholder="${msg('lastName')} *">
                    <input type="text" id="firstName" class="${properties.kcInputClass!}" name="firstName" value="${(register.formData.firstName!'')}" placeholder="${msg('firstName')} *">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                </div>
                <input type="text" id="email" class="${properties.kcInputClass!}" name="email" value="${(register.formData.email!'')}" autocomplete="email" placeholder="${msg('email')} *">
            </div>
            <small class="form-text text-muted">You will be required to verify this email address</small>
        </div>
    </div>
    <div class="my-2">
        <h4>Additional information</h4>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-flask"></i> </span>
                </div>
                <select class="custom-select text-muted" id="user.attributes.discipline" name="user.attributes.discipline" value="${(register.formData['user.attributes.discipline']!'')}" placeholder="">
                    <#if register.formData['user.attributes.discipline']??>
                    <option selected value="${register.formData['user.attributes.discipline']}"><span class="text-muted">${register.formData['user.attributes.discipline']}</span></option>
                    <#else>
                    <option selected disabled value=""><span class="text-muted">Select your primary academic discipline...</span></option>
                    </#if>
                    <@attributes.disciplines />
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                    </div>
                    <input type="text" class="form-control" id="user.attributes.institute" name="user.attributes.institute" value="${(register.formData['user.attributes.institute']!'')}" placeholder="Institute name">
                </div>
                <small class="form-text text-muted">The name of the instition you are associated with</small>
            </div>
            <div class="form-group col-md-4">
                <select class="custom-select text-muted" id="user.attributes.instituteType" name="user.attributes.instituteType" required value="${(register.formData['user.attributes.instituteType']!'')}" placeholder="">
                    <#if register.formData['user.attributes.instituteType']??>
                    <option selected value="${register.formData['user.attributes.instituteType']}"><span class="text-muted">${register.formData['user.attributes.instituteType']}</span></option>
                    <#else>
                    <option selected disabled value=""><span class="text-muted">Select institute type... <span class="required">*</span></span></option>
                    </#if>
                    <@attributes.institute_types />
                </select>
                <small class="form-text text-muted">The type of institution, e.g. "Academic"</small>
            </div>
            <div class="form-group col-md-4">
                <select class="custom-select text-muted" id="user.attributes.instituteCountry" name="user.attributes.instituteCountry" value="${(register.formData['user.attributes.instituteCountry']!'')}" placeholder="">
                    <#if register.formData['user.attributes.instituteCountry']??>
                    <option selected value="${register.formData['user.attributes.instituteCountry']}"><span class="text-muted">${register.formData['user.attributes.instituteCountry']}</span></option>
                    <#else>
                    <option selected disabled value=""><span class="text-muted">Select institute country...</span></option>
                    </#if>
                    <@attributes.countries />
                </select>
                <small class="form-text text-muted">The country where your institute is based</small>
            </div>
        </div>
    </div>
    <div class="mt-2">
        <h4>Account details</h4>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-pencil-alt"></i> </span>
                </div>
                <input type="text" id="username" class="${properties.kcInputClass!}" name="username" value="${(register.formData.username!'')}" autocomplete="username" placeholder="${msg('username')} *">
            </div>
            <small class="form-text text-muted">This will be a unique ID associated with your account</small>
        </div>
        <div class="form-row form-row">
            <div class="formColumn form-group col-md-12 mb-0" >
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input type="password" id="password" class="${properties.kcInputClass!}" name="password" autocomplete="new-password" placeholder="${msg('password')} *">
                    <input type="password" id="password-confirm" class="${properties.kcInputClass!}" name="password-confirm" placeholder="${msg('passwordConfirm')} *">
                </div>
            </div>
        </div>
    </div>
    <div class="mt-3">
        <input type="checkbox" class="form-control form-checkbox" id="termsConditions" name="termsConditions" required/>
        <label for="termsConditions" class="control-label">Before proceeding, you must confirm that you are over the age of 18 and have read and agree with our <a href="">terms and conditions</a></label><span class="required">*</span>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
        </div>
        <p class="text-center">Have an account? <a href="${url.loginUrl}">Log In</a> </p>
    </div>
</form>
</div>
</#if>
</@layout.registrationLayout>