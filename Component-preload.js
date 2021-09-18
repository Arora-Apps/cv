//@ui5-bundle nrarora/cv/Component-preload.js
sap.ui.require.preload({
	"nrarora/cv/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/BindingMode","sap/ui/model/json/JSONModel"],function(t,e,n,s){const i=t.extend("nrarora.cv.Component",{metadata:{manifest:"json"},init:function i(){t.prototype.init.call(this);const o=new s(sap.ui.require.toUrl("nrarora/cv/model/mydata.json"));this.setModel(o,"mydata");const a=new s(sap.ui.require.toUrl("nrarora/cv/model/IntroModel.json"));this.setModel(a,"CardModel");const c=new s(e);c.setDefaultBindingMode(n.OneWay);this.setModel(c,"device");this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});
},
	"nrarora/cv/controller/BaseController.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","../Component"],function(e,t,o){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const a=n(o);const i=e.extend("nrarora.cv.controller.BaseController",{onInit:function e(){this.initTheme();this.initLanguage();this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())},getRouter:function e(){return a.getRouterFor(this)},onNavBack:function e(){const o=t.getInstance();const n=o.getPreviousHash();if(n!==undefined){window.history.go(-1)}else{this.getRouter().navTo("home",{})}},initTheme:function e(){const t=localStorage.getItem("theme");if(t){sap.ui.getCore().applyTheme(t)}else{sap.ui.getCore().applyTheme("sap_fiori_3");localStorage.setItem("theme","sap_fiori_3")}},toggleTheme:function e(){const t=localStorage.getItem("theme");if(t==="sap_fiori_3"){sap.ui.getCore().applyTheme("sap_fiori_3_dark");localStorage.setItem("theme","sap_fiori_3_dark")}else{sap.ui.getCore().applyTheme("sap_fiori_3");localStorage.setItem("theme","sap_fiori_3")}},initLanguage:function e(){const t=localStorage.getItem("lang");if(t){sap.ui.getCore().getConfiguration().setLanguage(t)}else{sap.ui.getCore().getConfiguration().setLanguage("EN");localStorage.setItem("lang","EN")}},toggleLanguage:function e(){const t=localStorage.getItem("lang");if(t==="EN"){sap.ui.getCore().getConfiguration().setLanguage("DE");localStorage.setItem("lang","DE")}else{sap.ui.getCore().getConfiguration().setLanguage("EN");localStorage.setItem("lang","EN")}},_getVal:function e(t){return t.getSource().getText()},getI18nValue:function e(t){return this.getView().getModel("i18n").getProperty(t)}});return i});
},
	"nrarora/cv/controller/Home.controller.js":function(){sap.ui.define(["nrarora/cv/controller/BaseController.controller","sap/m/library","sap/m/PDFViewer","sap/ui/core/Fragment","sap/ui/model/json/JSONModel"],function(e,t,i,n,r){function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=o(e);const a=t["URLHelper"];const l=s.extend("nrarora.cv.controller.App",{onInit:function e(){this.setExpValue()},handleEmailPress:function e(t){a.triggerEmail(this._getVal(t),"Info Request")},handleTelPress:function e(t){a.triggerTel(this._getVal(t))},handleUrlPress:function e(t){a.redirect(this._getVal(t),true)},onAvatarClicked:function e(){a.redirect("https://www.linkedin.com/in/nishant-arora-75a4653b",true)},onPreview:function e(){this._pdfViewer=this._pdfViewer??new i;this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));this._pdfViewer.setTitle(this.getI18nValue("title"));this._pdfViewer.open()},onDownload:function e(){this._pdfViewer=this._pdfViewer??new i;this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));this._pdfViewer.downloadPDF()},onGenericTagPress:async function e(t){const i=this.getView().getModel("CardModel");const r=t.getSource(),o=this.getView();if(!this._pQuickView){this._pQuickView=await n.load({id:o.getId(),name:"nrarora.cv.view.Quickview",controller:this});o.addDependent(this._pQuickView)}this._pQuickView.setModel(i);this._pQuickView.openBy(r)},onGenericTagPressDialog:async function e(t){},handleCloseButton:function e(){this.byId("PdfPopover").close()},setExpValue:function e(){const t=new Date(2012,5,20);const i=new Date;const n=i.getFullYear()-t.getFullYear();const o=parseFloat(Math.abs((t.getMonth()-i.getMonth())/12).toFixed(1));const s=new r({approx:`${n+o}`,exact:`${n}+`});this.getView().setModel(s,"exp")}});return l});
},
	"nrarora/cv/controller/NotFound.controller.js":function(){sap.ui.define(["nrarora/cv/controller/BaseController.controller"],function(n){function o(n){return n&&n.__esModule&&typeof n.default!=="undefined"?n.default:n}const e=o(n);const r=e.extend("nrarora.cv.controller.NotFound",{onInit:function n(){}});return r});
},
	"nrarora/cv/i18n/i18n.properties":'title=Curriculum Vitae\nappTitle=Curriculum Vitae\nappDescription=Curriculum Vitae App\nNotFound=Not Found\nNotFound.text=Sorry, but the requested resource is not available.\nNotFound.description=Please check the URL and try again.\ndownload=Download\nname=Nishant Arora\nsubheading=SAP Consultant and Full Stack Deveoper\nkeySkills=Key Skills\nskillset=SAP ABAP, TypeScript, Javascript\ncontactInfo=Contact Information\nemail=Email\nmobile=Mobile\nwebsite=Website\naddress=Address\nphone=Phone\ncardtitle=Professional Experience\ncardsubtitle=Total IT Experience\ntooltip.download=Download PDF\nskills=Skills\nexperience=Experience\nobjective=Career Objective\ncareerObj=Seeking a challenging and rewarding position to utilize my skills and abilities that offers professional growth and satisfaction while working in result-oriented manner towards achieving organizational goals\ncStatus=Current Status',
	"nrarora/cv/i18n/i18n_de.properties":'title=Lebenslauf\nappTitle=Lebenslauf\nappDescription=Lebenslauf-App\nNotFound=Nicht gefunden\nNotFound.text=Die angeforderte Ressource ist leider nicht verf\\u00fcgbar.\nNotFound.description=Bitte \\u00fcberpr\\u00fcfen Sie die URL und versuchen Sie es erneut.\ndownload=Herunterladen\nname=Nishant Arora\nsubheading=SAP-Berater und Full-Stack-Entwickler\nkeySkills=Schl\\u00fcsselfertigkeiten\nskillset=SAP ABAP, TypeScript, Javascript\ncontactInfo=Kontaktinformationen\nemail=Email\nmobile=Mobile\nwebsite=Website\naddress=Address\nphone=Phone\ncardtitle=Berufserfahrung\ncardsubtitle=Total IT Experience\ntooltip.download=PDF Herunterladen\nskills=F\\u00e4higkeiten\nexperience=Arbeitserfahrung\nobjective=Karriere-Ziel\ncareerObj=Ich suche eine herausfordernde und lohnende Position, um meine F\\u00e4higkeiten und Fertigkeiten zu nutzen, die berufliches Wachstum und Zufriedenheit bietet, w\\u00e4hrend ich ergebnisorientiert an der Erreichung der Unternehmensziele arbeite\ncStatus=Aktueller Status',
	"nrarora/cv/i18n/i18n_en.properties":'title=Curriculum Vitae\nappTitle=Curriculum Vitae\nappDescription=Curriculum Vitae App\nNotFound=Not Found\nNotFound.text=Sorry, but the requested resource is not available.\nNotFound.description=Please check the URL and try again.\ndownload=Download\nname=Nishant Arora\nsubheading=SAP Consultant and Full Stack Deveoper\nkeySkills=Key Skills\nskillset=SAP ABAP, TypeScript, Javascript\ncontactInfo=Contact Information\nemail=Email\nmobile=Mobile\nwebsite=Website\naddress=Address\nphone=Phone\ncardtitle=Professional Experience\ncardsubtitle=Total IT Experience\ntooltip.download=Download PDF\nskills=Skills\nexperience=Experience\nobjective=Career Objective\ncareerObj=Seeking a challenging and rewarding position to utilize my skills and abilities that offers professional growth and satisfaction while working in result-oriented manner towards achieving organizational goals\ncStatus=Current Status',
	"nrarora/cv/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"nrarora.cv","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"nrarora.cv.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.91.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"nrarora.cv.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"nrarora.cv.view","controlId":"app","controlAggregation":"pages","async":true,"transition":"slide","bypassed":{"target":"notFound"}},"routes":[{"pattern":"","name":"home","target":"home"}],"targets":{"home":{"viewId":"appHome","viewName":"Home","transition":"slide","viewLevel":1},"notFound":{"viewId":"notFound","viewName":"NotFound","transition":"show"}}}}}',
	"nrarora/cv/view/App.view.xml":'<mvc:View controllerName="nrarora.cv.controller.BaseController"\n    displayBlock="true"\n    height="100%"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><Shell><App id="app" /></Shell></mvc:View>',
	"nrarora/cv/view/Home.view.xml":'<mvc:View controllerName="nrarora.cv.controller.Home"\n    displayBlock="true"\n    height="100%"\n    xmlns="sap.uxap"\n    xmlns:m="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns:core="sap.ui.core"><m:Page title="{i18n>appTitle}"\n        titleLevel="H3"\n        titleAlignment="Center"><m:headerContent><m:Button icon="sap-icon://download"\n                press="onPreview"\n                tooltip="{i18n>tooltip.download}"\n                ariaHasPopup="Dialog"/><m:Avatar src="./images/linkedin.png"\n                displaySize="XS"\n                press="onAvatarClicked"/><m:Button icon="sap-icon://palette"\n                press=".toggleTheme"\n                tooltip="Toggle theme Dark/Light"/><m:Button icon="./images/language.png"\n                press=".toggleLanguage"\n                tooltip="Toggle language EN/DE"/></m:headerContent><ObjectPageLayout id="ObjectPageLayout"\n            showTitleInHeaderContent="true"\n            upperCaseAnchorBar="false"><headerTitle><ObjectPageDynamicHeaderTitle><expandedHeading><m:HBox alignItems="End"><m:Title text="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"\n                                wrapping="false"/><m:GenericTag text="{i18n>experience}"\n                                status="Success"\n                                press="onGenericTagPress"\n                                design="StatusIconHidden"\n                                class="sapUiSmallMarginBegin sapUiTinyMarginBottom"><m:ObjectNumber id="expValue"\n                                    number="{exp>/exact}"\n                                    unit="yrs"\n                                    emphasized="true"\n                                    state="Success"/></m:GenericTag></m:HBox></expandedHeading><snappedHeading><m:HBox alignItems="Center"><m:Avatar initials="NA"\n                                class="sapUiSmallMarginEnd"\n                                displaySize="S"><m:detailBox><m:LightBox><m:LightBoxItem imageSrc="./images/photo.jpg"\n                                            alt="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"\n                                            title="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"\n                                            subtitle="{path: \'mydata>/pages/title\', formatter: \'.getI18nValue\'}"></m:LightBoxItem></m:LightBox></m:detailBox></m:Avatar><m:VBox><m:HBox alignItems="End"><m:Title text="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"/></m:HBox><m:Label text="{path: \'mydata>/pages/title\', formatter: \'.getI18nValue\'}"\n                                    wrapping="true"\n                                    class="sapUiTinyMarginTop"/></m:VBox></m:HBox></snappedHeading><expandedContent><m:Text text="{path: \'mydata>/pages/title\', formatter: \'.getI18nValue\'}"/></expandedContent><snappedTitleOnMobile><m:Title text="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"/></snappedTitleOnMobile></ObjectPageDynamicHeaderTitle></headerTitle><headerContent><m:FlexBox wrap="Wrap"\n                    fitContainer="true"><m:Avatar src="./images/photo.jpg"\n                        initials="NA"\n                        class="sapUiMediumMarginEnd sapUiSmallMarginBottom"\n                        displaySize="XL"><m:detailBox><m:LightBox><m:LightBoxItem imageSrc="./images/photo.jpg"\n                                    alt="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"\n                                    title="{path: \'mydata>/pages/name\', formatter: \'.getI18nValue\'}"\n                                    subtitle="{path: \'mydata>/pages/title\', formatter: \'.getI18nValue\'}"></m:LightBoxItem></m:LightBox></m:detailBox></m:Avatar><m:VBox class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><m:Title text="{i18n>contactInfo}"\n                            class="sapUiTinyMarginBottom" /><m:HBox class="sapUiTinyMarginBottom"><core:Icon src="sap-icon://outgoing-call"/><m:Link text="{mydata>/pages/mobile}"\n                                class="sapUiSmallMarginBegin"\n                                press="handleTelPress"/></m:HBox><m:HBox class="sapUiTinyMarginBottom"><core:Icon src="sap-icon://email"/><m:Link text="{mydata>/pages/email}"\n                                class="sapUiSmallMarginBegin"\n                                press="handleEmailPress"/></m:HBox><m:HBox class="sapUiTinyMarginBottom"><core:Icon src="sap-icon://internet-browser"/><m:Link text="{mydata>/pages/website}"\n                                class="sapUiSmallMarginBegin"\n                                press="handleUrlPress"/></m:HBox></m:VBox><m:VBox class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><m:Title text="{i18n>keySkills}"\n                            class="sapUiTinyMarginBottom"/><m:ObjectStatus text="SAP ABAP"\n                            state="Success"\n                            icon="sap-icon://message-success"\n                            class="sapUiTinyMarginBottom"/><m:ObjectStatus text="Typescript"\n                            state="Success"\n                            icon="sap-icon://message-success"\n                            class="sapUiTinyMarginBottom"/><m:ObjectStatus text="UI5"\n                            state="Success"\n                            icon="sap-icon://message-success"\n                            class="sapUiTinyMarginBottom"/></m:VBox><m:VBox width="430px"\n                        class="sapUiLargeMarginEnd sapUiSmallMarginBottom"><m:Title text="{i18n>objective}"\n                            class="sapUiTinyMarginBottom"/><m:Text text="{i18n>careerObj}"/></m:VBox></m:FlexBox></headerContent><sections><ObjectPageSection titleUppercase="false"\n                    id="skillsSection"\n                    title="{i18n>skills}"\n                    titleLevel="H1"><subSections><ObjectPageSubSection id="personal"\n                            title="Personal"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented" /><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection><ObjectPageSubSection id="technical"\n                            title="Technical"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection><ObjectPageSubSection id="functional"\n                            title="Functional"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false"\n                    id="experienceSection"\n                    title="{i18n>experience}"\n                    titleLevel="H1"><subSections><ObjectPageSubSection id="sap"\n                            title="SAP Labs"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection><ObjectPageSubSection id="acn"\n                            title="Accenture"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false"\n                    id="currentStatus"\n                    title="{i18n>cStatus}"\n                    titleLevel="H1"><subSections><ObjectPageSubSection id="company"\n                            title="Company"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection><ObjectPageSubSection id="work"\n                            title="Work"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection><ObjectPageSubSection id="location"\n                            title="Location"\n                            titleUppercase="false"><m:VBox renderType="List"><m:Text text="Goal Oriented"/><m:Text text="Able to perform under pressure"/><m:Text text="Capable to learn new technology very fast"/><m:Text text="Have strong analytical problem solving abilities"/><m:Text text="Strong Team Player with excellent skills to handle a team"/><m:Text text="An effective communicator"/></m:VBox></ObjectPageSubSection></subSections></ObjectPageSection></sections></ObjectPageLayout></m:Page></mvc:View>',
	"nrarora/cv/view/NotFound.view.xml":'<mvc:View controllerName="nrarora.cv.controller.NotFound"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc"><MessagePage title="{i18n>NotFound}" text="{i18n>NotFound.text}" description="{i18n>NotFound.description}" showNavButton="true" navButtonPress="onNavBack"/></mvc:View>',
	"nrarora/cv/view/Quickview.fragment.xml":'<core:FragmentDefinition xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:f="sap.f"><QuickView id="quickView" pages="{\n\t\t\tpath: \'/pages\',\n\t\t\ttemplateShareable: true\n\t\t\t}" navigate=".onNavigate"><QuickViewPage pageId="{pageId}" header="{header}" icon="{icon}" title="{title}" titleUrl="{titleUrl}" description="{description}" groups="{\n\t\t\t\tpath: \'groups\',\n\t\t\t\ttemplateShareable: true\n\t\t\t}"><QuickViewGroup heading="{heading}" elements="{ path: \'elements\', templateShareable: true }"><QuickViewGroupElement label="{ path: \'label\', formatter: \'.getI18nValue\' }" value="{value}" url="{url}" type="{elementType}" pageLinkId="{pageLinkId}" emailSubject="{emailSubject}" target="{target}" /></QuickViewGroup></QuickViewPage></QuickView></core:FragmentDefinition>'
});