FED2.PoolView = Backbone.View.extend({

	el: $("#wrapper"),

  initialize: function () {
    this.list = this.$el.find("#pool");

    this.collection = new FED2.Pool(FED2.poolData);
    this.render();

    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.renderPool, this);
    this.collection.on("remove", this.removeTeam, this);

    this.on("change:sortValue", this.sortByValue, this);

    this.lastSortValue = this.collection.sortValue;
    this.sortOrder = this.collection.sortOrder;
  },

  events: {
    "click th": "setSort",
    "click #add": "addTeam"
  },

  setSort: function (e) {
    this.sortValue = $(e.currentTarget).attr('id');

    // begin altijd met 'desc'
    if (this.sortValue != this.lastSortValue)
      this.sortOrder = 'desc';

    // verwijder .current
    this.$el.find('.current').removeClass('current asc desc');
    
    // voeg 'current' class toe
    $(e.currentTarget).addClass('current ' + this.sortOrder);

    this.trigger("change:sortValue");
  },
  
  sortByValue: function () {

    this.collection.sortOrder = this.sortOrder;
    this.collection.sortValue = this.sortValue;

    this.collection.reset(FED2.poolData);

    // zet nieuwe lastSortValue en wijzig sortOrder
    this.lastSortValue = this.sortValue;
    (this.sortOrder == 'asc') ? this.sortOrder = 'desc' : this.sortOrder = 'asc';
  },

  addTeam: function (e) {
    e.preventDefault();
    var newModel = {};
    $("#addTeam").children("input").each(function (i, el) {
      if ($(el).val() !== "") {
        newModel[el.id] = $(el).val();
      }
    });
    FED2.poolData.push(newModel);

    console.log(newModel);

    this.collection.add(new FED2.Pool(newModel));
    this.collection.reset(FED2.poolData);
  },

  removeTeam: function (removedModel) {

    var removed = removedModel.attributes;

    _.each(FED2.poolData, function (item) {
      if (_.isEqual(item.team, removed.team)) {
        FED2.poolData.splice(_.indexOf(FED2.poolData, item), 1);
      }
    });

  },

  render: function () {
    var self = this;

    // verwijder 'oude' data
    this.$el.find(".data").remove();

    _.each(this.collection.models, function (item) {
      self.renderPool(item);
    }, this);
  },

  renderPool: function (item) {
    var teamView = new FED2.TeamView({
      model: item
    });

    this.list.append(teamView.render().el);
  }
});

var pool = new FED2.PoolView();