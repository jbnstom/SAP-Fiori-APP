//Ejercicio 9
sap.ui.define([

], function () {
    "use-strict";

    var Formatter = {
        formatPopulation: function (fPopulation) {
            if (!fPopulation) return;
            return fPopulation * 1000000;
        }
    }
    return Formatter;

}, true);