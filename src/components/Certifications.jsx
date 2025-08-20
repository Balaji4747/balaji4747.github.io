import React from 'react'

const CERTS = [
  { name: "AWS Certified Solutions Architect – Associate", note: "Architecture Design & Implementation" },
  { name: "AWS Certified Cloud Practitioner", note: "Cloud Fundamentals" },
  { name: "Amazon EKS Auto Mode", note: "Kubernetes Management & Optimization" },
  { name: "Linux Module for Cloud & DevOps", note: "System Administration & Automation" },
  { name: "CKA (In Progress)", note: "Kubernetes Administrator" },
  { name: "HashiCorp Terraform Associate", note: "Infrastructure as Code" },
  { name: "Docker Certified Associate", note: "Containerization" },
]

export default function Certifications() {
  return (
    <section id="certs" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {CERTS.map((c) => (
          <div key={c.name} className="card">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-slate-300 mt-1">{c.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
