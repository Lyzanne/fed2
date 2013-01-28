FED2.GameView = Backbone.View.extend({

	el: $("#page"),
	template: $("#game").html(),

	initialize: function () {

	},

	render: function () {

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl);

	}
});

var gameView = new FED2.GameView();