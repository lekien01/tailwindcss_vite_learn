import React from 'react'
import { links } from '../../data'
const NavBarMenuVertical = () => {
  return (
    <div>
      <ul className="pt-4 flex flex-col space-y-4">
        {links.map((link) => {
          const { id, href, text } = link
          return (
            <div>
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBarMenuVertical
