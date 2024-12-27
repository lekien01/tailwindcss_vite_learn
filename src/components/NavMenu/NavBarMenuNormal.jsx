import React from 'react'
import { links } from '../../data'
const NavBarMenuVertical = () => {
  return (
    <div className="bg-white absolute w-40 h-120">
      <ul className=" pt-4 flex flex-col space-y-4 text-black ">
        {links.map((link) => {
          const { id, href, text } = link
          return (
            <div className="h-6 w-40 pl-4 bg-slate-400 rounded ">
              <a
                key={id}
                href={href}
                className=" text-xl capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
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
