import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Balaji Wagh — Built with React & Tailwind. Hosted on GitHub Pages.
      </div>
    </footer>
  )
}
