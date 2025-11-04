import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

const COLORS = {
  text: '#555555',
  textLight: '#777777',
  greyyellow: '#B0B596',
  red: '#CC0000',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name) nextErrors.name = 'Name is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'A valid email is required';
    if (!form.message) nextErrors.message = 'Please include a brief message';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-3xl font-bold" style={{ color: COLORS.text }}>Get in Touch</h2>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-lg border bg-white p-6" style={{ borderColor: '#EAEAEA' }}>
              {submitted ? (
                <div className="rounded-md p-4" style={{ background: '#F0FDF4', color: COLORS.text }}>
                  Thank you — our team will reach out shortly.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Name</label>
                      <input
                        className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring"
                        style={{ borderColor: '#D1D5DB' }}
                        placeholder="Your full name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: COLORS.red }}>
                          <AlertCircle size={14} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Email</label>
                      <input
                        className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring"
                        style={{ borderColor: '#D1D5DB' }}
                        placeholder="name@company.com"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: COLORS.red }}>
                          <AlertCircle size={14} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium" style={{ color: COLORS.text }}>Message</label>
                    <textarea
                      className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring"
                      style={{ borderColor: '#D1D5DB' }}
                      rows={5}
                      placeholder="What can we help you secure?"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                    />
                    {errors.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: COLORS.red }}>
                        <AlertCircle size={14} /> {errors.message}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="mt-4 rounded-md px-6 py-3 font-semibold" style={{ background: COLORS.greyyellow, color: COLORS.text }}>
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="rounded-lg border p-6" style={{ borderColor: '#EAEAEA' }}>
              <div className="flex items-center gap-2 font-semibold" style={{ color: COLORS.text }}>
                <Phone size={18} /> +1 (212) 555-0147
              </div>
              <div className="mt-2 flex items-center gap-2" style={{ color: COLORS.textLight }}>
                <Mail size={16} /> contact@aegis-secops.com
              </div>
              <div className="mt-2 flex items-center gap-2" style={{ color: COLORS.textLight }}>
                <MapPin size={16} /> 545 Lexington Ave, New York, NY
              </div>
              <div className="mt-2 flex items-center gap-2" style={{ color: COLORS.textLight }}>
                <Clock size={16} /> Mon–Fri, 8:00–18:00 (EST)
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.red }}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: COLORS.red }} /> Primary incident hotline available 24/7
              </div>
            </div>

            {/* Map with red pin */}
            <div className="relative h-56 w-full overflow-hidden rounded-lg border" style={{ borderColor: '#EAEAEA' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100" />
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border" style={{ borderColor: '#E5E7EB' }} />
                ))}
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin size={32} color={COLORS.red} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
