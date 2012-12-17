
	// # Define league collection #
	FED2.Game = Backbone.Collection.extend({
	    // Specifiy model for this collection
		model: FED2.Set,
		
		// Initialize collection *(backbone method)*
		initialize: function () {
			this.logMessage("Game collection initialized");
		},
		
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
	});
	