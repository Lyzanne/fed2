FED2.RankingView = Backbone.View.extend({

	el: $("#page"),

	template: $("#ranking").html(),

	collection: new FED2.RankingCollection/*(FED2.rankingData)*/,


	initialize: function () {

		this.first = true;

		var self = this;

		// this.model.bind('change', this.render, this);
		this.collection.bind('change', this.render, this);
	    this.collection.on("reset", this.render, this);


	},


	render: function () {

		var self = this;

		/* template */
		var tmpl = _.template(this.template);
		$(this.el).html(tmpl);

		/* render teams */
		_.each(this.collection.models, function (item) {
			self.renderTeam(item);
		}, this);

	},

	renderTeam: function (item) {

		var teamView = new FED2.TeamView({
			model: item
		});

	    this.list = this.$el.find("#ranking_content");
    	this.list.append(teamView.render().el);

	}

});



var rankingView = new FED2.RankingView();