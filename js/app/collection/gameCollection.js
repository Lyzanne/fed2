
// # Define league collection #
FED2.Game = Backbone.Collection.extend({
	// Specifiy model for this collection
	model: FED2.Set,

	// Initialize collection *(backbone method)*
	initialize: function () {
		this.sortValue = 'set';
		this.sortOrder = 'asc';

	},


// vergelijkt alle waarde, als de ene voor de andere komt, dan is een het 1 of een -1, zo wordt er een volgorde gecreeerd.
	comparator: function (data){

		value = parseInt(data.get(this.sortValue));

		if (this.sortOrder != 'desc') {
			return value;
		} else {
			return -value;
		}

	}


});