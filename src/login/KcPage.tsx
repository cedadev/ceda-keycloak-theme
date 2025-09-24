import "./css/login.css";
import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "./DefaultPage";
import Template from "./Template";
const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {
    kcHtmlClass: "",
    kcBodyClass: "",
    kcHeaderWrapperClass: "",
    kcLocaleWrapperClass: "",
    kcInfoAreaWrapperClass: "",
    kcFormButtonsWrapperClass: "",
    kcFormOptionsWrapperClass: "",
    kcLocaleDropDownClass: "dropdown",
    kcLocaleListItemClass: "",
    kcContentWrapperClass: "",
    kcCheckboxInputClass: "",
    "kcLogoIdP-facebook": "fa fa-facebook",
    kcAuthenticatorOTPClass: "fa fa-mobile",
    "kcLogoIdP-bitbucket": "fa fa-bitbucket",
    kcAuthenticatorWebAuthnClass: "fa fa-key",
    kcWebAuthnDefaultIcon: "",
    "kcLogoIdP-stackoverflow": "fa fa-stack-overflow",
    kcSelectAuthListItemClass: "select-auth-box-parent",
    "kcLogoIdP-microsoft": "fa fa-windows",
    kcLoginOTPListItemHeaderClass: "",
    kcLocaleItemClass: "dropdown-item",
    kcLoginOTPListItemIconBodyClass: "",
    kcInputHelperTextAfterClass: "",
    kcFormClass: "form-horizontal",
    kcSelectAuthListClass: "select-auth-container",
    kcInputClassRadioCheckboxLabelDisabled: "",
    kcSelectAuthListItemIconClass: "select-auth-box-icon",
    kcRecoveryCodesWarning: "kc-recovery-codes-warning",
    kcFormSettingClass: "",
    kcWebAuthnBLE: "fa fa-bluetooth-b",
    kcInputWrapperClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcSelectAuthListItemArrowIconClass: "fa fa-angle-right fa-lg",
    kcFeedbackAreaClass: "col-md-12",
    kcFormPasswordVisibilityButtonClass: "btn btn-outline-primary",
    "kcLogoIdP-google": "fa fa-google",
    kcCheckLabelClass: "",
    kcSelectAuthListItemFillClass: "",
    kcAuthenticatorDefaultClass: "fa fa-list",
    "kcLogoIdP-gitlab": "fa fa-gitlab",
    kcFormAreaClass: "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",
    kcFormButtonsClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcInputClassRadioLabel: "",
    kcAuthenticatorWebAuthnPasswordlessClass: "fa fa-key",
    kcSelectAuthListItemHeadingClass: "select-auth-box-headline",
    kcInfoAreaClass: "col-xs-12 col-sm-4 col-md-4 col-lg-5 details",
    kcLogoLink: "http://www.keycloak.org",
    kcContainerClass: "container-fluid",
    kcSelectAuthListItemTitle: "select-auth-box-paragraph",
    kcLoginOTPListItemTitleClass: "",
    "kcLogoIdP-openshift-v4": "",
    kcWebAuthnUnknownIcon: "unknown-transport-class",
    kcFormSocialAccountNameClass: "kc-social-provider-name",
    "kcLogoIdP-openshift-v3": "",
    kcLoginOTPListInputClass: "",
    kcWebAuthnUSB: "fa fa-usb",
    kcInputClassRadio: "",
    kcWebAuthnKeyIcon: "",
    kcFeedbackInfoIcon: "fa fa-fw fa-info-circle",
    kcCommonLogoIdP: "kc-social-provider-logo kc-social-gray",
    kcRecoveryCodesActions: "kc-recovery-codes-actions",
    kcFormGroupHeader: "",
    kcFormSocialAccountSectionClass: "kc-social-section kc-social-gray",
    "kcLogoIdP-instagram": "fa fa-instagram",
    kcAlertClass: "",
    kcHeaderClass: "",
    kcLabelWrapperClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcFormPasswordVisibilityIconShow: "fa fa-eye",
    kcFormSocialAccountLinkClass: "",
    kcLocaleMainClass: "",
    kcInputGroup: "input-group",
    kcTextareaClass: "form-control",
    kcButtonBlockClass: "btn-block",
    kcButtonClass: "btn",
    kcWebAuthnNFC: "fa fa-wifi",
    kcLocaleClass: "col-xs-12 col-sm-1",
    kcInputClassCheckboxInput: "",
    kcFeedbackErrorIcon: "fa fa-fw fa-exclamation-circle",
    kcInputLargeClass: "input-lg",
    kcInputErrorMessageClass: "required kc-feedback-text text-danger",
    kcRecoveryCodesList: "kc-recovery-codes-list",
    kcFormSocialAccountListClass: "kc-social-links",
    kcAlertTitleClass: "kc-feedback-text",
    kcAuthenticatorPasswordClass: "fa fa-unlock",
    kcCheckInputClass: "",
    "kcLogoIdP-linkedin": "fa fa-linkedin",
    "kcLogoIdP-twitter": "fa fa-twitter",
    kcFeedbackWarningIcon: "fa fa-fw fa-exclamation-triangle",
    kcResetFlowIcon: "fa",
    kcSelectAuthListItemIconPropertyClass: "fa-2x select-auth-box-icon-properties",
    kcFeedbackSuccessIcon: "fa fa-fw fa-check-circle",
    kcLoginOTPListClass: "",
    kcSrOnlyClass: "sr-only",
    kcFormSocialAccountListGridClass: "kc-social-grid",
    kcButtonDefaultClass: "btn-default",
    kcFormGroupErrorClass: "has-error",
    kcSelectAuthListItemDescriptionClass: "select-auth-box-desc",
    kcSelectAuthListItemBodyClass: "",
    kcWebAuthnInternal: "",
    kcSelectAuthListItemArrowClass: "select-auth-box-arrow",
    kcCheckClass: "",
    kcContentClass: "col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",
    kcLogoClass: "",
    kcLoginOTPListItemIconClass: "fa fa-mobile",
    kcLoginClass: "",
    kcSignUpClass: "",
    kcButtonLargeClass: "btn-lg",
    kcFormCardClass: "",
    kcLocaleListClass: "dropdown-menu",
    kcInputClass: "form-control",
    kcFormGroupClass: "form-group",
    "kcLogoIdP-paypal": "fa fa-paypal",
    kcInputClassCheckbox: "",
    kcRecoveryCodesConfirmation: "kc-recovery-codes-confirmation",
    kcFormPasswordVisibilityIconHide: "fa fa-eye-slash",
    kcInputClassRadioInput: "",
    kcFormSocialAccountListButtonClass: "kc-social-item kc-social-gray",
    kcInputClassCheckboxLabel: "",
    kcFormOptionsClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcFormHeaderClass: "navbar navbar-expand-lg fixed-top navbar-dark bg-primary",
    kcFormSocialAccountGridItem: "",
    kcButtonPrimaryClass: "btn-primary",
    kcInputHelperTextBeforeClass: "",
    "kcLogoIdP-github": "fa fa-github",
    kcLabelClass: "label"
} satisfies { [key in ClassKey]?: string };
