// import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import React, { useState } from 'react';

import "./team.css"



const Team = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // const [isBooked, setIsBooked] = useState(false);
  const handleBookTicket = () => {
    // Simulate a booking request
    // In a real-world app, you would make an API call to a backend server
    // Here, we'll just simulate the booking by setting a timer
    if (!isBooked) {
      setTimeout(() => {
        setIsBooked(true);
        setBookingSuccess(true);
      }, 2000); // Simulate a 2-second booking process
    } else {
      setIsBooked(false);
      setBookingSuccess(false);
    }
  };
 
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Attend an Event'/>
          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  
                  <h4>{val.name}</h4>
                  <i className='fa fa-location-dot'></i>

                  <label>{val.address}</label>

                 
                  <div className='button flex'>
                    <button
                    onClick={handleBookTicket}
                    style={{
                      backgroundColor: isBooked ? 'red' : '#ED7014',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                    
                    >
                              {isBooked ? 'Cancel Ticket' : 'Book Ticket'}

                    </button>
                    <button className='btn4'>View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
