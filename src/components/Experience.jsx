import React from 'react'

const EXP = [
  {
    role: "DevOps Engineer",
    org: "—",
    period: "2022 — Present",
    points: [
      "Built CI/CD pipelines (Jenkins, GitHub Actions) cutting lead time by 70–80%.",
      "Provisioned AWS infra with Terraform & Ansible across multiple environments.",
      "Implemented observability (Prometheus, Grafana, ELK) achieving 99.9% uptime."
    ]
  },
  {
    role: "Cloud/DevOps Trainee",
    org: "—",
    period: "2021 — 2022",
    points: [
      "Containerized services with Docker; orchestrated on Kubernetes.",
      "Set up secure secrets management and image scanning (Vault, Trivy).",
      "Automated cost dashboards and right‑sizing for 30% savings."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <ol className="relative border-slate-800">
        {EXP.map((e, i) => (
          <li key={i} className="mb-6">
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{e.role} <span className="text-slate-400">{e.org}</span></h3>
                <span className="chip">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-2 list-disc list-inside text-slate-300">
                {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
