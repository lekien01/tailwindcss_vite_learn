import React from 'react'
import icon from '../assets/logo.jpeg'

import NavBarMenuVertical from './NavMenu/NavBarMenuNormal'
import NavBarMenuHorizontal from './NavMenu/NavBarMenuHorizontal'
import ToggleMenu from './NavMenu/ToggleMenu'

const Navbar = () => {
  return (
    <nav className="bg-emerald-900 h-16 grid grid-cols-2 ">
      <div className="py-2 px-8 md:px-8">
        <a href="menu">
          <img src={icon} className="h-12 rounded" />
        </a>
      </div>
      <div>
        <ToggleMenu />
        <NavBarMenuHorizontal />
      </div>
    </nav>
  )
}

export default Navbar
