var nock = require('nock');
var url = require('url');

//query string info
var _getPlayerInformation = function() {	
	nock('http://localhost:3000').get('/player')
		//.query({player: 'Weah'})
		.query(true)
		.reply(function() {
			//custom logic
			var queryData = url.parse(this.req.path, true).query;
			var resultingContent;
			if (queryData.player == 'Weah') {
				resultingContent = {
					_id: '8910',
					name: 'George',
					lastName: 'Weah',
					level: 'high'
				}
			} else {
				resultingContent = { name: 'Emanuele'};
			}
			return [200, resultingContent];
		});
};

module.exports.getPlayerInformation = _getPlayerInformation;




