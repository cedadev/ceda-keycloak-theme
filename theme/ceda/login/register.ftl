<#import "template.ftl" as layout>
<@layout.registrationLayout; section>

<#if section = "header"></#if>

<#if section = "form">
<div class="">
<h1 class="text-center">Create a CEDA Account</h1>
<form  method="post">
    <div class="mb-2 mt-4">
        <h4>Personal details</h4>
        <div class="form-row form-row">
            <div class="formColumn form-group col-md-12 mb-0" >
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Surname *" type="text">
                    <input name="" class="form-control" placeholder="Other names *" type="text">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                </div>
                <input name="" class="form-control" placeholder="Email address *" type="text">
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
                <input name="" class="form-control" placeholder="Discipline" type="text">
            </div>
            <small class="form-text text-muted">Your primary academic discipline</small>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Institute name" type="text">
                </div>
                <small class="form-text text-muted">The name of the instition you are associated with</small>
            </div>
            <div class="form-group col-md-4">
                <input name="" class="form-control" placeholder="Institute type" type="text">
                <small class="form-text text-muted">The type of institution, e.g. "Academic"</small>
            </div>
            <div class="form-group col-md-4">
                <input name="" class="form-control" placeholder="Institute country" type="text">
                <small class="form-text text-muted">The country where your institute is based</small>
            </div>
        </div>
    </div>
    <div class="mt-2">
        <h4>Account details</h4>
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
            </div>
            <input name="" class="form-control" placeholder="Username" type="text">
        </div>
        <div class="form-row form-row">
            <div class="formColumn form-group col-md-12 mb-0" >
                <div class="form-group input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Create password *" type="text">
                    <input name="" class="form-control" placeholder="Repeat password *" type="text">
                </div>
            </div>
        </div>
    </div>
    <div class="mt-3">
        <p>Before proceeding, you must confirm that you are over the age of 18 and have read and agree with our <a href="">terms and conditions</a></p>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
        </div>
        <p class="text-center">Have an account? <a href="">Log In</a> </p>
    </div>
</form>
</div>
</#if>
</@layout.registrationLayout>