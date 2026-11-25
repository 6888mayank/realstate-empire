import { useState, type FormEvent } from 'react';
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { PROPERTY_TYPES, PLACEHOLDER_LOCATIONS, CORPORATE_OFFICE } from '@/data/constants';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury architecture"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-900/85 to-navy-900" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="dark"
          eyebrow="Contact & Corporate Office"
          title="Connect with Our Gurugram Advisory Team"
          subtitle="Visit our corporate office in Sector 69, Gurugram or connect with our advisors for curated residential, commercial and investment opportunities."
          align="center"
          className="mx-auto"
        />

        {/* Operational Scope Banner */}
        <div className="mx-auto mt-6 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Currently Operational in Gurugram (Delhi-NCR) • Expanding Soon Pan-India
          </span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-600/40 bg-navy-800/70 p-7 backdrop-blur-md lg:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="text-gold-300" size={56} />
                  <h3 className="mt-5 font-serif text-2xl text-ivory">Enquiry Received</h3>
                  <p className="mt-3 max-w-sm text-sm text-mist">
                    Thank you for reaching out to AVYAAVATI REALTORS. A member of our Gurugram advisory team
                    will be in contact with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-gold-300/40 px-5 py-2.5 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-300/10"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your full name" required />
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <Field label="Email Address" name="email" type="email" placeholder="you@example.com" required />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label="Interested Property Type"
                      name="type"
                      options={['Select type', ...PROPERTY_TYPES]}
                    />
                    <SelectField
                      label="Preferred Location"
                      name="location"
                      options={['Select location', ...PLACEHOLDER_LOCATIONS, 'Other']}
                    />
                  </div>

                  <SelectField
                    label="Budget"
                    name="budget"
                    options={[
                      'Select budget',
                      '₹1 Cr – ₹3 Cr',
                      '₹3 Cr – ₹7 Cr',
                      '₹7 Cr – ₹15 Cr',
                      'Above ₹15 Cr',
                    ]}
                  />

                  <div>
                    <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-gold-300">
                      Message / Requirement Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us what you are looking for in Gurugram (Sector 69, SPR, Golf Course Ext, etc.)..."
                      className="w-full resize-none rounded-lg border border-navy-600/60 bg-navy-700/70 px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-mist/40 focus:border-gold-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-300 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.4)] sm:w-auto"
                  >
                    Submit Enquiry
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {[
                {
                  icon: MapPin,
                  label: 'Corporate Office',
                  value: CORPORATE_OFFICE.fullAddress,
                  href: '#contact',
                  highlight: true,
                },
                {
                  icon: Phone,
                  label: 'Call Our Advisors',
                  value: '+91 98100 00000',
                  href: 'tel:+919810000000',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp Desk',
                  value: '+91 98100 00000',
                  href: 'https://wa.me/919810000000',
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'contact@avyaavati.com',
                  href: 'mailto:contact@avyaavati.com',
                },
              ].map(({ icon: Icon, label, value, href, highlight }) => (
                <a
                  key={label}
                  href={href}
                  className={`group flex items-start gap-4 rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 ${
                    highlight
                      ? 'border-gold-300/40 bg-navy-800/90 hover:border-gold-300 hover:bg-navy-700/70'
                      : 'border-navy-600/40 bg-navy-800/60 hover:border-gold-300/40 hover:bg-navy-700/50'
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300 transition-all duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                      {label}
                    </div>
                    <div className="mt-1 text-sm text-ivory leading-relaxed">{value}</div>
                    {highlight && (
                      <div className="mt-1.5 text-[11px] font-medium text-emerald-400">
                        Operational Headquarters • Gurugram
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-gold-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-navy-600/60 bg-navy-700/70 px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-mist/40 focus:border-gold-300"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-gold-300">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-lg border border-navy-600/60 bg-navy-700/70 px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold-300"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-navy-800">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
