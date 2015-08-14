  // notice how we're putting $http into the factory!
  placeholders_app.factory('PlaceholderFactory', function($http) {
    var factory = {};
    var placeholders = [];
    // lets edit our angular factory's getPlaceholders method as follows
    factory.getPlaceholders = function(callback) {
      $http.get('placeholders').success(function(output) {
        callback(output);
      })
    }
    factory.removePlaceholder = function(placeholder, callback) {
      $http.delete('placeholders/' + placeholder._id).success(function(output) {
        callback(output);
      })
    }
    factory.addPlaceholder = function(placeholder, callback) {
      $http.post('placeholders', placeholder).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });