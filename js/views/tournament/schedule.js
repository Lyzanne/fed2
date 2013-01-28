FED2.ScheduleView = Backbone.View.extend({

	el: $("#page"),
	template: $("#schedule").html(),

	initialize: function () {

	},

	render: function () {

		var tmpl = _.template(this.template);
		$(this.el).html(tmpl);

	}
	
});

var scheduleView = new FED2.ScheduleView();