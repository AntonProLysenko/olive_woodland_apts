const express = require('express');
const router = express.Router();
const listingsCtrl = require('../../controllers/api/listings');


//INDUCES
//INDEX
// GET /api/items
router.get('/', listingsCtrl.getAllListings);
router.get('/available', listingsCtrl.availableListing);
router.get('/countAvailable', listingsCtrl.countAvailable);
router.get('/shortAvailable', listingsCtrl.getAvailableSummary);
router.get('/shortAll', listingsCtrl.getAllSummary);
//NEW
// router.get('/new', listingsCtrl.newListing)
//DELETE
router.delete('/:id', listingsCtrl.deleteListing)
//UPDATE
router.put('/:id', listingsCtrl.updateListing);
//CREATE
router.post('/new', listingsCtrl.createListing)
//EDIT
// router.get("/:id/edit",listingsCtrl.showListing)
//SHOW
// GET /api/items/:id
router.get('/:id', listingsCtrl.showListing);



module.exports = router;