  // PUT ANGULAR CODE HERE
  // Lets create our angular module
  // Controller code!
  placeholders_app.controller('PlaceholdersController', function($scope, PlaceholderFactory) {
  // rest of the controller code
  // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.placeholders array
    // replace anywhere that you see "$scope.placeholders = PlaceholderFactory.getPlaceholders()" with the following code
    $scope.placeholders = PlaceholderFactory.getPlaceholders(function(data) {
      $scope.placeholders = data;
      // anything else that you want to happen after you getPlaceholders needs to be inside of this callback
    });

    $scope.getPlaceholders = function() {
      PlaceholderFactory.getPlaceholders(function(data) {
        $scope.placeholders = data;
      });
    }
    $scope.addPlaceholder = function(placeholder) {
      PlaceholderFactory.addPlaceholder(placeholder, function(data) {
        $scope.placeholders = data;
        $scope.placeholder = {};
      });
    }
    $scope.removePlaceholder = function (placeholder){
      PlaceholderFactory.removePlaceholder(placeholder, function(data) {
        $scope.placeholders = data;
        $scope.placeholder = {};
      });

      // $scope.placeholders.splice($scope.placeholders.indexOf(placeholder), 1);
    }
  });