// First at the top of your routes.js file you'll have to require the controller
var customers = require('./../controllers/customers.js');
  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
	app.get('/customers', function(req, res) {
	  customers.index(req, res);
	})
	app.post('/customers', function(req, res) {
	  customers.create(req, res);
	})
		/* Delete Customer by ID */
	app.delete('/customers/:id', function (req, res) {
		customers.delete(req,res);
	})

// note how we are delegating to the controller and passing along req and res    });
  }; 