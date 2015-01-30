var App = App || {}

App.People = Backbone.Collection.extend({
  model: App.Person,
  url: '/people',
  filterBySearch: function(searchText){
    var matchedPeople = this.filter(function(person) {
      return person.fullname().toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
    return new App.People(matchedPeople);
  }
});