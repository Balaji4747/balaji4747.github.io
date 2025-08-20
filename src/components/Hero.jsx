import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-20 text-center">
        <p className="chip mx-auto mb-3">DevOps • Cloud • SRE</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Balaji Wagh<span className="text-cyan-400"> — DevOps Engineer</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          AWS Certified Solutions Architect with 3+ years of hands-on experience in Kubernetes, Terraform, and CI/CD.
          I build scalable, secure, cost‑optimized platforms with 99.9% uptime and up to 80% faster deployments.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>
    </section>
  )
}
