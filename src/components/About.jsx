import React from 'react';
import { Award, Users, Timeline, Shield, Star } from 'lucide-react';
import { ThreatIndicator } from './Hero';

const COLORS = {
  text: '#555555',
  textLight: '#777777',
  greyyellow: '#B0B596',
  red: '#CC0000',
};

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-3xl font-bold" style={{ color: COLORS.text }}>Our Legacy & Commitment</h2>
        <p className="mt-2 max-w-2xl" style={{ color: COLORS.textLight }}>
          For over two decades, Aegis SecOps has safeguarded critical infrastructure and high-value assets with a blend of rigorous methodology and cutting-edge technology.
        </p>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { k: '26+ Years', v: 'Operational Excellence' },
            { k: '500+ Audits', v: 'Global Enterprises' },
            { k: '68%↓', v: 'Incident Reduction' },
            { k: '24/7', v: 'Active Monitoring' },
          ].map((m) => (
            <div key={m.k} className="rounded-md border p-4 text-center" style={{ borderColor: '#EAEAEA' }}>
              <div className="text-2xl font-extrabold" style={{ color: COLORS.greyyellow }}>{m.k}</div>
              <div className="text-xs" style={{ color: COLORS.textLight }}>{m.v}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold" style={{ color: COLORS.text }}>Professional Team</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['J. Hart', 'M. Singh', 'A. Rivera', 'K. Chen'].map((person) => (
              <div key={person} className="rounded-md border p-4 text-center" style={{ borderColor: '#EAEAEA' }}>
                <div className="mx-auto mb-3 h-16 w-16 rounded-full" style={{ background: COLORS.greyyellow }} />
                <div className="font-semibold" style={{ color: COLORS.text }}>{person}</div>
                <div className="text-xs" style={{ color: COLORS.textLight }}>Principal Consultant</div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-md border p-6" style={{ borderColor: '#EAEAEA' }}>
            <h4 className="font-semibold" style={{ color: COLORS.text }}>Awards & Certifications</h4>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {['ISO 27001', 'SOC 2 Type II', 'CREST', 'CIS Benchmarks'].map((a) => (
                <span key={a} className="rounded-md border px-3 py-1 text-xs font-medium" style={{ borderColor: COLORS.greyyellow, color: COLORS.text }}>{a}</span>
              ))}
            </div>
            <p className="mt-3 text-sm" style={{ color: COLORS.textLight }}>
              Recognized for excellence by independent bodies and industry consortiums.
            </p>
          </div>

          {/* Threat Indicator Close-Up */}
          <div className="rounded-md border p-6" style={{ borderColor: '#EAEAEA' }}>
            <h4 className="font-semibold" style={{ color: COLORS.text }}>Dynamic Threat Indicator (Close-Up)</h4>
            <p className="mt-1 text-sm" style={{ color: COLORS.textLight }}>
              Hover or tap to see transitions from Optimal to Scanning, and potential Threat Detected with a vivid red pulsating glow.
            </p>
            <div className="mt-4">
              <ThreatIndicator compact={false} />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10">
          <h4 className="font-semibold" style={{ color: COLORS.text }}>Milestones</h4>
          <div className="mt-4 space-y-4">
            {[
              { y: '1998', t: 'Founded by former national cyber response leaders' },
              { y: '2010', t: 'Global SOC network established' },
              { y: '2018', t: 'Launched MDR with ML-assisted triage' },
              { y: '2024', t: 'Expanded physical-digital convergence services' },
            ].map((i) => (
              <div key={i.y} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full" style={{ background: COLORS.greyyellow }} />
                <div>
                  <div className="text-sm font-semibold" style={{ color: COLORS.text }}>{i.y}</div>
                  <div className="text-sm" style={{ color: COLORS.textLight }}>{i.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { n: 'Orion Capital', q: 'Rock-solid partners who respond faster than we can brief.' },
            { n: 'Vertex Labs', q: 'Expertise that translates into measurable resilience.' },
          ].map((t) => (
            <div key={t.n} className="rounded-md border bg-white p-6" style={{ borderColor: '#EAEAEA' }}>
              <p className="italic" style={{ color: COLORS.textLight }}>
                “{t.q}”
              </p>
              <p className="mt-2 text-sm font-semibold" style={{ color: COLORS.red }}>— {t.n}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
