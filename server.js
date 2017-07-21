// Packages
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// App Settings
const app = express();
const port = process.env.PORT || 3000;

// Application Params
const TodontsController = require('./controller/todonts');

// Log from Morgan
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride('_method'));
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