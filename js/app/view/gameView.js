// # Define league view #
FED2.GameView = Backbone.View.extend({
	// Define element (this.el)     
	el: $("#game"),
	
	// Initialize view *(backbone method)*
    initialize: function () {
		this.list = this.$el.find("#superset");
        
		// Specify collection for this view
		this.collection = new FED2.Game(FED2.gameData);

		// event handler
        this.collection.on("reset", this.render, this);
		this.collection.on("add", this.renderSet, this);

	    this.on("change:sortValue", this.sortByValue, this);
	    this.lastSortValue = this.collection.sortValue;
	    this.sortOrder = this.collection.sortOrder;

		// Render view
        this.render();
		
    },

	// Attach event handlers to view elements
	events: {
    	"click th": "setSort",
		"click #add": "addSet"
	},

	// Render view
    render: function () {
        var self = this;

        this.$el.find(".ding ").remove();

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

		// Append the rendered HTML to the views element
        // this.$el.append(setView.render().el);
        this.list.append(setView.render().el);
    },



	// sorteren
	  setSort: function (e) {
	    this.sortValue = $(e.currentTarget).attr('id');

	    console.log($(e.currentTarget).attr('id'));

	    // begin altijd met 'desc' (z-a)
	    if (this.sortValue != this.lastSortValue)
	      this.sortOrder = 'desc';

	    // verwijder .current  (asc - a-z, desc - z-a Omgekeerd dus.)
	    this.$el.find('.current').removeClass('current asc desc');
	    
	    // voeg 'current' class toe
	    $(e.currentTarget).addClass('current ' + this.sortOrder);

	    if ($(e.currentTarget).hasClass('sort')) {

	    	this.trigger("change:sortValue");
	    	console.log('sort');

	    }


	  },
	  
	  sortByValue: function () {

	    this.collection.sortOrder = this.sortOrder;
	    this.collection.sortValue = this.sortValue;

	    this.collection.reset(FED2.gameData);

	    // zet nieuwe lastSortValue en wijzig sortOrder
	    this.lastSortValue = this.sortValue;
	    (this.sortOrder == 'asc') ? this.sortOrder = 'desc' : this.sortOrder = 'asc';
	  },



//Toevoegen van een nieuwe set
	addSet: function (e) {
	    e.preventDefault();
	    var newModel = {};
	    $("#addSet").children("input").each(function (i, el) {

	        if ($(el).val() !== "") {
	            newModel[el.id] = $(el).val();
	      	} 

	    });
	    FED2.gameData.push(newModel);
	    
	    this.collection.add(new FED2.Set(newModel));	    
	    this.collection.reset(FED2.gameData);
	},

	// Log message *(custom method)*
	logMessage: function (message) {
		console.log(message);
	}
	
	});
// Kickstart the application by creating an instance of LeagueView
var game = new FED2.GameView();