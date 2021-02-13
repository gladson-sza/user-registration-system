import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Home from '../Home'
import Footer from '../template/Footer'

const App = props =>
  <div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
  </div>

export default App