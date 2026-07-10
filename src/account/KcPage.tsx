import "./css/account.css";
import { Suspense } from "react";
import type { ClassKey } from "keycloakify/account";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/account/DefaultPage";
import Template from "./Template";

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    default:
                        return <DefaultPage kcContext={kcContext} i18n={i18n} classes={classes} Template={Template} doUseDefaultCss={false} />;
                }
            })()}
        </Suspense>
    );
}

const classes = {
    kcHtmlClass: "",
    kcBodyClass: "",
    kcContentWrapperClass: "",
    kcFormClass: "form-horizontal",
    kcInputWrapperClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
    kcButtonClass: "btn",
    kcInputErrorMessageClass: "required kc-feedback-text text-danger",
    kcButtonDefaultClass: "btn-default",
    kcButtonLargeClass: "btn-lg",
    kcInputClass: "form-control",
    kcFormGroupClass: "form-group",
    kcButtonPrimaryClass: "btn-primary",
    kcLabelClass: "label"
} satisfies { [key in ClassKey]?: string };
