import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
      <div className="card text-center">
        <h2 className="text-2xl font-bold">Let’s Connect</h2>
        <p className="text-slate-300 mt-2">Open to DevOps & Cloud roles, consulting, and open‑source collab.</p>
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <a className="btn" href="mailto:balaji.wtcs@gmail.com">Email</a>
          <a className="btn" href="https://www.linkedin.com/in/balaji-wagh-devops-eng/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="https://github.com/Balaji4747" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-primary" href="/resume.pdf" download>Download CV</a>
        </div>
      </div>
    </section>
  )
}
