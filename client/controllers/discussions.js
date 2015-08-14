discussions_app.controller('discussionsController', function($scope, DiscussionFactory, $location) {
  var loginName = "";
  var that = this;
  that.discussions = DiscussionFactory.getDiscussions(function(data) {
    that.discussions = data;
  });

  that.getDiscussions = function() {
    DiscussionFactory.getDiscussions(function(data) {
      that.discussions = data;
    });
  }
  that.addDiscussion = function(discussion) {
    DiscussionFactory.addDiscussion(discussion, function(data) {
      that.discussions = data;
      that.discussion = {};
    });
  }
  that.removeDiscussion = function (discussion){
    DiscussionFactory.removeDiscussion(discussion, function(data) {
      that.discussions = data;
      that.discussion = {};
    });
  }
  that.loginUser = function(login) {
    that.loginName = login;
    $location.path("/#dashboard", {"login" : that.loginName});
  }
});