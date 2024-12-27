import React, { useState } from 'react'

import NavBarMenuVertical from './NavBarMenuNormal'
import NavBarMenuHorizontal from './NavBarMenuHorizontal'

const ToggleMenu = () => {
  const [showToggle, setShowToggle] = useState(false)
  const toggleMenulist = () => {
    setShowToggle(!showToggle)
  }
  return (
    <div className="py-6 absolute right-10 md:invisible">
      <button
        type="toggle"
        className="btn bg-blue-500 hover:bg-blue-700 font-bold py-1 px-4 rounded  text-white"
        onClick={toggleMenulist}
      >
        Toggle
      </button>
      {showToggle && <NavBarMenuVertical />}
    </div>
  )
}

export default ToggleMenu
