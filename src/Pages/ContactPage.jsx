import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
//  ⚙️  EMAILJS SETUP — do this once (takes ~5 minutes):
//
//  1. Sign up free at https://www.emailjs.com
//  2. Add Email Service → choose Gmail → connect isnehadev26@gmail.com
//     Copy the Service ID  →  paste into EMAILJS_SERVICE_ID below
//  3. Create Email Template → set "To Email" = isnehadev26@gmail.com
//     Add these variables in the template body:
//       Name: {{from_name}}
//       Email: {{from_email}}
//       Subject: {{subject}}
//       Message: {{message}}
//     Copy the Template ID  →  paste into EMAILJS_TEMPLATE_ID below
//  4. Go to Account → API Keys → copy Public Key
//     Paste into EMAILJS_PUBLIC_KEY below
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_bannjno';
const EMAILJS_TEMPLATE_ID = 'template_olai9ko';
const EMAILJS_PUBLIC_KEY  = 'N8utcAJv9WW7o7aVX';

/* ─── Vertical grid lines ─── */
const VerticalGridLines = ({ variant = 'dark' }) => {
  const cols = ['left-[5%]','left-[20%]','left-[35%]','left-[50%]','left-[65%]','left-[80%]','left-[95%]'];
  const color = variant === 'light' ? 'bg-white/[0.04]' : 'bg-black/[0.06]';
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cols.map((pos, i) => (
        <div key={i} className={`absolute top-0 bottom-0 w-px ${color} ${pos}`} />
      ))}
    </div>
  );
};

/* ─── Magnetic button ─── */
const useMagnetic = (strength = 0.35) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [strength]);
  return ref;
};

/* ─── Floating label field ─── */
const Field = ({ label, type = 'text', name, isTextarea, value, onChange }) => {
  const [focused, setFocused] = useState(false);
  const base =
    'w-full bg-transparent border-b border-white/20 pt-6 pb-3 text-white text-base md:text-lg ' +
    'placeholder-transparent focus:outline-none transition-colors duration-300 focus:border-white resize-none';
  const lifted = focused || !!value;

  return (
    <div className="relative group">
      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none
          ${lifted
            ? 'top-0 text-[0.65rem] tracking-[0.2em] uppercase text-gray-400'
            : 'top-5 text-base text-white/40'
          }`}
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name} name={name} rows={4} value={value} onChange={onChange}
          className={base}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          id={name} name={name} type={type} value={value} onChange={onChange}
          className={base}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      <div className="absolute bottom-0 left-0 h-px bg-white w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
    </div>
  );
};

/* ════════════════════════════════════════════════════ */
const ContactPage = () => {
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const formRef    = useRef(null);
  const infoRef    = useRef(null);
  const sendBtnRef = useMagnetic(0.4);

  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  /* GSAP animations */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current?.querySelectorAll('.char-row'),
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'expo.out', delay: 0.1 }
      );
      gsap.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        formRef.current?.querySelectorAll('.field-wrap'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 80%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  /* ── EmailJS send ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    gsap.to(sendBtnRef.current, { scale: 0.93, duration: 0.1, yoyo: true, repeat: 1 });
    setStatus('sending');

    try {
      // Lazy-load EmailJS SDK — no npm install required
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || '(No subject)',
          message:    form.message,
          to_email:   'isnehadev26@gmail.com',
        }
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#01010e] text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden px-[5%] pb-16 md:pb-24">
        <VerticalGridLines variant="light" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

        <div ref={headingRef} className="relative z-10 max-w-[1920px] mx-auto w-full pt-32 md:pt-40">
          <div className="overflow-hidden">
            <h1 className="char-row font-bold uppercase tracking-[4px] leading-none text-[clamp(3.5rem,13vw,13rem)] text-white">
              GET IN
            </h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-6 md:gap-10">
            <h1 className="char-row font-bold uppercase tracking-[4px] leading-none text-[clamp(3.5rem,13vw,13rem)] text-white">
              TOUCH
            </h1>
            <span className="char-row hidden md:block w-24 lg:w-40 h-[3px] bg-white mb-4 flex-shrink-0" />
          </div>
          <p ref={subRef} className="mt-6 md:mt-8 text-white/40 text-sm md:text-base uppercase tracking-[0.25em] max-w-xs">
            Let's build something together
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="relative px-[5%] py-16 md:py-24 lg:py-32 max-w-[1920px] mx-auto">
        <VerticalGridLines variant="light" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* LEFT — Info */}
          <div ref={infoRef} className="flex flex-col gap-12 lg:gap-16">

            <div className="info-item space-y-4">
              <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500">Email</h3>
              <a href="mailto:isnehadev26@gmail.com"
                className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-base md:text-lg">
                <span className="w-0 group-hover:w-5 h-px bg-white transition-all duration-300" />
                isnehadev26@gmail.com
              </a>
            </div>

      

            <div className="info-item space-y-4">
              <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500">Social</h3>
              <div className="flex flex-col gap-3">
                {[
                  { href: 'https://www.instagram.com/un_forggetable?igsh=bjdtNXRpeWFlcnlv&utm_source=qr', label: 'Instagram' },
                  { href: 'https://www.linkedin.com/in/isneha-manandhar-19a18a339/', label: 'LinkedIn' },
                  { href: 'https://github.com/isneha-cyber', label: 'Github' },
                ].map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-base md:text-lg">
                    <span className="w-0 group-hover:w-5 h-px bg-white transition-all duration-300" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="info-item space-y-4">
              <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500">Location</h3>
              <p className="text-white/70 text-base md:text-lg">Pokhara, Nepal</p>
            </div>

            <div className="info-item space-y-3">
              <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500">Availability</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-60" />
                </div>
                <p className="text-white/70 text-base md:text-lg">Open for projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div ref={formRef}>
            {status === 'success' ? (
              <div className="flex flex-col items-start justify-center h-full gap-6 py-16">
                <div className="text-5xl md:text-7xl font-bold uppercase tracking-[4px] leading-tight">
                  Message<br />Sent ✓
                </div>
                <p className="text-white/40 text-sm uppercase tracking-widest">
                  I'll reply soon at isnehadev26@gmail.com
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300 border-b border-white/20 pb-1"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>

                <div className="field-wrap">
                  <Field label="Your Name *" name="name" value={form.name} onChange={handleChange} />
                </div>
                <div className="field-wrap">
                  <Field label="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} />
                </div>
                <div className="field-wrap">
                  <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                </div>
                <div className="field-wrap">
                  <Field label="Message *" name="message" isTextarea value={form.message} onChange={handleChange} />
                </div>

                {/* Inline status */}
                <div className="field-wrap min-h-[1.5rem]">
                  {status === 'sending' && (
                    <p className="text-sm uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">
                      Sending your message…
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm uppercase tracking-widest text-red-400 border-b border-red-500/30 pb-1">
                      Something went wrong — please try again or email directly.
                    </p>
                  )}
                </div>

                {/* Send button */}
                <div className="field-wrap flex justify-start">
                  <button
                    ref={sendBtnRef}
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/20 px-8 py-4 md:px-12 md:py-5 uppercase tracking-[0.2em] text-sm text-white transition-colors duration-300 hover:border-white disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </span>
                    <span className="relative z-10 w-0 group-hover:w-6 h-px bg-black transition-all duration-500 ease-out" />
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="relative overflow-hidden border-t border-white/10 py-6 md:py-8">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white/10 text-2xl md:text-4xl font-bold uppercase tracking-[8px] flex-shrink-0">
              Isneha Manandhar — Fullstack Developer — Pokhara, Nepal — Let's Chat —&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 28s linear infinite; }
      `}</style>
    </div>
  );
};

export default ContactPage;