import React, { useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, AlertCircle, ChevronRight } from 'lucide-react';

const COLORS = {
  white: '#FFFFFF',
  text: '#555555',
  textLight: '#777777',
  greyyellow: '#B0B596',
  greyyellowAlt: '#CCCC99',
  red: '#CC0000',
};

function ThreatIndicator({ compact = false }) {
  const [status, setStatus] = useState('optimal'); // 'optimal' | 'scanning' | 'threat'
  const [glow, setGlow] = useState(false);

  const handleInteract = () => {
    if (status === 'scanning') return;
    setStatus('scanning');
    setGlow(false);
    setTimeout(() => {
      const next = Math.random() > 0.7 ? 'threat' : 'optimal';
      setStatus(next);
      setGlow(next === 'threat');
    }, 1400);
  };

  const label = useMemo(() => {
    switch (status) {
      case 'scanning':
        return 'Scanning...';
      case 'threat':
        return 'Threat Detected!';
      default:
        return 'System Status: Optimal';
    }
  }, [status]);

  return (
    <button
      onMouseEnter={handleInteract}
      onClick={handleInteract}
      className="group rounded-md transition-all duration-300"
      style={{
        background: COLORS.white,
        border: `1px solid ${COLORS.greyyellow}`,
        boxShadow: glow
          ? `0 0 0 2px ${COLORS.greyyellow}, 0 0 24px 4px ${COLORS.red}`
          : `0 0 0 2px ${COLORS.greyyellow}`,
      }}
      aria-label={`Threat indicator: ${label}`}
    >
      <div className={`flex items-center gap-3 px-4 ${compact ? 'py-2' : 'py-3'}`}>
        <div
          className="flex items-center justify-center rounded-sm shrink-0"
          style={{
            width: compact ? 24 : 32,
            height: compact ? 24 : 32,
            background: COLORS.greyyellow,
          }}
        >
          {status === 'threat' ? (
            <AlertCircle size={compact ? 16 : 20} color={COLORS.red} />
          ) : (
            <Shield size={compact ? 16 : 20} color={COLORS.white} />
          )}
        </div>
        <div className="text-left">
          <p
            className={`leading-tight ${compact ? 'text-sm' : 'text-base'}`}
            style={{ color: status === 'threat' ? COLORS.red : COLORS.text }}
          >
            {label}
          </p>
          <p className="text-xs" style={{ color: COLORS.textLight }}>
            {status === 'scanning' ? 'Analyzing network vectors' : 'Tap or hover to rescan'}
          </p>
        </div>
      </div>
      {status === 'threat' && (
        <div className="h-1 w-full" style={{ background: COLORS.red }} />
      )}
    </button>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div
              className="h-7 w-7 rounded-sm flex items-center justify-center"
              style={{ background: COLORS.greyyellow }}
            >
              <Shield size={18} color={COLORS.white} />
            </div>
            <span className="font-semibold tracking-wide" style={{ color: COLORS.text }}>
              Aegis SecOps
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8" style={{ color: COLORS.text }}>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md px-4 py-2 font-medium"
              style={{ background: COLORS.greyyellow, color: COLORS.text }}
            >
              Request Audit
              <ChevronRight className="ml-1" size={18} />
            </a>
          </nav>
        </div>
      </div>

      {/* Hero split */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          {/* Left copy */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: COLORS.text }}>
              Building a <span style={{ color: COLORS.greyyellow }}>Future</span> of Vigilant, Premium Security
            </h1>
            <p className="mt-4 text-lg" style={{ color: COLORS.textLight }}>
              Enterprise-grade protection engineered for modern threats. We design, harden, and defend your digital and physical domains 24/7.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#services"
                className="rounded-md px-6 py-3 font-semibold"
                style={{ background: COLORS.greyyellow, color: COLORS.text }}
              >
                Explore Solutions
              </a>
              <a href="#about" className="font-semibold" style={{ color: COLORS.red }}>
                Why Aegis?
              </a>
            </div>

            {/* Who we are */}
            <div className="mt-10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-sm flex items-center justify-center" style={{ background: COLORS.greyyellow }}>
                  <Shield size={14} color={COLORS.white} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: COLORS.text }}>Who We Are</h3>
                  <p className="text-sm" style={{ color: COLORS.textLight }}>
                    A global security agency combining elite human expertise and advanced telemetry to continuously reduce risk across your enterprise.
                  </p>
                  <a href="#about" className="text-sm font-semibold" style={{ color: COLORS.red }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-[420px] w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/80" />
            <Spline
              scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Overlay accents */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute right-4 top-4">
              <ThreatIndicator compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ThreatIndicator };