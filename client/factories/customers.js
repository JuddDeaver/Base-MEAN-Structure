  // notice how we're putting $http into the factory!
  customers_app.factory('CustomerFactory', function($http) {
    var factory = {};
    var customers = [];
    // lets edit our angular factory's getCustomers method as follows
    factory.getCustomers = function(callback) {
      $http.get('customers').success(function(output) {
        callback(output);
      })
    }
    factory.removeCustomer = function(customer, callback) {
      $http.delete('customers/' + customer._id).success(function(output) {
        callback(output);
      })
    }
    factory.addCustomer = function(customer, callback) {
      $http.post('customers', customer).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });