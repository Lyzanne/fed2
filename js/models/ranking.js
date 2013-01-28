FED2.RankingModel = Backbone.Model.extend({

	defaults: {
		name: 'Team (default)',
		standings: {
			losses: '0'
		}
	},

	url: FED2.config.api + 'pools/' + FED2.config.poolID + '/?callback=?',

	initialize: function () {
	
	}
	
});

var rankingModel = new FED2.RankingModel();