FED2.AppRouter = Backbone.Router.extend({

	// Define routes to pages (hash urls #/page_name)
	routes: {
		// Define some URL routes
		'tournament':   'showTournament',
		'ranking'	: 	'showRanking',
		'schedule'	:   'showSchedule',
		'game'		:   'showGame',

		// Default
		'*path': 'defaultAction'
	},

	showTournament: function (actions) {
		// var tournamentModel = new FED2.TournamentModel();
		// this.tournamentView = new FED2.TournamentView({model: tournamentModel});
		tournamentView.render();
	},

	showSchedule: function (actions) {
		scheduleView.render();
	},

	showRanking: function (actions) {
		rankingView.render();
	},

	showGame: function (actions) {
		gameView.render();
	},

	defaultAction: function (actions) {
		homeView.render();
	},

	initialize: function () {

	}

});



var router = new FED2.AppRouter();
Backbone.history.start();
