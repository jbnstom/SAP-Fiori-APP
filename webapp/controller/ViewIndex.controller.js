sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("project1.controller.ViewIndex", {        
            onInit: function () {

            },

            onNavigateToView1: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },

            onNavigateToDocu: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDocu");
            }
        });
    });