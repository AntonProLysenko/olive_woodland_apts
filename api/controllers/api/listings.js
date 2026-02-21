const express = require("express")
const Listing = require("../../models/listing")


module.exports = {
    indexListing,
    newListing,
    deleteListing,
    updateListing,
    createListing,
    //edit
    showListing
  };

//INDUCES
//INDEX

async function indexListing(req, res) {
  try{
   
    const listings = await Listing.find({})
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
    console.log("Incoming body:", req.body);
    const id = req.params.id;
    // req.body.available  = req.body.available === "on"? true : false;
    
    newListing = await Listing.findByIdAndUpdate(id, req.body)
    // res.redirect(`/principal/${id}`)
    console.log("Saved to DB:", newListing._id);
    res.status(201).json({...newListing, status: 201}); //
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
    const listing = await Listing.findById(req.params.id);
    res.status(200).json(listing);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}









// router.get("/principal/listings/new", (req,res)=>{
//     res.send("woohooo")
// //     res.render("movies/New")
// // })

