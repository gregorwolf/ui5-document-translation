import Controller from "sap/ui/core/mvc/Controller";
import Event from "sap/ui/base/Event";
import FileUploader from "sap/ui/unified/FileUploader";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace demo.documenttranslation.controller
 */
export default class Translate extends Controller {

    public onInit(): void {

    }

    public handleUploadComplete(oEvent: Event) {
        var oRawResponse = oEvent.getParameter("responseRaw");
        MessageToast.show("File upload completed");
    }

    public handleUploadPress() {
        var oFileUploader = this.byId("fileUploader") as FileUploader;
        oFileUploader.checkFileReadable().then(function() {
            oFileUploader.upload();
        }, function(error) {
            MessageToast.show("The file cannot be read. It may have changed.");
        }).then(function() {
            oFileUploader.clear();
        });
    }
}