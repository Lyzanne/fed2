FED2.TournamentCollection = Backbone.Collection.extend({

	model: new FED2.TournamentModel,

	url: FED2.config.api_url,

	parse: function(data) {
	    // what do we get from the API?    
	    // we could log data, right? Let's!
	    console.log("data to parse: ", data);
	    console.log("data to parse (objects): ", data.objects);
	    
	    // return data.objects;

	    // tournamentModel = new FED2.TournamentModel(data);
	}

});
