sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    "../utils/formatter",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, JSONModel) {
        "use strict";
        return Controller.extend("project1.controller.View2", { 
            formatter : formatter,       
            onInit: function () {
                this.getView().setModel(new JSONModel("../model/cities.json"), "city");
            },

            onPressButtonBack: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },

            onNavigateToDocu: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDocu");
            }
        });
    });