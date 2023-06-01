'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-e6aab3e8574d3e5f819620a3287cb7267fe674c9d632b9718f82d1875d593113acf3de75969960b6df2d72362781615870ec0c77e8172ec8f59a32becf03b706"' : 'data-bs-target="#xs-components-links-module-AppModule-e6aab3e8574d3e5f819620a3287cb7267fe674c9d632b9718f82d1875d593113acf3de75969960b6df2d72362781615870ec0c77e8172ec8f59a32becf03b706"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e6aab3e8574d3e5f819620a3287cb7267fe674c9d632b9718f82d1875d593113acf3de75969960b6df2d72362781615870ec0c77e8172ec8f59a32becf03b706"' :
                                            'id="xs-components-links-module-AppModule-e6aab3e8574d3e5f819620a3287cb7267fe674c9d632b9718f82d1875d593113acf3de75969960b6df2d72362781615870ec0c77e8172ec8f59a32becf03b706"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-9e2ab3b04d3d7ac9ae7a1b42d6ac8fbe273165cafab541a8bf04f9019d70b1d97ddc382928587b223933c973bf5833ff7e0fb09e65ed0fe308ec53d170cd3106"' : 'data-bs-target="#xs-components-links-module-AuthModule-9e2ab3b04d3d7ac9ae7a1b42d6ac8fbe273165cafab541a8bf04f9019d70b1d97ddc382928587b223933c973bf5833ff7e0fb09e65ed0fe308ec53d170cd3106"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-9e2ab3b04d3d7ac9ae7a1b42d6ac8fbe273165cafab541a8bf04f9019d70b1d97ddc382928587b223933c973bf5833ff7e0fb09e65ed0fe308ec53d170cd3106"' :
                                            'id="xs-components-links-module-AuthModule-9e2ab3b04d3d7ac9ae7a1b42d6ac8fbe273165cafab541a8bf04f9019d70b1d97ddc382928587b223933c973bf5833ff7e0fb09e65ed0fe308ec53d170cd3106"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CertificadosModule.html" data-type="entity-link" >CertificadosModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CertificadosRoutingModule.html" data-type="entity-link" >CertificadosRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CitasModule.html" data-type="entity-link" >CitasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CitasModule-5cf4b1a5c139906fec8839e94169686da66546c4ec83344af584309c0253f745cfb4829775e386489feb2935ddab534dd2db204c29064fa411b56502c5052730"' : 'data-bs-target="#xs-components-links-module-CitasModule-5cf4b1a5c139906fec8839e94169686da66546c4ec83344af584309c0253f745cfb4829775e386489feb2935ddab534dd2db204c29064fa411b56502c5052730"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CitasModule-5cf4b1a5c139906fec8839e94169686da66546c4ec83344af584309c0253f745cfb4829775e386489feb2935ddab534dd2db204c29064fa411b56502c5052730"' :
                                            'id="xs-components-links-module-CitasModule-5cf4b1a5c139906fec8839e94169686da66546c4ec83344af584309c0253f745cfb4829775e386489feb2935ddab534dd2db204c29064fa411b56502c5052730"' }>
                                            <li class="link">
                                                <a href="components/CitaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CitaNuevaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitaNuevaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TarjetaCitaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TarjetaCitaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CitasRoutingModule.html" data-type="entity-link" >CitasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistorialMedicoModule.html" data-type="entity-link" >HistorialMedicoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistorialMedicoRoutingModule.html" data-type="entity-link" >HistorialMedicoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-6ef004a6bff2cb9814c90e8d55591c8f139246048f2476b03519c987764515f7b3f7e5352bb6639fb809138db7248a64b0f77d16f50c6bd580315c2dc49a944d"' : 'data-bs-target="#xs-components-links-module-LayoutModule-6ef004a6bff2cb9814c90e8d55591c8f139246048f2476b03519c987764515f7b3f7e5352bb6639fb809138db7248a64b0f77d16f50c6bd580315c2dc49a944d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-6ef004a6bff2cb9814c90e8d55591c8f139246048f2476b03519c987764515f7b3f7e5352bb6639fb809138db7248a64b0f77d16f50c6bd580315c2dc49a944d"' :
                                            'id="xs-components-links-module-LayoutModule-6ef004a6bff2cb9814c90e8d55591c8f139246048f2476b03519c987764515f7b3f7e5352bb6639fb809138db7248a64b0f77d16f50c6bd580315c2dc49a944d"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutRoutingModule.html" data-type="entity-link" >LayoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link" >MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MenuModule-225a35789e7d2386b20a632338ebdd7f1a926af777166910acb09ed7855bc6567bf944ab9cce4423dad398cdcdd41115bc907ce3e27354de26607291925d2ab1"' : 'data-bs-target="#xs-components-links-module-MenuModule-225a35789e7d2386b20a632338ebdd7f1a926af777166910acb09ed7855bc6567bf944ab9cce4423dad398cdcdd41115bc907ce3e27354de26607291925d2ab1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MenuModule-225a35789e7d2386b20a632338ebdd7f1a926af777166910acb09ed7855bc6567bf944ab9cce4423dad398cdcdd41115bc907ce3e27354de26607291925d2ab1"' :
                                            'id="xs-components-links-module-MenuModule-225a35789e7d2386b20a632338ebdd7f1a926af777166910acb09ed7855bc6567bf944ab9cce4423dad398cdcdd41115bc907ce3e27354de26607291925d2ab1"' }>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuRoutingModule.html" data-type="entity-link" >MenuRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CitaService.html" data-type="entity-link" >CitaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedicoService.html" data-type="entity-link" >MedicoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PacienteService.html" data-type="entity-link" >PacienteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cita.html" data-type="entity-link" >Cita</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrearCitaDTO.html" data-type="entity-link" >CrearCitaDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrearPacienteDTO.html" data-type="entity-link" >CrearPacienteDTO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Medico.html" data-type="entity-link" >Medico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paciente.html" data-type="entity-link" >Paciente</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pago.html" data-type="entity-link" >Pago</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseLogin.html" data-type="entity-link" >ResponseLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});