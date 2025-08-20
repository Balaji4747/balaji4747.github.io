import React from 'react'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-14">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <h2 className="text-2xl font-bold mb-3">About</h2>
          <p className="text-slate-300 leading-relaxed">
            I'm a DevOps Engineer focused on automation, reliability, and developer experience. My toolkit spans AWS, Kubernetes,
            Terraform, CI/CD, and observability. I enjoy designing cloud‑native architectures, reducing lead time,
            and enabling teams to ship safely.
          </p>
          <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
            <li>Cut deployment time by <b>70–80%</b> with robust CI/CD.</li>
            <li>Achieved <b>99.9%+</b> uptime with proactive monitoring.</li>
            <li>Reduced infra costs by up to <b>30–60%</b> via FinOps best practices.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Quick Info</h3>
          <ul className="space-y-2 text-slate-300">
            <li><b>Location:</b> India (IST)</li>
            <li><b>Open to:</b> Full‑time & Consulting</li>
            <li><b>Email:</b> <a className="underline" href="mailto:balaji.wtcs@gmail.com">balaji.wtcs@gmail.com</a></li>
            <li><b>GitHub:</b> <a className="underline" href="https://github.com/Balaji4747" target="_blank">Balaji4747</a></li>
            <li><b>LinkedIn:</b> <a className="underline" href="https://www.linkedin.com/in/balaji-wagh-devops-eng/" target="_blank">balaji-wagh-devops-eng</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
