import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import art from '../assets/Art.png'
import * as listingsAPI from "../utilities/listings-api";
// import "animate.css";



import Footer from "../components/Footer";
import AboutUsinfo from "../components/AboutUsinfo";

export default function HomePage() {
  const [isHovering, setIsHovering] = useState(false);

  const [availableCount, setAvailableCount] = useState(null);

  async function getAvailableCount(){
    const count = await listingsAPI.getAvailableCount();
    setAvailableCount(count.count);
  }

  useEffect(() => {
    getAvailableCount()
  },[])

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  

  const loaded = () => {
    // const availableListings = []; //finding available listings

    // listings.map((listing) => {
    //   if (listing.available === true) {
    //     return availableListings.push(listing);
    //   }
    //   return null
    // });
    function MultipleAvailable() {

      return (
        <div className="add-container">
          <div className="ad infobox">
            <span>
              {/* We have {availableListings.length} available apartments */}
              We have {availableCount} available apartments
              <br />
              <Link to="/available">
                {" "}
                <button className="btn-add standart-button-dark">See more</button>
              </Link>
            </span>
          </div>

          <div className="directions">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//GREEN+FOREST+APARTMENTS,+300-320+Forest+Park+Dr,+Dayton,+OH+45405/@39.8093879,-84.2187984,15z/data=!4m17!1m7!3m6!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2sGREEN+FOREST+APARTMENTS!8m2!3d39.8091463!4d-84.2185168!16s%2Fg%2F11gr426pfx!4m8!1m0!1m5!1m1!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2m2!1d-84.2185168!2d39.8091463!3e3?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <span>300-320 Forest Park Dr, Dayton, OH 45405</span>
            </a>
          </div>

          {
            //Pseudo element for aligning items to the very left and even center
          }
          <div className="ad-hidden">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
              href="https://www.google.com/maps/dir//GREEN+FOREST+APARTMENTS,+300-320+Forest+Park+Dr,+Dayton,+OH+45405/@39.8093879,-84.2187984,15z/data=!4m17!1m7!3m6!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2sGREEN+FOREST+APARTMENTS!8m2!3d39.8091463!4d-84.2185168!16s%2Fg%2F11gr426pfx!4m8!1m0!1m5!1m1!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2m2!1d-84.2185168!2d39.8091463!3e3?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <span>300-320 Forest Park Dr, Dayton, OH 45405</span>
            </a>
            <br />
          </div>
        </div>
      );
    }

    function SingleAvailable() {
      //finding available listings

      return (
        <div className="add-container">
          <div className="ad infobox">
            {/* We have {availableListings.length} available apartment */}
            We have {availableCount} available apartment
            
            <br />
            <Link to="/available">
              <button className="btn-add standart-button-dark">See more</button>
            </Link>
          </div>

          <div className="directions">
            <div>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <span> Directions:</span>
            </div>
            <a
             href="https://www.google.com/maps/dir//GREEN+FOREST+APARTMENTS,+300-320+Forest+Park+Dr,+Dayton,+OH+45405/@39.8093879,-84.2187984,15z/data=!4m17!1m7!3m6!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2sGREEN+FOREST+APARTMENTS!8m2!3d39.8091463!4d-84.2185168!16s%2Fg%2F11gr426pfx!4m8!1m0!1m5!1m1!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2m2!1d-84.2185168!2d39.8091463!3e3?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <span>300-320 Forest Park Dr, Dayton, OH 45405</span>
            </a>
          </div>

          {
            //Pseudo element for aligning items to the very left and even center
          }
          <div className="ad-hidden">
            <br />
          </div>
        </div>
      );
    }

    return availableCount === 1
      ? SingleAvailable()
      : availableCount === 0
      ? noneAvailable()
      : MultipleAvailable();
  };

  function noneAvailable() {
    return (
      <div className="single-direction">
        <div>
          <i className="fa fa-compass" aria-hidden="true"></i>
          <span> Directions:</span>
        </div>
        <a
          href="https://www.google.com/maps/dir//GREEN+FOREST+APARTMENTS,+300-320+Forest+Park+Dr,+Dayton,+OH+45405/@39.8093879,-84.2187984,15z/data=!4m17!1m7!3m6!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2sGREEN+FOREST+APARTMENTS!8m2!3d39.8091463!4d-84.2185168!16s%2Fg%2F11gr426pfx!4m8!1m0!1m5!1m1!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2m2!1d-84.2185168!2d39.8091463!3e3?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <span>300-320 Forest Park Dr, Dayton, OH 45405</span>
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="homepageContainer">
        {availableCount ? loaded() : noneAvailable()}

        <div
          className={isHovering ? "homePic-faded" : "homePic"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img
            className="animate__zoomIn animate__bounce"
            src={art}
            alt="Green Forest Outside Vector Style"
          />

          {/* <h3 className="home-pic-text">
          One Bedroom Apartments for Rent in Dayton, OH
        </h3> */}

          <div className="home-pic-text">
            <h1 className="title-main">Green Forest Apartments</h1>
            <br />
            <p>
            {/* Fully remodeled one-bedroom apartments in Dayton, OH with newly painted walls,
            a remodeled bathroom and kitchen, luxury vinyl plank floors, and newer appliances that consist of a stove and fridge.  */}

            Enjoy fully remodeled one-bedroom apartments in Dayton with modern finishes, new appliances, and luxury vinyl plank flooring. A quiet community surrounded by green space — simple, clean, and comfortable living.
            </p>

            <Link to="/about">
              <button className="home-btn">See More</button>
            </Link>
          </div>
        </div>
      </div>
      
      <AboutUsinfo />

      <Footer />
    </>
  );
}
