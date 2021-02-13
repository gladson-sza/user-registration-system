import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import React from 'react'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

const App = props =>
  <div className="app">
    <Logo />
    <Nav />
    <Main
      icon="home"
      title="Home"
      subtitle="User Registration Project" />
    <Footer />
  </div>

export default App