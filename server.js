// Packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');

// App Settings
const app = express();
const port = process.env.PORT || 3000;
// Application Params
const TodontsController = require('./controller/todonts');
// Log from Morgan
app.use(logger('dev'));


// Views
app.set('view engine', 'hbs');

app.use('/todonts', TodontsController);
// Home
app.get('/', (req, res) => {
	res.send("Home page");
});


// Start server
app.listen(port, () => {
	console.info(`Server listening on port ${port}`);
});