    // define individual tournament view
FED2.SetView = Backbone.View.extend({
    tagName: "tr",
    template: $("#setTemplate").html(),
    className: "ding",
    
       // Attach event handler to view elements
    events: {
        "click a.delete": "deleteSet"
    },
    
    
    // Delete een set, de model wordt verwijderd
    deleteSet: function (e) {
        e.preventDefault();
                
        this.model.destroy();
        this.remove();
    },
    
    // Render view
    render: function () {
        var tmpl = _.template(this.template);;
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});
