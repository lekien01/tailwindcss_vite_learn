import React from 'react'
import heroImg from '../assets/hero.svg'
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div
        className="align-element grid md:grid-cols-2
      items-center gap-8"
      >
        <article>
          <h1 className="text-5xl font-bold tracking-wider py-4">
            Stephen Dinh
          </h1>
          <p className='"mt-4 text-3xl text-slate-700 capitalize tracking-wide '>
            Front-End Development
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/lekien01">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaGithubSquare>
            </a>
            <a href="https://github.com/lekien01">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaLinkedin>
            </a>
            <a href="https://github.com/lekien01">
              <FaTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300"></FaTwitter>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-90" />
        </article>
      </div>
    </div>
  )
}

export default Hero
