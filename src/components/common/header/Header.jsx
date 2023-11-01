import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
// import mylogo from '../../images/logo.png';

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
                {/* <img src={mylogo} alt="not found"/> */}
                <img  src="../images/logo.png" alt=""/>
          </div>
         
         
    
<div>





            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            
            <button className='btn1' >
            <Link className='loginlink' to="/login">Login/SignUp</Link>

              {/* <i className=''></i> login/Sign Up */}
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
