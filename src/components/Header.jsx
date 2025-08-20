import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Certifications', '#certs'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          <span className="text-cyan-400">Balaji</span> Wagh
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="text-slate-300 hover:text-white">{label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a className="btn" href="mailto:balaji.wtcs@gmail.com"><Mail size={16}/> Email</a>
          <a className="btn" href="https://github.com/Balaji4747" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
          <a className="btn btn-primary" href="/resume.pdf" download>Download CV</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden btn" aria-label="Menu">
          <Menu size={18}/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-800 px-4 pb-4 flex flex-col gap-3">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="text-slate-300 hover:text-white">{label}</a>
          ))}
          <div className="flex gap-3 pt-2">
            <a className="btn w-full justify-center" href="mailto:balaji.wtcs@gmail.com"><Mail size={16}/> Email</a>
            <a className="btn w-full justify-center" href="https://www.linkedin.com/in/balaji-wagh-devops-eng/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a className="btn btn-primary w-full justify-center" href="/resume.pdf" download>Download CV</a>
          </div>
        </div>
      )}
    </header>
  )
}
