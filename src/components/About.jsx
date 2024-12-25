import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid m:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            ratione officia suscipit culpa minima commodi incidunt placeat optio
            quibusdam odio corrupti labore libero, nobis repellendus nemo
            tempore odit, quo aut.
          </p>
        </article>
        Hello
      </div>
    </section>
  )
}

export default About
