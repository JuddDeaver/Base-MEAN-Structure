  // PUT ANGULAR CODE HERE
  // Lets create our angular module
  // Controller code!
  customers_app.controller('CustomersController', function($scope, CustomerFactory) {
  // rest of the controller code
  // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.customers array
    // replace anywhere that you see "$scope.customers = CustomerFactory.getCustomers()" with the following code
    $scope.customers = CustomerFactory.getCustomers(function(data) {
      $scope.customers = data;
      // anything else that you want to happen after you getCustomers needs to be inside of this callback
    });

    $scope.getCustomers = function() {
      CustomerFactory.getCustomers(function(data) {
        $scope.customers = data;
      });
    }
    $scope.addCustomer = function(customer) {
      CustomerFactory.addCustomer(customer, function(data) {
        $scope.customers = data;
        $scope.customer = {};
      });
    }
    $scope.removeCustomer = function (customer){
      CustomerFactory.removeCustomer(customer, function(data) {
        $scope.customers = data;
        $scope.customer = {};
      });

      // $scope.customers.splice($scope.customers.indexOf(customer), 1);
    }
  });