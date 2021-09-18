sap.ui.define(["nrarora/cv/controller/BaseController.controller", "sap/m/library", "sap/m/PDFViewer", "sap/ui/core/Fragment", "sap/ui/model/json/JSONModel"], function (__BaseController, sap_m_library, PDFViewer, Fragment, JSONModel) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  /* eslint-disable @typescript-eslint/no-unsafe-assignment */

  /* eslint-disable @typescript-eslint/no-misused-promises */

  /* eslint-disable @typescript-eslint/no-unsafe-return */

  /* eslint-disable @typescript-eslint/no-unsafe-call */

  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  const BaseController = _interopRequireDefault(__BaseController);

  const URLHelper = sap_m_library["URLHelper"];

  /**
   * @namespace nrarora.cv.controller
   */
  const App = BaseController.extend("nrarora.cv.controller.App", {
    onInit: function _onInit() {
      this.setExpValue();
    },
    handleEmailPress: function _handleEmailPress(evt) {
      URLHelper.triggerEmail(this._getVal(evt), "Info Request");
    },
    handleTelPress: function _handleTelPress(evt) {
      URLHelper.triggerTel(this._getVal(evt));
    },
    handleUrlPress: function _handleUrlPress(evt) {
      URLHelper.redirect(this._getVal(evt), true);
    },
    onAvatarClicked: function _onAvatarClicked() {
      URLHelper.redirect("https://www.linkedin.com/in/nishant-arora-75a4653b", true);
    },
    onPreview: function _onPreview() {
      // public async onPreview(oEvent: Event): Promise<void> {
      // const oButton = oEvent.getSource(),
      //     oView = this.getView();
      // if (!this._popView) {
      //     this._popView = await Fragment.load({
      //         id: oView.getId(),
      //         name: "nrarora.cv.view.PdfPopover",
      //         controller: this
      //     });
      //     oView.addDependent(this._popView);
      // }
      // // this._popView.setModel(oModel);
      // // this.byId("PdfPopover").setModel(oModel);
      // this._popView.openBy(oButton);
      // **********************************************************************************************
      this._pdfViewer = this._pdfViewer ?? new PDFViewer();

      this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));

      this._pdfViewer.setTitle(this.getI18nValue("title"));

      this._pdfViewer.open();
    },
    onDownload: function _onDownload() {
      this._pdfViewer = this._pdfViewer ?? new PDFViewer();

      this._pdfViewer.setSource(sap.ui.require.toUrl("nrarora/cv/images/Nishant Arora 2021.pdf"));

      this._pdfViewer.downloadPDF();
    },
    onGenericTagPress: async function _onGenericTagPress(oEvent) {
      const oModel = this.getView().getModel("CardModel");
      const oButton = oEvent.getSource(),
            oView = this.getView();

      if (!this._pQuickView) {
        this._pQuickView = await Fragment.load({
          id: oView.getId(),
          name: "nrarora.cv.view.Quickview",
          controller: this
        });
        oView.addDependent(this._pQuickView);
      }

      this._pQuickView.setModel(oModel);

      this._pQuickView.openBy(oButton);
    },
    onGenericTagPressDialog: async function _onGenericTagPressDialog(oEvent) {},
    handleCloseButton: function _handleCloseButton() {
      this.byId("PdfPopover").close();
    },
    setExpValue: function _setExpValue() {
      const start = new Date(2012, 5, 20);
      const today = new Date();
      const years = today.getFullYear() - start.getFullYear();
      const month = parseFloat(Math.abs((start.getMonth() - today.getMonth()) / 12).toFixed(1));
      const expModel = new JSONModel({
        approx: `${years + month}`,
        exact: `${years}+`
      });
      this.getView().setModel(expModel, "exp");
    }
  });
  return App;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL0hvbWUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJCYXNlQ29udHJvbGxlciIsIlVSTEhlbHBlciIsIkFwcCIsIm9uSW5pdCIsInNldEV4cFZhbHVlIiwiaGFuZGxlRW1haWxQcmVzcyIsImV2dCIsInRyaWdnZXJFbWFpbCIsIl9nZXRWYWwiLCJoYW5kbGVUZWxQcmVzcyIsInRyaWdnZXJUZWwiLCJoYW5kbGVVcmxQcmVzcyIsInJlZGlyZWN0Iiwib25BdmF0YXJDbGlja2VkIiwib25QcmV2aWV3IiwiX3BkZlZpZXdlciIsIlBERlZpZXdlciIsInNldFNvdXJjZSIsInNhcCIsInVpIiwicmVxdWlyZSIsInRvVXJsIiwic2V0VGl0bGUiLCJnZXRJMThuVmFsdWUiLCJvcGVuIiwib25Eb3dubG9hZCIsImRvd25sb2FkUERGIiwib25HZW5lcmljVGFnUHJlc3MiLCJvRXZlbnQiLCJvTW9kZWwiLCJnZXRWaWV3IiwiZ2V0TW9kZWwiLCJvQnV0dG9uIiwiZ2V0U291cmNlIiwib1ZpZXciLCJfcFF1aWNrVmlldyIsIkZyYWdtZW50IiwibG9hZCIsImlkIiwiZ2V0SWQiLCJuYW1lIiwiY29udHJvbGxlciIsImFkZERlcGVuZGVudCIsInNldE1vZGVsIiwib3BlbkJ5Iiwib25HZW5lcmljVGFnUHJlc3NEaWFsb2ciLCJoYW5kbGVDbG9zZUJ1dHRvbiIsImJ5SWQiLCJjbG9zZSIsInN0YXJ0IiwiRGF0ZSIsInRvZGF5IiwieWVhcnMiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJhYnMiLCJnZXRNb250aCIsInRvRml4ZWQiLCJleHBNb2RlbCIsIkpTT05Nb2RlbCIsImFwcHJveCIsImV4YWN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO1FBQ09BLGM7O1FBQ0VDLFM7O0FBT1Q7QUFDQTtBQUNBO1FBQ3FCQyxHLEdBQVlGLGM7QUFJdEJHLElBQUFBLE0s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QUFDSSxXQUFOLEVBQXBDO0FBQ0EsWUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNSLEtBQUssQ0FBQ1MsUUFBTixLQUFtQlAsS0FBSyxDQUFDTyxRQUFOLEVBQXBCLElBQXdDLEVBQWpELEVBQXFEQyxPQUFyRCxDQUE2RCxDQUE3RCxDQUFELENBQXhCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLElBQUlDLFNBQUosQ0FBYztBQUMzQkMsUUFBQUEsTUFBTSxFQUFHLEdBQUVWLEtBQUssR0FBR0UsS0FBTSxFQURFO0FBRTNCUyxRQUFBQSxLQUFLLEVBQUcsR0FBRVgsS0FBTTtBQUZXLE9BQWQsQ0FBakI7QUFJQSxXQUFLdEIsT0FBTCxHQUFlYSxRQUFmLENBQXdCaUIsUUFBeEIsRUFBa0MsS0FBbEM7QUFDSDs7U0FqRmdCMUQsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW1pc3VzZWQtcHJvbWlzZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2VzcyAqL1xuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCJucmFyb3JhL2N2L2NvbnRyb2xsZXIvQmFzZUNvbnRyb2xsZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgVVJMSGVscGVyIH0gZnJvbSBcInNhcC9tL2xpYnJhcnlcIjtcbmltcG9ydCBQREZWaWV3ZXIgZnJvbSBcInNhcC9tL1BERlZpZXdlclwiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCJzYXAvdWkvYmFzZS9FdmVudFwiO1xuaW1wb3J0IFVJNUVsZW1lbnQgZnJvbSBcInNhcC91aS9jb3JlL0VsZW1lbnRcIjtcbmltcG9ydCBGcmFnbWVudCBmcm9tIFwic2FwL3VpL2NvcmUvRnJhZ21lbnRcIjtcbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuXG4vKipcbiAqIEBuYW1lc3BhY2UgbnJhcm9yYS5jdi5jb250cm9sbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIF9wUXVpY2tWaWV3OiBVSTVFbGVtZW50O1xuICAgIC8vIHByaXZhdGUgX3BvcFZpZXc6IFVJNUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfcGRmVmlld2VyOiBQREZWaWV3ZXI7XG4gICAgcHVibGljIG9uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRFeHBWYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVFbWFpbFByZXNzKGV2dDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgVVJMSGVscGVyLnRyaWdnZXJFbWFpbCh0aGlzLl9nZXRWYWwoZXZ0KSwgXCJJbmZvIFJlcXVlc3RcIik7XG4gICAgfVxuICAgIHB1YmxpYyBoYW5kbGVUZWxQcmVzcyhldnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIFVSTEhlbHBlci50cmlnZ2VyVGVsKHRoaXMuX2dldFZhbChldnQpKTtcbiAgICB9XG4gICAgcHVibGljIGhhbmRsZVVybFByZXNzKGV2dDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgVVJMSGVscGVyLnJlZGlyZWN0KHRoaXMuX2dldFZhbChldnQpLCB0cnVlKTtcbiAgICB9XG4gICAgcHVibGljIG9uQXZhdGFyQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgVVJMSGVscGVyLnJlZGlyZWN0KFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25pc2hhbnQtYXJvcmEtNzVhNDY1M2JcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIHB1YmxpYyBvbkRvd25sb2FkKCk6IHZvaWQge1xuICAgIC8vICAgICBjb25zdCBvUm91dGVyID0gVUlDb21wb25lbnQuZ2V0Um91dGVyRm9yKHRoaXMpO1xuICAgIC8vICAgICBvUm91dGVyLm5hdlRvKFwicGRmXCIsIHt9KTtcbiAgICAvLyB9XG4gICAgcHVibGljIG9uUHJldmlldygpOiB2b2lkIHtcbiAgICAgICAgLy8gcHVibGljIGFzeW5jIG9uUHJldmlldyhvRXZlbnQ6IEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIGNvbnN0IG9CdXR0b24gPSBvRXZlbnQuZ2V0U291cmNlKCksXG4gICAgICAgIC8vICAgICBvVmlldyA9IHRoaXMuZ2V0VmlldygpO1xuICAgICAgICAvLyBpZiAoIXRoaXMuX3BvcFZpZXcpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuX3BvcFZpZXcgPSBhd2FpdCBGcmFnbWVudC5sb2FkKHtcbiAgICAgICAgLy8gICAgICAgICBpZDogb1ZpZXcuZ2V0SWQoKSxcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiBcIm5yYXJvcmEuY3Yudmlldy5QZGZQb3BvdmVyXCIsXG4gICAgICAgIC8vICAgICAgICAgY29udHJvbGxlcjogdGhpc1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICBvVmlldy5hZGREZXBlbmRlbnQodGhpcy5fcG9wVmlldyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy8gdGhpcy5fcG9wVmlldy5zZXRNb2RlbChvTW9kZWwpO1xuICAgICAgICAvLyAvLyB0aGlzLmJ5SWQoXCJQZGZQb3BvdmVyXCIpLnNldE1vZGVsKG9Nb2RlbCk7XG4gICAgICAgIC8vIHRoaXMuX3BvcFZpZXcub3BlbkJ5KG9CdXR0b24pO1xuICAgICAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIHRoaXMuX3BkZlZpZXdlciA9IHRoaXMuX3BkZlZpZXdlciA/PyBuZXcgUERGVmlld2VyKCk7XG4gICAgICAgIHRoaXMuX3BkZlZpZXdlci5zZXRTb3VyY2Uoc2FwLnVpLnJlcXVpcmUudG9VcmwoXCJucmFyb3JhL2N2L2ltYWdlcy9OaXNoYW50IEFyb3JhIDIwMjEucGRmXCIpKTtcbiAgICAgICAgdGhpcy5fcGRmVmlld2VyLnNldFRpdGxlKHRoaXMuZ2V0STE4blZhbHVlKFwidGl0bGVcIikpO1xuICAgICAgICB0aGlzLl9wZGZWaWV3ZXIub3BlbigpO1xuICAgIH1cbiAgICBwdWJsaWMgb25Eb3dubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGRmVmlld2VyID0gdGhpcy5fcGRmVmlld2VyID8/IG5ldyBQREZWaWV3ZXIoKTtcbiAgICAgICAgdGhpcy5fcGRmVmlld2VyLnNldFNvdXJjZShzYXAudWkucmVxdWlyZS50b1VybChcIm5yYXJvcmEvY3YvaW1hZ2VzL05pc2hhbnQgQXJvcmEgMjAyMS5wZGZcIikpO1xuICAgICAgICB0aGlzLl9wZGZWaWV3ZXIuZG93bmxvYWRQREYoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb25HZW5lcmljVGFnUHJlc3Mob0V2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBvTW9kZWwgPSB0aGlzLmdldFZpZXcoKS5nZXRNb2RlbChcIkNhcmRNb2RlbFwiKTtcbiAgICAgICAgY29uc3Qgb0J1dHRvbiA9IG9FdmVudC5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIG9WaWV3ID0gdGhpcy5nZXRWaWV3KCk7XG4gICAgICAgIGlmICghdGhpcy5fcFF1aWNrVmlldykge1xuICAgICAgICAgICAgdGhpcy5fcFF1aWNrVmlldyA9IChhd2FpdCBGcmFnbWVudC5sb2FkKHtcbiAgICAgICAgICAgICAgICBpZDogb1ZpZXcuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm5yYXJvcmEuY3Yudmlldy5RdWlja3ZpZXdcIixcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiB0aGlzXG4gICAgICAgICAgICB9KSkgYXMgVUk1RWxlbWVudDtcbiAgICAgICAgICAgIG9WaWV3LmFkZERlcGVuZGVudCh0aGlzLl9wUXVpY2tWaWV3KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wUXVpY2tWaWV3LnNldE1vZGVsKG9Nb2RlbCk7XG4gICAgICAgIHRoaXMuX3BRdWlja1ZpZXcub3BlbkJ5KG9CdXR0b24pO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgb25HZW5lcmljVGFnUHJlc3NEaWFsb2cob0V2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge31cbiAgICBwdWJsaWMgaGFuZGxlQ2xvc2VCdXR0b24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnlJZChcIlBkZlBvcG92ZXJcIikuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEV4cFZhbHVlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKDIwMTIsIDUsIDIwKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFycyA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBzdGFydC5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlRmxvYXQoTWF0aC5hYnMoKHN0YXJ0LmdldE1vbnRoKCkgLSB0b2RheS5nZXRNb250aCgpKSAvIDEyKS50b0ZpeGVkKDEpKTtcbiAgICAgICAgY29uc3QgZXhwTW9kZWwgPSBuZXcgSlNPTk1vZGVsKHtcbiAgICAgICAgICAgIGFwcHJveDogYCR7eWVhcnMgKyBtb250aH1gLFxuICAgICAgICAgICAgZXhhY3Q6IGAke3llYXJzfStgXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdldFZpZXcoKS5zZXRNb2RlbChleHBNb2RlbCwgXCJleHBcIik7XG4gICAgfVxufVxuIl19