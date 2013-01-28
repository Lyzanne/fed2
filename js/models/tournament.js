FED2.TournamentModel = Backbone.Model.extend({

	defaults: {
		name: 'Default - Leaguevine Tournament',
		scheduling_format: 'Bracket',
		info: '...',
		season: {
			id: 1
		}
	},

	url: FED2.config.api + 'tournaments/' + FED2.config.tournamentID + '/?callback=?',
	
	initialize: function () {

  		this.fetch();
	
	}

});