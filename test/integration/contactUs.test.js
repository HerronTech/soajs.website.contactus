"use strict";
var assert = require('assert');
var request = require("request");
var helper = require("../helper.js");

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
			uri: 'http://127.0.0.1:4000/contactUs/sendMessage',
			body: {}
		};

		helper.requester('post', testPostOptions, function(error, body) {
			assert.ifError(error);
			assert.ok(body);
			assert.equal(body.result, false);
			assert.ok(body.errors);
			assert.equal(body.errors.codes[0], '172');
			//assert.deepEqual(body.errors.details[0], {"code": 172, "message": "Missing required field: firstName, lastName"});
			done();
		});
		
	});

	it('success', function(done) {
		var params={
			uri: 'http://localhost:4000/contactUs/sendMessage',
			body:{
				"email":"michel@soajs.org",
				"name":"John Smith",
				"purpose":"Support",
				"message": "Hi"
			}
		};
		helper.requester('post', params, function(err, body){
			assert.ifError(err);
			assert.ok(body);
			assert.equal(body.result, true);
			assert.ok(body.data);				
			assert.equal(body.data, true);
			done();
		});
	});

});
