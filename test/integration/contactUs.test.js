"use strict";
var assert = require('assert');
var request = require("request");
var helper = require("../helper.js");
var contactUs = helper.requireModule('./index');

describe("contact us", function() {
	
	before(function(done) {		
		setTimeout(function() {			
			done();
		}, 500);		
	});
	
	beforeEach(function(done) {
		console.log(' ------------------------------------------------- ');
		done();
	});

	it('fail - no params', function(done) {
		var testPostOptions = {
			url: 'http://127.0.0.1:4000/contactUs/sendMessage',
			method : "POST",
			json: true,
			body: {}
		};

		function callback(error, response, body) {
			assert.ifError(error);
			assert.ok(body);
			assert.equal(body.result, false);
			assert.ok(body.errors);
			assert.equal(body.errors.codes[0], '172');
			//assert.deepEqual(body.errors.details[0], {"code": 172, "message": "Missing required field: firstName, lastName"});
			done();
		}
		request(testPostOptions, callback);
	});

	it('success', function(done) {
		var params={
			uri: 'http://localhost:4000/contactUs/sendMessage',
			body:{
				"email":"nassif.eliane@gmail.com",
				"name":"John Smith",
				"purpose":"Support",
				"message": "Hi"
			}
		};
		helper.requester('post', params, function(err, body, req){
			assert.ifError(err);
			assert.ok(body);
			assert.equal(body.result, true);
			assert.ok(body.data);				
			assert.equal(body.data, true);
			done();
		});
	});

});
