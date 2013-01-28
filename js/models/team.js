FED2.TeamModel = Backbone.Model.extend({

	defaults: {

		team: {
			name: 'Team (default)'
		},

		losses: '0'
	},


	initialize: function () {

		var won = this.get("points_scored");
		var lost = this.get("points_allowed");
		
		var saldo = won - lost;
		this.set("saldo", saldo)

	}
	
});
