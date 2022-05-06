<#macro baseLayout bodyClass="" displayInfo=false displayMessage=true displayRequiredFields=false displayWide=false showAnotherWayIfPresent=true>
<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <title><#nested "header"></title>
        <link rel="icon" href="${url.resourcesPath}/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <!-- Bootstrap Core CSS -->
        <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/4/flatly/bootstrap.css" media="screen">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/custom.min.css">
        <link rel="stylesheet" href="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/css/org-custom.css">
        <!-- Custom Fonts -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">

        <#if properties.styles?has_content>
            <#list properties.styles?split(' ') as style>
                <link href="${url.resourcesPath}/${style}" rel="stylesheet" />
            </#list>
        </#if>
        <#if properties.scripts?has_content>
            <#list properties.scripts?split(' ') as script>
                <script type="text/javascript" src="${url.resourcesPath}/${script}"></script>
            </#list>
        </#if>

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NDG2XX7');</script>
        <!-- End Google Tag Manager -->

    </head>
    <body id="body">

        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDG2XX7"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div class="container">
                <a href="http://archive.ceda.ac.uk/" class="navbar-brand">
                    <img src="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/img/ceda_archive_logo_transp_white_3_h80.png" alt="CEDA logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <#nested "navbar">

                <#if realm.internationalizationEnabled  && locale.supported?size gt 1>
                <div class="dropdown">
                    <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-globe"></i> ${locale.current}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <#list locale.supported as l>
                        <a class="dropdown-item" href="${l.url}">${l.label}</a>
                        </#list>
                    </div>
                </div>
                </#if>
            </div>
        </div>

        <div class="container">
            <#nested "content">
        </div>

        <footer>
        <div class="container">
            <div class="row d-flex justify-content-around border border-light border-bottom-0 border-left-0 border-right-0 pt-5 pb-2 mt-5">
                <div class="col col-md-4 text-center ">
                    <a href="http://www.ncas.ac.uk" title="NCAS"><img src="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/img/ncas_logo_transparent_blacktext.png" title="NCAS logo" alt="NCAS logo" ></a>
                </div>
                <div class="col-md-4">
                    <p class="text-center small">
                        Copyright © 2018 <a href="http://www.stfc.ac.uk">STFC</a>
                        All Rights Reserved<br>
                        <a href="http://www.ceda.ac.uk/accessibility" target="_blank">Accessibility</a> |
                        <a href="http://www.ceda.ac.uk/disclaimer" target="_blank">Disclaimer</a> |
                        <a href="http://www.ceda.ac.uk/privacy-and-cookies/" target="_blank">Privacy and Cookies</a><br/>
                        <a href="http://www.ceda.ac.uk" target="_blank">CEDA</a>
                    </p>
                </div>
                <div class="col col-md-4 text-center">
                    <a href="http://www.nceo.ac.uk" title="STFC"><img src="https://artefacts.ceda.ac.uk/themes/orgtheme_ceda_serv/0.2/_assets/img/nceologo200.png" title="NCEO logo" alt="NCEO logo"></a>
                </div>
            </div>
            </div>
        </footer>

        <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/jquery/dist/jquery.min.js"></script>
        <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/popper.js/dist/umd/popper.min.js"></script>
        <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_vendor/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="https://artefacts.ceda.ac.uk/themes/orgtheme/0.2/_assets/js/custom.js"></script>

    </body>
</html>
</#macro>
