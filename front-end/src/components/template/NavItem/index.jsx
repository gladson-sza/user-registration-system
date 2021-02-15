import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = props => <Link
  to={props.link}
  className="menu-item">
  <i className={props.icon}></i> {props.label}
</Link>

export default NavItem