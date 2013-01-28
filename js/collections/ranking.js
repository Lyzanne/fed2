FED2.RankingCollection = Backbone.Collection.extend({

	// localStorage: new Backbone.LocalStorage("rankingStorage"),

	model: FED2.TeamModel,

	url: FED2.config.api + 'pools/' + FED2.config.poolID + '/?callback=?',

	parse: function(data) {

	    console.log("data to parse: ", data);
	    console.log("standings: ", data.standings);
	    
	    return data.standings;
	},

	comparator: function (data){

		var value = data.get('saldo');

		console.log(value);

		return -value;

		// if (this.sortValue == 'team') {
		// 	value = (data.get(this.sortValue)).toLowerCase();
		// } else {
		// 	value = parseInt(data.get(this.sortValue));
		// }

		// if (this.sortOrder != 'desc') {
		// 	return value;
		// } else {

		// 	if (this.sortValue == 'team') {

		// 	    return String.fromCharCode.apply(String,
		// 	        _.map(value.split(""), function (c) {
		// 	            return 0xffff - c.charCodeAt();
		// 	        })
		// 	    );

		// 	} else {
		// 		return -value;
		// 	}

		// }

	}

});

