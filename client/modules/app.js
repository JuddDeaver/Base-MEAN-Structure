var discussions_app = angular.module('discussions_app', ['ngRoute']);

discussions_app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html'
    })
    .when('/#dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/#topic',{
        templateUrl: 'partials/topic.html'
    })
    .when('/#user',{
        templateUrl: 'partials/user.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});