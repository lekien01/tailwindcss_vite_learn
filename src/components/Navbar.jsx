import React from 'react'

import NavBarMenuVertical from './NavMenu/NavBarMenuNormal'
import NavBarMenuHorizontal from './NavMenu/NavBarMenuHorizontal'
import ToggleMenu from './NavMenu/ToggleMenu'

const Navbar = () => {
  return (
    <nav className="bg-emerald-100 grid grid-cols-2 ">
      <div className="py-6 px-8 md:px-8">
        <h2 className="text-3xl font-bold text-left text-emerald-950">
          Stephen Dinh
        </h2>
      </div>
      <div>
        <ToggleMenu />
        <NavBarMenuHorizontal />
      </div>
    </nav>
  )
}

export default Navbar
