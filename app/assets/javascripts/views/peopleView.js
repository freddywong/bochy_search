var App = App || {};

App.PeopleView = Backbone.View.extend({
  events: {
    "keyup .search_input": "search",
    // "click li": "clicked",
    "click button": "deletePerson",
    "dblclick li": "renderForm",
    "submit form": "updatePerson"
  },

  updatePerson: function(e) {
    event.preventDefault();

    var firstName = $(e.currentTarget).find(".first_name").val();
    var lastName = $(e.currentTarget).find(".last_name").val();

    var id = $(e.currentTarget).parent().data("id");
    var person = this.collection.get(id);

    person.save({
      first_name: firstName,
      last_name: lastName
    });

    $(e.currentTarget).hide();
    this.search();
  },

  renderForm: function(e) {
    var id = $(e.currentTarget).data("id");
    var person = this.collection.get(id);

    $(e.currentTarget).html(JST['form'](
      person.toJSON()
    ));
  },

  deletePerson: function(e) {
    var id = $(e.currentTarget).parent().data("id");
    event.stopPropagation();
    $(e.currentTarget).parent().fadeOut();
    this.collection.get(id).destroy();
  },

  search: function() {
    var searchText = this.$el.find("input").val() || "";
    if (searchText === "") {
      this.renderCollection(this.collection.toJSON());
    } else {
      this.renderCollection(this.collection.filterBySearch(searchText).toJSON());
    }
  },
  render: function() {

    this.$el.html(JST['app']());

    this.renderCollection(this.collection.toJSON());

    return this;
  },

  renderCollection: function(data) {
    this.$el.find("ul").html(
      JST['people'](
        { people: data }
      )
    );
  },

  clicked: function(e){
    var id = $(e.currentTarget).data("id");
    var item = this.collection.get(id);
    var first_name = item.get("first_name")
    var last_name = item.get("last_name")
    this.$el.find(".search_input").val(first_name + " " + last_name);
  },

  createPerson: function() {
    var firstName = this.$el.find(".first_name").val();
    var lastName = this.$el.find(".last_name").val();

    App.peopleCollection.create({
      first_name: firstName,
      last_name: lastName
    });
  }
});
