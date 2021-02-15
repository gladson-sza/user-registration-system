import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Footer from '../template/Footer'

const App = props =>
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>



export default App