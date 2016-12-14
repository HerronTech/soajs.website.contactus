"use strict";
var helper = require("../helper");
var mainService, controller;

describe("importing sample data", function () {
	
	it('starting needed services' ,function (done) {
		// start controller
		controller = require("soajs.controller");
		
		setTimeout(function () {
			// start current service
			mainService = helper.requireModule('./index');
			
			// wait for all services to start & register before starting tests
			setTimeout(function () {
				require("./contactUs.test.js");
				done();
			}, 5000);
		}, 1000);
	});
});