import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <a className="text-sm underline text-slate-300" href="https://github.com/Balaji4747" target="_blank" rel="noreferrer">More on GitHub</a>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-300"><b>Impact:</b> {p.impact}</p>
            <p className="text-slate-300"><b>Result:</b> {p.result}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
            <div className="mt-4">
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
