import React from 'react'
import { skills } from '../data/skills'

function Pill({ children }) { return <span className="chip">{children}</span> }

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div className="card" key={group}>
            <h3 className="font-semibold mb-4 capitalize">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
