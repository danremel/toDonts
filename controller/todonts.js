// Packages
const express = require('express');
const router = express.Router();
const data = require('../data');

// Index ToDonts
router.get('/', (req,res) => {
	res.render('todonts/index', {
		todonts: data.seededToDonts,
	});
});

// New ToDonts
router.get('/new', (req, res) => {
	res.render('todonts/new');
});


// Show ToDonts
router.get('/:id', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	res.render('todonts/show', {
		todonts: todonts,
		id: id,
	});
});

// Edit ToDonts
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	res.render('todonts/edit', {
		todonts: todonts,
		id: id
	});
});

// Update ToDonts
router.put('/:id', (req, res) => {
	const id = req.params.id;
	const todonts = data.seededToDonts[id];
	todonts.description = req.body.description;
	todonts.urgent = req.body.urgent;
	res.method = "GET";
	res.redirect(`/todonts/${id}`);
});

// Save ToDonts
router.post('/', (req, res) => {
	console.log(req.body);
	const newTodonts = {
		description: req.body.description,
		urgent: req.body.urgent
	};
	data.seededToDonts.push(newTodonts);
	res.redirect('/todonts');
});

module.exports = router;