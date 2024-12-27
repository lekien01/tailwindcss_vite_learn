import React from 'react'
import { links } from '../../data'
const NavBarMenuHorizontal = () => {
  return (
    <div className="md:px-60 py-4 gap-4 invisible md:visible">
      <ul className="inline-flex flex-row space-x-4 text-white">
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

export default NavBarMenuHorizontal
