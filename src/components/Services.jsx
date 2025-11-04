import React from 'react';
import { Shield, Lock, Network, Server, ChevronRight, Star } from 'lucide-react';

const COLORS = {
  text: '#555555',
  textLight: '#777777',
  greyyellow: '#B0B596',
  red: '#CC0000',
};

const services = [
  {
    icon: <Shield size={22} color="#ffffff" />, title: 'Managed Detection & Response',
    desc: '24/7 monitoring, triage, and containment with elite analysts and automation.',
  },
  {
    icon: <Lock size={22} color="#ffffff" />, title: 'Security Architecture & Hardening',
    desc: 'Zero Trust architectures, least-privilege access, and secure baseline enforcement.',
  },
  {
    icon: <Network size={22} color="#ffffff" />, title: 'Red Team & Adversary Simulation',
    desc: 'Real-world attack simulation to stress-test your defenses and response readiness.',
  },
  {
    icon: <Server size={22} color="#ffffff" />, title: 'Cloud & Infra Security',
    desc: 'Secure-by-design cloud, workload, and identity protections at enterprise scale.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: COLORS.text }}>Our Core Security Solutions</h2>
            <div className="mt-1 h-1 w-24" style={{ background: COLORS.greyyellow }} />
          </div>
          <div className="hidden md:flex items-center gap-2" style={{ color: COLORS.textLight }}>
            <Star size={16} /> Trusted by industry leaders
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-lg border bg-white p-5 transition-shadow hover:shadow-lg" style={{ borderColor: '#EAEAEA' }}>
              <div className="mb-4 inline-flex items-center justify-center rounded-md p-3" style={{ background: COLORS.greyyellow }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold" style={{ color: COLORS.text }}>{s.title}</h3>
              <p className="mt-2 text-sm" style={{ color: COLORS.textLight }}>{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold" style={{ color: COLORS.red }}>
                View Details <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold" style={{ color: COLORS.text }}>
            Why Choose Us
          </h3>
          <div className="mt-2 h-0.5 w-16" style={{ background: COLORS.greyyellow }} />
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Proactive threat hunting and continuous hardening',
              'Elite responders with measurable time-to-contain',
              'Vendor-agnostic, outcome-driven engagements',
              'Transparent reporting and executive-ready insights',
            ].map((b) => (
              <li key={b} className="flex items-start gap-3" style={{ color: COLORS.text }}>
                <span className="mt-1 h-2 w-2 rounded-full" style={{ background: COLORS.greyyellow }} />
                <span className="text-sm" style={{ color: COLORS.textLight }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trusted by logos + quote */}
        <div className="mt-12">
          <h4 className="text-lg font-semibold" style={{ color: COLORS.text }}>Trusted by Industry Leaders</h4>
          <div className="mt-4 flex gap-8 overflow-x-auto py-2" style={{ color: COLORS.text }}>
            {['NIMBUS', 'ARGON', 'POLARIS', 'SENTRY', 'HELIOS'].map((brand) => (
              <div key={brand} className="shrink-0 rounded-md border px-4 py-2 text-sm font-semibold tracking-widest" style={{ borderColor: COLORS.greyyellow, color: COLORS.text }}>
                {brand}
              </div>
            ))}
          </div>
          <blockquote className="mt-4 italic" style={{ color: COLORS.textLight }}>
            “Aegis SecOps helped us reduce critical incidents by 68% within a quarter.”
          </blockquote>
          <p className="mt-1 text-sm font-semibold" style={{ color: COLORS.red }}>— Dana Ruiz, CIO at Nimbus Group</p>
        </div>

        {/* Final CTA strip */}
        <div className="mt-14 rounded-lg px-6 py-10 text-center" style={{ background: '#F9FAFB' }}>
          <p className="text-xl font-semibold" style={{ color: COLORS.text }}>
            Ready to harden your enterprise against tomorrow’s threats?
          </p>
          <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold" style={{ background: COLORS.greyyellow, color: COLORS.text }}>
            Book a Security Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
