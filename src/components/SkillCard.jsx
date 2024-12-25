import React from 'react'

const SkillCard = ({ icon1, icon2, title, text }) => {
  return (
    <article className="">
      <span>{icon1}</span>
      <span>{icon2}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  )
}

export default SkillCard
