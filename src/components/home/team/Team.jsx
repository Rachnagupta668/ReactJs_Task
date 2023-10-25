import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
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
                    <button>
                      Get tickets
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
