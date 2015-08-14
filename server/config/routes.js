// First at the top of your routes.js file you'll have to require the controller
// TODO: CHANGE CONTROLLER NAME
var Discussion = require('./../controllers/discussions.js');
  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
	app.get('/discussion', function(req, res) {
	  Discussion.index(req, res);
	})
	app.post('/discussion', function(req, res) {
	  Discussion.create(req, res);
	})
	app.delete('/discussion/:id', function (req, res) {
		Discussion.delete(req,res);
	})
  }; 