import './style.css'
import React from 'react'

const NavItem = props => <a
  className="menu-item"
  href={props.link}>
  <i className={props.icon}></i> {props.label}
</a>

export default NavItem