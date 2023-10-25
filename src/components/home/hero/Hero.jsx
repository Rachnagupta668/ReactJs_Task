import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="main">
        <div className='container'>
          <Heading title='BGMFK ' />
          <Heading title=' Performing tonight' />

              <h5 className="heading">City Arena Cape Town</h5>
              <button className='btn1' style={{marginLeft:"6rem"}}>
              <i className=''></i> Book Now
            </button>     <button style={{marginLeft:"2rem"}} className='btn4'>Know More
                    </button>
        </div>
        <div>
        <video style={{marginTop:"7rem"}} width="640" height="360" controls>
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>


        </div>
      </section>
    </>
  )
}

export default Hero
