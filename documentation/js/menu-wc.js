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
                    <a href="index.html" data-type="index-link">books documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Eingeben zur Suche"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Los geht&#x27;s</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Übersicht
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Abhängigkeiten
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Eigenschaften
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Module</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-5e2424c1fb1da0f8fb7e3840ae06a6dcb58635f7dc927685ffb19a512d69ea349ae33f9281f46d29b3d0e8f1a5fa5fbf0e7b8c36adbf8b712d3ac8247ec2f00d"' : 'data-bs-target="#xs-components-links-module-AdminModule-5e2424c1fb1da0f8fb7e3840ae06a6dcb58635f7dc927685ffb19a512d69ea349ae33f9281f46d29b3d0e8f1a5fa5fbf0e7b8c36adbf8b712d3ac8247ec2f00d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponenten</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-5e2424c1fb1da0f8fb7e3840ae06a6dcb58635f7dc927685ffb19a512d69ea349ae33f9281f46d29b3d0e8f1a5fa5fbf0e7b8c36adbf8b712d3ac8247ec2f00d"' :
                                            'id="xs-components-links-module-AdminModule-5e2424c1fb1da0f8fb7e3840ae06a6dcb58635f7dc927685ffb19a512d69ea349ae33f9281f46d29b3d0e8f1a5fa5fbf0e7b8c36adbf8b712d3ac8247ec2f00d"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-9359539f9b0895e384cf1cdb26c9d7ba33d8aa586ea7f82c222697cdcb8f87676d50939cb194cecbb180ec4d019537b6d55a7d1ae86618b6e233f7de3251f9e2"' : 'data-bs-target="#xs-components-links-module-AppModule-9359539f9b0895e384cf1cdb26c9d7ba33d8aa586ea7f82c222697cdcb8f87676d50939cb194cecbb180ec4d019537b6d55a7d1ae86618b6e233f7de3251f9e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponenten</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9359539f9b0895e384cf1cdb26c9d7ba33d8aa586ea7f82c222697cdcb8f87676d50939cb194cecbb180ec4d019537b6d55a7d1ae86618b6e233f7de3251f9e2"' :
                                            'id="xs-components-links-module-AppModule-9359539f9b0895e384cf1cdb26c9d7ba33d8aa586ea7f82c222697cdcb8f87676d50939cb194cecbb180ec4d019537b6d55a7d1ae86618b6e233f7de3251f9e2"' }>
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
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' : 'data-bs-target="#xs-components-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponenten</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' :
                                            'id="xs-components-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' }>
                                            <li class="link">
                                                <a href="components/BookDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' : 'data-bs-target="#xs-pipes-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' :
                                            'id="xs-pipes-links-module-BooksModule-c1875b0daeac71e4bd2dcfcee07dc804c842c8955521755b9f293345fbe2bcd9db2c1f50cc48271f0963a4b2f7d053f3f058bc58f4f3e12d891c5f4dfa1d15c6"' }>
                                            <li class="link">
                                                <a href="pipes/BookFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-71e5d9dc428e5e4ad04f5517d5e77903a94219af3e8784bc74d8a710eeb1d1819e09f316e8ffd70736c7b4614adb53d11bd601937e32d0d239f4ade18c38dfd7"' : 'data-bs-target="#xs-components-links-module-SharedModule-71e5d9dc428e5e4ad04f5517d5e77903a94219af3e8784bc74d8a710eeb1d1819e09f316e8ffd70736c7b4614adb53d11bd601937e32d0d239f4ade18c38dfd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Komponenten</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-71e5d9dc428e5e4ad04f5517d5e77903a94219af3e8784bc74d8a710eeb1d1819e09f316e8ffd70736c7b4614adb53d11bd601937e32d0d239f4ade18c38dfd7"' :
                                            'id="xs-components-links-module-SharedModule-71e5d9dc428e5e4ad04f5517d5e77903a94219af3e8784bc74d8a710eeb1d1819e09f316e8ffd70736c7b4614adb53d11bd601937e32d0d239f4ade18c38dfd7"' }>
                                            <li class="link">
                                                <a href="components/CalculatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                    <a href="injectables/BookDataService.html" data-type="entity-link" >BookDataService</a>
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
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Verschiedenes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variablen</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routen</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Dokumentation Abdeckung</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Dokumentation generiert mit <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});