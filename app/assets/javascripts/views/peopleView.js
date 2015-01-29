var App = App || {};

App.PeopleView = Backbone.View.extend({
  render: function() {
    // put it in the view's element:
    this.$el.html(
      //render the data:
      JST['people'](
        // the below is like @people = Person.all in rails. It converts the array of models into an array of javascript objects. 
        // You will then assign it to a people key so that it can be looped over in the people.hbs file.
        // get the data:
        { people: this.collection.toJSON()}
      )
    );
  // Return the view for chaining
  return this;
  }
});