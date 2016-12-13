'use strict';

module.exports = {
	
	serviceName: "contactUs",
	servicePort: 4400,
	"errors": {
		"100": "Failed to send email"
	},
	"mail": {
		"to": "mike@soajs.org",
		"subject": "Message from SOAJS Website Contact Us Section",
		headers: {
			type: 'object',
			required: false,
			additionalProperties: {
				'type': 'string'
			}
		},
		"transport": {
			"type": "sendmail",
			"options": {}
		}
	},
	"schema": {
		"post": {
			"/sendMessage": {
				"_apiInfo": {
					"l": "Send message"
				},
				"name": {
					"source": ['body.name'],
					"required": true,
					"validation": {
						"type": "string"
					}
				},
				"purpose": {
					"source": ['body.purpose'],
					"required": true,
					"validation": {
						"type": "string"
					}
				},
				"email": {
					"source": ['body.email'],
					"required": true,
					"validation": {
						"type": "string",
						format: "email"
					}
				},
				"message": {
					"source": ['body.message'],
					"required": true,
					"validation": {
						"type": "string"
					}
				}
			}
		}
	}
};