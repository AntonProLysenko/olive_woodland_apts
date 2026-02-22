const express = require("express")
const Listing = require("../../models/listing")

let currentListing = {id:null, available: null}

module.exports = {
    getAllListings,
    availableListing,
    countAvailable,
    getAvailableSummary,
    getAllSummary,
    newListing,
    deleteListing,
    updateListing,
    createListing,
    //edit
    showListing
  };

//INDUCES
//INDEX

async function getAllListings(req, res) {
  try{
    const listings = await Listing.find({})
    res.status(200).json(listings);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}



async function availableListing(req, res) {
  try{
    console.log('Getting Available listings')
    const listings = await Listing.find({available: true})
    console.log('Got Available listings: ', listings)
    res.status(200).json(listings);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}



async function countAvailable(req, res) {
    console.log('Counting Available listings')
  try{
    const count = await Listing.countDocuments({available: true})
    console.log(`Got ${count} Available listings`)
    res.status(200).json({count});
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}



async function getAvailableSummary(req, res) {
  try{
    console.log('Getting Summary of Available listings')
    const listings = await Listing.find({available: true}).select('_id title rent selectedFile1 updatedAt available')
    console.log(`Got Available listings summary: ${listings}`)
    res.status(200).json(listings);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}


async function getAllSummary(req, res) {
  try{
    console.log('Getting Summary of ALL listings')
    const listings = await Listing.find({}).select('_id title rent selectedFile1 updatedAt available')
    console.log(`Got ALL listings summary: ${listings}`)
    res.status(200).json(listings);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}



//NEW
async function newListing (req,res) {
  try{
    console.log("newListing", req)
    req.status(200)
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
  

//DELETE
async function deleteListing(req,res){
  try {
    // console.log(req.body)
    // res.redirect("/principal")
    const deletedListing = await Listing.findByIdAndDelete(req.body._id)
    res.status(200).json({...deletedListing, status: 201})
   
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
}
//UPDATE
async function updateListing(req,res){
  try {
    console.log("Incoming Update body:", req.body);
    const id = req.params.id;
    // req.body.available  = req.body.available === "on"? true : false;
    
    newListing = await Listing.findByIdAndUpdate(id, req.body)
    // res.redirect(`/principal/${id}`)
    console.log("Saved to DB:", newListing._id);
    currentListing = newListing
    res.status(201).json({status: 201}); //
  } catch (e) {
    console.error("Edit error:", e);
    res.status(400).json({msg:e.message})
  }

}

//CREATE

async function createListing(req, res) {
  try {
    console.log("Incoming body:", req.body);
    const newListing = await Listing.create(req.body);
    console.log("Saved to DB:", newListing._id);
    res.status(201).json({...newListing, status: 201});  
    // res.status(400).json({ msg: "e.message" });

  } catch (e) {
    console.error("Create error:", e);
    console.log("Message: ", e.message)
    res.status(400).json({ msg: e.message });
  }
}

//EDIT

//SHOW
async function showListing(req, res) {
  try{
    console.log("Showing Listing")
    // console.log(req.params)
    // console.log(req.params.id, req.params.available)
    // console.log(currentListing.id, currentListing.available)
    if (currentListing.id == req.params.id && currentListing.available == true){
      console.log("\n\n\t\tListings matched")
      res.status(200).json(currentListing);
    }else{
      console.log("Getting NEW Listing Details ", req.params.id)
      const listing = await Listing.findById(req.params.id);
      console.log("Got Listing", listing)
      currentListing = listing
      res.status(200).json(listing);
    }
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}









// router.get("/principal/listings/new", (req,res)=>{
//     res.send("woohooo")
// //     res.render("movies/New")
// // })

