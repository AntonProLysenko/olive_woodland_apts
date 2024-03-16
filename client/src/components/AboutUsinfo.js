import React from 'react'

import { useState } from "react";

import FsLightbox from "fslightbox-react";

export default function AboutUsinfo() {
      const [slide, setSlide] = useState(false);
  return (
    <div>
      {" "}
      <div className="aboutUs-container">
        <div className="box-container">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="title"
          >
            About
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="2000"
            className="about infobox"
          >
            <p>
              Salem Crown Apartments are fully remodeled with newly painted
              walls, remodeled bathroom and kitchen, luxury vinyl plank floors,
              and newer appliances that consist of a stove, fridge and
              dishwasher.{" "}
            </p>
            <p>
              The features inside this apartment are above the rest! Individual
              Furnace Units, new windows and doors, 3 closets, laundry area,
              secure entrances.{" "}
            </p>
            <p>
              Conveniently located 2 miles downtown Dayton, and close to Kroger
              (2 miles) and Dayton Police Department (2 miles).
            </p>
            <p>
              <strong>RTA stop right on the corner</strong>{" "}
            </p>
            <p>
              We strive to provide nice, clean, comfortable, and affordable
              housing for responsible residents! 27-unit apartment complex under
              new management (fully remodeled in 2018-2019)
            </p>
          </div>
        </div>

         <div className="box-container">
          <h1
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="title"
          >
            Our Main Creteria
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="2000"
            className="about infobox"
          >
            <p>
              Must have a <strong>minimum</strong> gross monthly family <strong>income</strong> of $2500
            </p>
<p>
No evictions, eviction filings, or criminal convictions in the past 5 years (including theft, domestic violence, drug charges, and any felony charges).
</p>

<p>
The Household makes more than $2500 a month in combined verifiable income (net income). Will need proof of income (and three months with the current employer).
</p>

<p>
Any credit is acceptable.
</p>




<p>
No section 8.
        
</p>

<p>
No smoking inside
        
</p>

<p>
        
No pets over 25 lbs.
</p>











            
            {/* <p>
              Must be currently employed
            </p> 
            <p>
              The only income that can be documented will be considered
            </p>
            <p>
              No criminal background including theft, domestic violence, drug charges, and any felony charges for the past 5 years
            </p>
            <p>
              No evictions, evictions filings in the past 5 years
            </p>
            <p>
              You must be able to obtain electricity (AES) in your name
            </p>
            <p>
              This is a drug-free and smoke-free home
            </p>
            <p>
              No Pets over 25 lbs
            </p>
            <p>
              $35 application fee for each adult living in the household
            </p> */}
          </div>
        </div>

        <div className="box-container">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="700"
            className="title"
          >
            Testimonials
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="1500"
            className="reviews-container"
          >
            <div className="elfsight-app-b0b21a6b-fd53-4e3e-8341-31d8dddb7771 reviews infobox"></div>
          </div>
        </div>

        <div className="box-container">
          <h1 data-aos="zoom-in" data-aos-duration="2000" className="title">
            Virtual Tour
          </h1>
          <iframe
            title="virtual tour about"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="virtual-tour"

            src="https://www.google.com/maps/embed?pb=!4v1710606854736!6m8!1m7!1sCAoSLEFGMVFpcE5ydkxPVFJCNkdEN29yd09PdVM5R0RYWUhSWWRNQ2ZiWFFIZ0VY!2m2!1d39.8092414!2d-84.218333!3f137.19804953607814!4f-1.5282579253473756!5f0.7820865974627469"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"

          ></iframe>         
        </div>


        {/* <div className="box-container">
          <h1 data-aos="zoom-in" data-aos-duration="2000" className="title">
            Video Tour
          </h1>
          {/* <iframe
            title="virtual tour about"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="virtual-tour"

            src="https://www.google.com/maps/embed?pb=!4v1710606854736!6m8!1m7!1sCAoSLEFGMVFpcE5ydkxPVFJCNkdEN29yd09PdVM5R0RYWUhSWWRNQ2ZiWFFIZ0VY!2m2!1d39.8092414!2d-84.218333!3f137.19804953607814!4f-1.5282579253473756!5f0.7820865974627469"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>          

        <iframe data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500" className="virtual-tour video" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGreenForestApts%2Fvideos%2F537745906753895%2F&show_text=false&width=560&t=2" width="560" height="314" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div> */}






        <div className="box-container">
          <div className="container">
            <h1 data-aos="zoom-in" data-aos-duration="100" className="title">
              Gallery
            </h1>

            <div className="gallery" onClick={() => setSlide(!slide)}>
              <figure
                data-aos="fade-down-right"
                data-aos-duration="1000"
                className="gallery__item gallery__item--1"
              >
                <img
                  src="https://i.imgur.com/ILzD0HZ.jpg"
                  className="gallery__img"
                  alt="Kitchen"
                />
              </figure>

              <figure
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1200"
                className="gallery__item gallery__item--2"
              >
                <img
                  src="https://i.imgur.com/R16jAox.jpg"
                  className="gallery__img"
                  alt="Bathroom"
                />
              </figure>

              <figure
                data-aos="fade-down-left"
                data-aos-delay="300"
                data-aos-duration="1200"
                className="gallery__item gallery__item--3"
              >
                <img
                  src="https://i.imgur.com/t5fnmv0.jpg"
                  className="gallery__img"
                  alt="Bedroom"
                />
              </figure>

              <figure
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
                className="gallery__item gallery__item--4"
              >
                <img
                  src="https://i.imgur.com/J4xLkW4.jpg"
                  className="gallery__img"
                  alt="Bedroom"
                />
              </figure>

              <figure
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1600"
                className="gallery__item gallery__item--5"
              >
                <img
                  src="https://i.imgur.com/9Pc0exQ.jpg"
                  className="gallery__img"
                  alt="Bedroom2"
                />
              </figure>

              <figure
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1700"
                className="gallery__item gallery__item--6"
              >
                <img
                  src="https://i.imgur.com/YUamIMj.jpg"
                  className="gallery__img"
                  alt="Dining"
                />
              </figure>

              <figure
                data-aos="fade-up-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="gallery__item gallery__item--7"
              >
                <img
                  src="https://i.imgur.com/oYV2yrP.jpg"
                  className="gallery__img"
                  alt="Kitchen Bar"
                />
              </figure>

              <figure
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="2500"
                className="gallery__item gallery__item--8"
              >
                <img
                  src="https://i.imgur.com/yafqqml.jpg"
                  className="gallery__img"
                  alt="Living Room Patio Enterance"
                />
              </figure>

              <figure
                data-aos="fade-up-left"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="gallery__item gallery__item--9"
              >
                <img
                  src="https://i.imgur.com/jB7Yruf.jpg"
                  className="gallery__img"
                  alt="Hallway"
                />
              </figure>

              <figure
                data-aos="zoom-in-up"
                data-aos-delay="1800"
                data-aos-duration="1000"
                className="gallery__item gallery__item--10"
              >
                <img
                  src=" https://i.imgur.com/MFPbkjh.jpg"
                  className="gallery__img"
                  alt="Living Room Vaulted Ceilings"
                />
              </figure>

              <figure
                data-aos="fade-up-right"
                data-aos-delay="700"
                data-aos-duration="1300"
                className="gallery__item gallery__item--11"
              >
                <img
                  src="https://i.imgur.com/U1Mtm2b.jpg"
                  className="gallery__img"
                  alt="Outside"
                />
              </figure>

              <figure
                data-aos="fade-up-left"
                data-aos-delay="800"
                data-aos-duration="1500"
                className="gallery__item gallery__item--12"
              >
                <img
                  src="https://i.imgur.com/CwSBvsh.jpg"
                  className="gallery__img"
                  alt="Floor Plan"
                />
              </figure>

              <figure
                data-aos="fade-up-left"
                data-aos-delay="900"
                data-aos-duration="1400"
                className="gallery__item gallery__item--13"
              >
                <img
                  src="https://i.imgur.com/a880IHY.jpg"
                  className="gallery__img"
                  alt="Outside Winter"
                />
              </figure>

              <figure
                data-aos="fade-up-right"
                data-aos-delay="600"
                data-aos-duration="1500"
                className="gallery__item gallery__item--14"
              >
                <img
                  src="https://i.imgur.com/BCQ72z5.jpg"
                  className="gallery__img"
                  alt="Outside Summer"
                />
              </figure>
              
            </div>
          </div>

          <iframe
            id='map'
            title="maps about"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.899708498987!2d-84.218333!3d39.8092414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884081b53ea880a5%3A0xcc7c52c501f344ab!2sGREEN%20FOREST%20APARTMENTS!5e0!3m2!1sen!2sus!4v1710607180130!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
        </div>

        <FsLightbox
          toggler={slide}
          sources={[
            <iframe data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500"  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGreenForestApts%2Fvideos%2F537745906753895%2F&show_text=false&width=560&t=2" width="560" height="314" style={{border:"none", overflow: "hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>,
            "https://i.imgur.com/ILzD0HZ.jpg", // kitchen
            "https://i.imgur.com/QSntCVw.jpg", // kitchen
            "https://i.imgur.com/R16jAox.jpg", //bathroom
            "https://i.imgur.com/QEGr0Yc.jpg", //bathroom
            "https://i.imgur.com/MFPbkjh.jpg", //living vaulted
            "https://i.imgur.com/9TLB0Wu.jpg", //living regular
            "https://i.imgur.com/hzj7TXC.jpg", //living regular
            "https://i.imgur.com/yafqqml.jpg", //living balcony door
            "https://i.imgur.com/J4xLkW4.jpg", //bedroom
            "https://i.imgur.com/t5fnmv0.jpg", //bedroom
            "https://i.imgur.com/9Pc0exQ.jpg", //bedroom
            "https://i.imgur.com/KmnAkPq.jpg", //bedroom
            "https://i.imgur.com/YUamIMj.jpg", //living barshelf vaulted
            "https://i.imgur.com/oYV2yrP.jpg", // kitchen window
            "https://i.imgur.com/rUeTCeA.jpg", //entance
            "https://i.imgur.com/jB7Yruf.jpg", //"halway"
            "https://i.imgur.com/CwSBvsh.jpg", //floor plan
            "https://i.imgur.com/U1Mtm2b.jpg", //outside drone
            "https://i.imgur.com/a880IHY.jpg", //outside winter
            "https://i.imgur.com/BCQ72z5.jpg", //outside summer
            
          ]}
        />
      </div>
    </div>
  );
}
