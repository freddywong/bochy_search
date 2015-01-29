var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homePage'
  },

  homePage: function() {
    $("body").append("IT WORKS")
  }
});

App.router = new App.Router();