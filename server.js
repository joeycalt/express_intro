// in server.js

// Require modules
const express = require('express');
	
// Create the Express app
const app = express();
	
// Configure the app (app.set)
	
	
// Mount middleware (app.use)
	
	
// Mount routes
app.get('/hope', function(req, res) {
    res.send('<h1>Home Page</h1>');
});
app.get('/:joey', function(req, res) {
    res.send(`${req.params.joey}`);
  });

// Tell the app to listen on port 4000
app.listen(4000, function() {
    console.log('Listening on port 4000');
});