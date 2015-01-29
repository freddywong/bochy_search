var People = Backbone.Collection.extend({
  model: Person,
  url: '/people'
});