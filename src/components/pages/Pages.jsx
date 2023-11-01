import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Nightclub from '../nightclub/Nightclub';
import LoginPage from '../login/LoginPage'; // Import your login and signup components
import SignupPage from '../login/SignupPage';

const Pages = () => {
  return (
    <>
      <Router>
     
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/nightclub' component={Nightclub} />
          <Route exact path='/contact' component={Contact} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
