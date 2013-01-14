FED2.Team = Backbone.Model.extend({

    defaults: {
        "team": "unknown",
		"Win": "0",
		"Lost": "0",
		"Sw": "0",
		"Sl": "0",
		"Pw": "0",
		"Pl": "0"
    },

	initialize: function () {

		var won = this.get("Pw");
		var lost = this.get("Pl");
		
		var saldo = won - lost;
		this.set("saldo", saldo)
	}
});