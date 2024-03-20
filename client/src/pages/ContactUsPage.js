import React, { useState } from 'react';
import { send } from 'emailjs-com';

import Footer from '../components/Footer';

import mailboxes_img from "../assets/mailboxes.png"

export default function ContactUs() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [isSent, setisSent] = useState(false);

  const onSubmit = (e) => {
 
    e.preventDefault();    
    send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_PUBLIC_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      setToSend({ 
      from_name: '',
      message: '',
      reply_to: '',})

      setisSent(true)

      // .catch((e) => {
      //   console.log('FAILED...', e);
      // });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className='title contactUs-title' data-aos="zoom-in"data-aos-duration="1500" >Contact GreenForest Apartments</h1>
      <div className='contactUs-page'>
    
        <div className='contactUs-img' data-aos="fade-right"data-aos-duration="2000"data-aos-delay="600">
          <img  src={mailboxes_img} alt = "Green Forest Apartments mailboxes" />
        </div>

        <div className='contactUs-text'  data-aos="fade-left"data-aos-duration="2000"data-aos-delay="400">
        <p className='text'>Thank you for inquiring about our apartments for rent in Dayton. Feel free to contact us with any further questions and we will be happy to assist you.</p>
        <address className='text single-direction'><span className='text'>Address:</span> <a target="_blank" rel="noreferrer" href='https://www.google.com/maps/dir//GREEN+FOREST+APARTMENTS,+300-320+Forest+Park+Dr,+Dayton,+OH+45405/@39.8093879,-84.2187984,15z/data=!4m17!1m7!3m6!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2sGREEN+FOREST+APARTMENTS!8m2!3d39.8091463!4d-84.2185168!16s%2Fg%2F11gr426pfx!4m8!1m0!1m5!1m1!1s0x884081b53ea880a5:0xcc7c52c501f344ab!2m2!1d-84.2185168!2d39.8091463!3e3?entry=ttu'> 300-320 Forest Park Dr, Dayton, OH 45405</a> </address>

        <p className='single-direction text'><span className='text'>Phone:</span> <a href="sms:937-985-0069?&body=Hello! I'm interested in Salem Crown Apartments">937-985-0069</a></p>

        <h1  data-aos="zoom-in"data-aos-duration="1500" className='title'>Apply Online</h1>
        <p className='text center'>Online applications can be submitted 24/7.</p>
        <a href="https://day.managebuilding.com/Resident/rental-application/new" target="_blank" rel="noreferrer">
          <button className="create-btn standart-button-black">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            &nbsp; Apply Now</button>
        </a>
        </div>
      </div>

      <h1  data-aos="zoom-in"data-aos-duration="500"data-aos-delay="100"className={isSent? "hidden":"title"}>Email Us</h1>

      <div className='email-container'
       data-aos="fade-right"data-aos-duration="2000"data-aos-delay="700" 
       >
        <div className={isSent? "shown responce-email":"hidden"}>
        <h3 className='title'>Thank you for contacting Green Forest Apartments!</h3>
        <h3 className="title"> We'll email you shortly</h3>
        </div>

        <form className={isSent? "hidden":"emailUs-form infobox"} onSubmit={onSubmit}>
        <label>Your Name:</label>
         <input
            type='text'
            name='from_name'
            // placeholder='Enter Your Name'
            required
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label>Your Message:</label>
          <textarea className = "description"
            type='text'
            name='message'
            required
            // placeholder='Enter Your message'
            value={toSend.message}
            onChange={handleChange}
          />
          <label>Your Email:</label>
          <input
            type='email'
            name='reply_to'
            required
            // placeholder='Enter Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
            <button type='submit' className='standart-button'>
            <i className="fa fa-envelope" aria-hidden="true"></i>
              &nbsp; Send</button>
        </form>
   
       </div>
    
    <Footer/>
    </>
  )
}
