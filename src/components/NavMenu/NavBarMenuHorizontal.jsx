import React from 'react'
import { links } from '../../data'
const NavBarMenuHorizontal = () => {
  return (
    <div className="pl-60 py-6 gap-4 invisible md:visible">
      <ul className="inline-flex">
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
