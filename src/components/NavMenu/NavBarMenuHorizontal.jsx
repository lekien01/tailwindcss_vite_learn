import React from 'react'
import { links } from '../../data'
const NavBarMenuHorizontal = () => {
  return (
    <div className="pl-60 py-6 gap-4 invisible lg:visible">
      <ul className="inline-flex">
        {links.map((link) => {
          const { id, href, text } = link
          return (
            <div className="flex flex-row space-x-4">
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
