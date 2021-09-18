sap.ui.define(["nrarora/cv/controller/BaseController.controller","sap/m/library","sap/m/PDFViewer","sap/ui/core/Fragment","sap/ui/model/json/JSONModel"],function(e,t,i,n,r){function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=o(e);const a=t["URLHelper"];const l=s.extend("nrarora.cv.controller.App",{onInit:function e(){this.setExpValue()},handleEmailPress:function e(t){a.triggerEmail(this._getVal(t),"Info Request")},handleTelPress:function e(t){a.triggerTel(this._getVal(t))},handleUrlPress:function e(t){a.redirect(this._getVal(t),true)},onAvatarClicked:function e(){a.redirect("https://www.linkedin.com/in/nishant-arora-75a4653b",true)},onPreview:function e(){this._pdfViewer=this._pdfViewer??new i;this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));this._pdfViewer.setTitle(this.getI18nValue("title"));this._pdfViewer.open()},onDownload:function e(){this._pdfViewer=this._pdfViewer??new i;this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));this._pdfViewer.downloadPDF()},onGenericTagPress:async function e(t){const i=this.getView().getModel("CardModel");const r=t.getSource(),o=this.getView();if(!this._pQuickView){this._pQuickView=await n.load({id:o.getId(),name:"nrarora.cv.view.Quickview",controller:this});o.addDependent(this._pQuickView)}this._pQuickView.setModel(i);this._pQuickView.openBy(r)},onGenericTagPressDialog:async function e(t){},handleCloseButton:function e(){this.byId("PdfPopover").close()},setExpValue:function e(){const t=new Date(2012,5,20);const i=new Date;const n=i.getFullYear()-t.getFullYear();const o=parseFloat(Math.abs((t.getMonth()-i.getMonth())/12).toFixed(1));const s=new r({approx:`${n+o}`,exact:`${n}+`});this.getView().setModel(s,"exp")}});return l});