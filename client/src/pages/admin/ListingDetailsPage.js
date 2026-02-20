import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import FsLightbox from "fslightbox-react";

import * as listingsAPI from "../../utilities/listings-api";
import { deleteListing } from "../../utilities/listings-service";
import loading from "../../components/loading";
import floorPlan from "../../assets/apatrment/floor_plan.png"



export default function ListingDetailsPage({ listings }) {
  const [listing, setListing] = useState(); //getting all listings from db

  const [slide, setSlide] = useState(false); //for slide show
  const { id } = useParams();
  const navigation = useNavigate();

  const [display, setDisplay] = useState({
    isLoaded: false,
    message: "Getting Listing"
  });

  async function getListing() {
    const listing = await listingsAPI.getById(id);
    setListing(listing);
    setDisplay({
      ...display,
      isLoaded:true,
      message:""
    })
  }

  useEffect(() => {
    getListing();
  }, []);

  const handleDelete = async (evt) => {
    // evt.preventdefault()
    try {
      setDisplay({
        ...display,
        isLoaded:false,
        message:"Deleting"
      })
      let deleteResponce = await deleteListing(listing);
      if (deleteResponce.status == 201){
        navigation("/irunthis");
      }else{
        setDisplay({
          ...display,
          isLoaded:true,
          message:""
        })
      }
      
    } catch {}
  };

  function loaded() {
    let quals = listing.qualifications.split(".")
    quals.pop()
    // console.log(listing)
    return (
      <>
        <div className="return">
          <div className="back">
            <Link to="/irunthis">
              <h2 className="arrow left title">
                <i></i> Back{" "}
              </h2>
            </Link>
          </div>

          <h1 className="title">{listing.title}</h1>
        </div>

        <div className="main-info">
          <div className="stack-container">
            <div onClick={() => setSlide(!slide)} className="stack">
              <img src={listing.selectedFile1} width="250" height="180" />
              <span>
                Click to See All Photos and <br />
                Virtual Tour
              </span>
            </div>
          </div>

          <FsLightbox
            toggler={slide}
            sources={[
              <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGreenForestApts%2Fvideos%2F537745906753895%2F&show_text=false&width=560&t=2" 
              width="1100" height="650" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true">
              </iframe>,
              listing.selectedFile1,
              listing.selectedFile2,
              listing.selectedFile3,
              listing.selectedFile4,
              listing.selectedFile5,
              listing.selectedFile6,
              listing.selectedFile7,
              listing.selectedFile8,
              floorPlan, //floor plan
            ]}
          />

          <div className="info infobox">
            {listing.available ? (
              <h5 className="available">Available</h5>
            ) : (
              <h3 className="not-available">Not Available</h3>
            )}

            <h3 className="info-title">
              Rent: <span className="price">{listing.rent}</span>
            </h3>
            <h3 className="info-title">
              Security Deposit:{" "}
              <span className="price">{listing.securityDeposit} </span>
            </h3>

            <p>
              <span className="sub-title info-title ">Utilities: </span>
              <span>{listing.utilities}</span>
            </p>

            <p>{listing.description1}</p>
            <p>{listing.description2}</p>

            <p>
              <span className="sub-title info-title">Pets: </span>
              {listing.pets}
            </p>
          </div>
        </div>

        <div className="quals">
          <h2 className="title">Qualifications:</h2>
          <div className="infobox">
            <ul className="quals-list">
            {quals.map((pa, idx) => {
              if (pa.includes("evictions")){
                return <li key={idx}><strong>{pa}</strong></li>;
              }else{
                return <li key={idx}>{pa}</li>;
              }
              // console.log("PA:",pa.includes("evictions"));
              
            })}
            </ul>
          </div>
        </div>

        <div className="bottom-buttons">
          <Link to={`/irunthis/${listing._id}/edit`}>
            <button className="create-btn">
            <i className="fa fa-pencil" aria-hidden="true"></i>
              &nbsp; Edit</button>
          </Link>

          <form>
            <button onClick={handleDelete} className="delete-btn">
              <i className="fa fa-trash" aria-hidden="true"></i>
              &nbsp; Delete
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      {display.isLoaded ? loaded() : loading(display.message)}
    </>
  );
}
