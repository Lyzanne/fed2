// # Define league view #
FED2.GameView = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#game"),
	
	// Initialize view *(backbone method)*
    initialize: function () {
		this.logMessage("Game view initialized");
        
		// Specify collection for this view
		this.collection = new FED2.Game(FED2.gameData);
		
		// Render view
        this.render();
		
    },
	
	// Render view *(backbone method)*
    render: function () {
        var self = this;

        _.each(this.collection.models, function (item) {
            self.renderSet(item);
        }, this);
    },
	
	// Render tournament *(custom method)*
    renderSet: function (item) {
		// Create new instance of TournamentView
		var setView = new FED2.SetView({
            model: item
        });


		console.log("Rendertje", setView.render().el);

		// Append the rendered HTML to the views element
        this.$el.append(setView.render().el);
    },

	// Log message *(custom method)*
	logMessage: function (message) {
		console.log(message);
	}
	
});

// Kickstart the application by creating an instance of LeagueView
var game = new FED2.GameView();