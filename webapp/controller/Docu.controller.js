sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("project1.controller.Docu", {        
            onInit: function () {

            },

            onPressButtonBack: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteViewIndex");
            }
        });
    });