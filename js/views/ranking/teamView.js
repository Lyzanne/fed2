FED2.TeamView = Backbone.View.extend({

	tagName: "tr",

	// geef de tr's class 'data' mee, makkelijk verwijderen bij nieuwe render
	className: "data",
	
	template: $("#teamTemplate").html(),

	initialize: function () {
	},

	events: {
		"mouseenter .left": "deleteEnter",
		"mouseleave .left": "deleteLeave",
		"click .remove": "deleteTeam"
	},

	deleteEnter: function (e) {
		$('.remove').remove();
		$(e.currentTarget).append('<div class="remove">x</div>');
	},

	deleteLeave: function (e) {
		$('.remove').remove();
	},

	deleteTeam: function (e) {
		e.preventDefault();

		// var removed = this.attributes;
		// _.each(FED2.poolData, function (item) {
		//     if (_.isEqual(item, removed)) {
		//         FED2.poolData.splice(_.indexOf(FED2.poolData, item), 1);
		//     }
		// });


		// FED2.poolData.(this.model);
		// FED2.poolData.splice(_.indexOf(FED2.poolData, this.model), 1);

		// collection.remove(model);

		this.model.destroy();
		this.remove();
	},
	
	render: function () {

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl(this.model.toJSON()));

		return this;
	}
});