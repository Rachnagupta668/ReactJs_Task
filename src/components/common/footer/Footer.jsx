import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>List your event</h1>
              <p>Got a show,event,activity or a great experince? Partner with us & get listed on Chillerz</p>
            </div>
            <button className='btn5'>Contact Now</button>
            
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className="box">

        <img  src='../images/logo.png' alt='' />

        <p>Don't enter your Subscribe to a knowledge article within a knowledge base to receive email. </p>

        </div>

<div>
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
</div>

{/* <div className="box" > */}
<div>
            <div className='logo'>
              <h2>Subscribe or Follow</h2>
              <p style={{width:"30rem"}}>Don't enter your Subscribe to a knowledge article within a knowledge base to receive email notifications about new articles and article revisions or comments. </p>
                    </div>
              <div className='input flex'>
                <input type='text' placeholder='Enter Your Email Address' />
                <button>Subscribe</button>
            
            </div>
          </div>

</div>

      </footer>
      <div className='legal'>
        <span>Chillerz All Right </span>
      </div>
    </>
  )
}

export default Footer
