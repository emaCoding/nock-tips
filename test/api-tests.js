var http = require('http');
var helper = require('./helper');
var expect = require('chai').expect;

describe('API Player', function() {

    it ('should return a player personal data', function (done) {
		
		helper.getPlayerInformation();

		var options = {
		  hostname: 'localhost',
		  port: 3000,
		  path: '/player?player=Weah',
		  method: 'GET'
		};

		var req = http.request(options, function(resp) {
			resp.on('data', function(chunk) {
				var name = JSON.parse(chunk).name
				console.log(name);
				expect(name).to.equal('George');
			    done();
			});
		})

		req.on("error", function(e) {
		    console.log("Got error: " + e.message);
		    done();
		});

		req.end();
    });

});

