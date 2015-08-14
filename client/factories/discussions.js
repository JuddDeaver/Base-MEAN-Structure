  // notice how we're putting $http into the factory!
  discussions_app.factory('DiscussionFactory', function($http) {
    var factory = {};
    var discussions = [];
    // lets edit our angular factory's getDiscussions method as follows
    factory.getDiscussions = function(callback) {
      $http.get('discussion').success(function(output) {
        callback(output);
      })
    }
    factory.removeDiscussion = function(discussion, callback) {
      $http.delete('discussion/' + discussion._id).success(function(output) {
        callback(output);
      })
    }
    factory.addDiscussion = function(discussion, callback) {
      $http.post('discussion', discussion).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });