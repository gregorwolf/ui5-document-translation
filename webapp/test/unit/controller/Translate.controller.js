/*global QUnit*/

sap.ui.define([
	"demo/document-translation/controller/Translate.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Translate Controller");

	QUnit.test("I should test the Translate controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
