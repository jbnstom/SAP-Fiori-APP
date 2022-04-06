sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "../utils/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            formatter : formatter,

            onInit: function () {
                // Ejercicio 8
                this.getView().setModel(new JSONModel("../model/cities.json"), "city");

                //Ejercicio 2
                var oData = {
                    recipient : {
                        name : "Hello Everybody"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onPressButton: function(){
                //alert("Welcome to the course");
                //MessageToast.show("Welcome to the course");

                //Ejercicio 3
                let oMsg = this.getView().getModel().getProperty("/recipient/name");
                MessageToast.show(oMsg);
            },

            onOpenDialog : function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "project1.view.HelloDialog"
                    });
                }
    
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },

            onCloseDialog: function(){
                this.byId("helloDialog").close();
            },

            onFilterCities: function(oEvent){
                let aFilter = [];
                let sParam = oEvent.getParameter("query");
                if (sParam) {
                    aFilter.push(new Filter("name", FilterOperator.Contains, sParam));
                }
    
                let oList = this.byId("citiesList");
                let oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },

            onPressButtonTabla: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            },

            onPressColumn: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1Column");
            },

            onPressButtonBack: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteViewIndex");
            },

            onNavigateToDocu: function(){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDocu");
            }
        
        });
    });
