// # Define tournament model #
	FED2.Set = Backbone.Model.extend({
		// Set model defaults *(backbone method)*
		defaults: {
			"name": "Set name unknown",
			"schedulingFormat":"unknown"
		},
		
		// Initialize model *(backbone method)*
		initialize: function () {
			this.logMessage("Set model initialized");
		},
		
		// Log message *(custom method)*
		logMessage: function (message) {
			console.log(message);
		}
	});
