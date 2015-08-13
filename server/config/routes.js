// First at the top of your routes.js file you'll have to require the controller
// TODO: CHANGE CONTROLLER NAME
var PLACEHOLDER = require('./../controllers/PLACEHOLDER.js');
  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
	app.get('/PLACEHOLDER', function(req, res) {
	  PLACEHOLDER.index(req, res);
	})
	app.post('/PLACEHOLDER', function(req, res) {
	  PLACEHOLDER.create(req, res);
	})
		/* Delete Friend by ID */
	app.delete('/PLACEHOLDER/:id', function (req, res) {
		PLACEHOLDER.delete(req,res);
	})

// note how we are delegating to the controller and passing along req and res    });
  }; 