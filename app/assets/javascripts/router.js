var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homePage'
  },

  homePage: function() {
    var peopleCollection = new App.People();
    peopleCollection.fetch().then(function(){
      var peopleView = new App.PeopleView({ collection: peopleCollection});
      // You need to say .render().el because .render() alone will return a javascript object. .el will get the element out of the object
      $("#container").html(peopleView.render().el);
    });
  }
});

App.router = new App.Router();