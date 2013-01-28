FED2.TournamentView = Backbone.View.extend({

	el: $("#page"),

	template: $("#tournament").html(),

	model: new FED2.TournamentModel,

	initialize: function () {

		this.model.bind('change', this.render, this);

	},

	render: function () {

		console.log('render: tournament');

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl(this.model.toJSON()));

	}
});

var tournamentView = new FED2.TournamentView();