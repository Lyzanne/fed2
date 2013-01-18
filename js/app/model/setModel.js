// # Define tournament model #
	FED2.Set = Backbone.Model.extend({

		defaults: {
			'team1' : '?',
			'team2' : '?',
			'team1Score' : '?',
			'team2Score' : '?',
			'set' : '?'
		},

		// Initialize model *(backbone method)*
		initialize: function () {

		}
});
