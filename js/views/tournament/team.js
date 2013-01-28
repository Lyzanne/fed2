FED2.TeamView = Backbone.View.extend({

	template: $("#team").html(),

	initialize: function () {

	},

	render: function () {

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl(this.model.toJSON()));

		return this;
	}

});