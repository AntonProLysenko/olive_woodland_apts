import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import FsLightbox from "fslightbox-react";

import * as listingsAPI from "../utilities/listings-api";
import loading from "../components/loading";


import Footer from "../components/Footer";

import floorPlan from "../assets/apatrment/floor_plan.png"




export default function ListingShowPage() {
  const [listing, setListing] = useState(); //getting needed listing from db

  const [slide, setSlide] = useState(false);
  const { id } = useParams();
 


  async function getListing() {
    const listing = await listingsAPI.getById(id);
    setListing(listing);
  }

  useEffect(() => {
    getListing();
  }, []);

  
  function loaded() {
    let quals = listing.qualifications.split(".")
    quals.pop()
    return (
      <>
        <div className="return">
          <div className="back">
            <Link to="/available">
              <h2 className="arrow left title">
                <i></i> Back{" "}
              </h2>
            </Link>
          </div>

          <h1 data-aos="zoom-in" data-aos-duration="900" className="title">
            {listing.title}
          </h1>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="900"
          className="main-info"
        >
          <div className="stack-container">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1200"
              onClick={() => setSlide(!slide)}
              className="stack"
            >
              <img src={listing.selectedFile1} width="250" height="180" alt="Salem Crown Apartment Interior"/>
              <span>
                Click to See All Photos and <br />
                Virtual Tour
              </span>
            </div>
          </div>

          <FsLightbox
            toggler={slide}
            sources={[
              listing.selectedFile1,
              <iframe 
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGreenForestApts%2Fvideos%2F537745906753895%2F&show_text=false&width=560&t=2" 
              width="1100" height="650" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true">
              </iframe>,
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1710606854736!6m8!1m7!1sCAoSLEFGMVFpcE5ydkxPVFJCNkdEN29yd09PdVM5R0RYWUhSWWRNQ2ZiWFFIZ0VY!2m2!1d39.8092414!2d-84.218333!3f137.19804953607814!4f-1.5282579253473756!5f0.7820865974627469"
                width="1100"
                height="650"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title = "galery show"
              ></iframe>,
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

          <div className="info info-box infobox">
            <h3 className="info-title">
              Rent: <span className="price">{listing.rent}</span>
            </h3>
            <h3 className="info-title">
              Security Deposit:
              <span className="price">{listing.securityDeposit} </span>
            </h3>

            <p>
              <span className="sub-title info-title">Utilities: </span>
              <span>{listing.utilities}</span>
            </p>

            <p>{listing.description1}</p>
            <p>{listing.description2}</p>

            <p>
              <span className="sub-title info-title">Pets: </span>
              {listing.pets}
            </p>
            <div className="bottom-buttons">
              <a href="sms:937-985-0069?&body=Hello! I'm interested in Salem Crown Apartments">
                <button className="create-btn">
                  <i className="fa fa-comments" aria-hidden="true"></i>
                  &nbsp; Text Us
                </button>
              </a>

              <a
                href="mailto:salemcrownapts@gmail.com?subject=eMail from Salem Crown Web Site&body=Hello! I'm interested in Salem Crown Apartments"
                target="_blank"
                rel="noreferrer"
              >
                <button className="standart-button-black create-btn ">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  &nbsp; Email Us
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="quals info-box">
          <h2 className="title">Qualifications:</h2>
          <div className="infobox" data-aos="fade-up" data-aos-duration="200">
            <ul className="quals-list">

            {quals.map((pa, idx) => {
              return <li key={idx}>{pa}</li>;
            })}
            </ul>
            <a
              href="https://day.managebuilding.com/Resident/rental-application/new/apply"
              target="_blank"
              rel="noreferrer"
            >
              <button className="create-btn standart-button-black">
                <i className="fa fa-pencil" aria-hidden="true"></i>
                &nbsp; Apply Now
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {listing ? loaded() : loading()}
      <br/>
      <br/>
      <Footer/>
    </>
  );
}
