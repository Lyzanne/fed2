FED2.Pool = Backbone.Collection.extend({

	model: FED2.Team,
	
	initialize: function (){
		this.sortValue = 'team';
		this.sortOrder = 'asc';
	},

	comparator: function (data){

		if (this.sortValue == 'team') {
			value = (data.get(this.sortValue)).toLowerCase();
		} else {
			value = parseInt(data.get(this.sortValue));
		}

		if (this.sortOrder != 'desc') {
			return value;
		} else {

			if (this.sortValue == 'team') {

			    return String.fromCharCode.apply(String,
			        _.map(value.split(""), function (c) {
			            return 0xffff - c.charCodeAt();
			        })
			    );

			} else {
				return -value;
			}

		}

	}

	// comparator: function (a, b){

	//     var var_a = a.get(this.sortValue);
	//     var var_b = b.get(this.sortValue);

	// 	if (this.sortOrder != 'desc') {
	// 		return var_a - var_b;
	// 	} else {
	// 		return var_b - var_a;
	// 	}

	// }

});