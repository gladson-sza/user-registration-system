import './style.css'
import React from 'react'
import NavItem from '../NavItem'

const Nav = props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItem
        link="#/"
        icon="fa fa-home"
        label="Home" />
      
      <NavItem
        link="#/users"
        icon="fa fa-users"
        label="Users" />

    </nav>
  </aside>

export default Nav