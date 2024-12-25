import React from 'react'
import { links } from '../data'

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div
        className="mx-auto max-w-7xl px-8 py-4 flex flex-col 
      sm:flex-row sm:gap-x-16 sm:items-center sm:py-8"
      >
        <h2 className="text-3xl font-bold">
          Stephen<span className="text-emerald-600"> Dinh</span>
        </h2>
        <h2 className="flex gap-x-3">
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
        </h2>
      </div>
    </nav>
  )
}

export default Navbar
