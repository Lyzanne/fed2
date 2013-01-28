FED2.HomeView = Backbone.View.extend({

	el: $("#page"),
	template: $("#home").html(),

	initialize: function () {

	},

	render: function () {

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl);

	}

});

var homeView = new FED2.HomeView();