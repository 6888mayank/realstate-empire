import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { PROPERTY_TYPES, PLACEHOLDER_LOCATIONS, CORPORATE_OFFICE } from '@/data/constants';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const FAQS = [
    {
      q: 'Where is AVYAAVATI REALTORS based and currently operating?',
      a: `Our corporate office is located at ${CORPORATE_OFFICE.fullAddress}. We are currently actively operating across Gurugram and Delhi-NCR (specializing in Sector 69, SPR, Golf Course Extension Road, Dwarka Expressway, and Cyber City). Expansion to other major Indian metros is part of our strategic roadmap.`,
    },
    {
      q: 'Can I visit your corporate office in Sector 69, Gurugram for a consultation?',
      a: 'Yes, absolutely. Clients and family offices are welcome to schedule a personal consultation at our corporate office in Tulip Purple, Sector 69, Gurgaon. We request booking an appointment in advance so a dedicated senior consultant can prepare your customized market report.',
    },
    {
      q: 'Do you charge a fee for initial property discovery & requirement mapping?',
      a: 'No. Initial requirement mapping, market evaluations, and preliminary project shortlists are completely complimentary and conflict-free.',
    },
    {
      q: 'How do you verify the legal title of properties in Gurugram?',
      a: 'Every property presented undergoes an exhaustive title and HRERA verification by empanelled real estate advocates, confirming clear unencumbered titles, DTCP approvals, and verified occupancy certificates.',
    },
  ];

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Corporate Office & Contact"
        title="Start Your Real Estate Conversation"
        subtitle="Connect with our advisory desk or visit our corporate office in Sector 69, Gurugram for transparent and verified real estate guidance."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Form and Direct Contact Cards */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-navy-700/80 bg-navy-800/80 p-8 shadow-2xl backdrop-blur-md sm:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Operational in Gurugram (Delhi-NCR)
                  </div>

                  <h2 className="mt-3 font-serif text-3xl text-ivory sm:text-4xl">
                    Share Your Property Requirements
                  </h2>
                  <p className="mt-2 text-sm text-mist">
                    Fill in your details below and a senior property consultant from our Gurugram office will reach out within 24 hours.
                  </p>

                  {submitted ? (
                    <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-gold-300/30 bg-navy-900/60 py-16 text-center">
                      <CheckCircle2 className="text-gold-300" size={60} />
                      <h3 className="mt-5 font-serif text-3xl text-ivory">Enquiry Successfully Received</h3>
                      <p className="mt-3 max-w-md text-sm text-mist">
                        Thank you for reaching out to AVYAAVATI REALTORS. One of our dedicated client advisors
                        from our Sector 69, Gurugram office will connect with you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 rounded-full border border-gold-300/40 px-6 py-2.5 text-xs font-semibold text-gold-300 transition-colors hover:bg-gold-300/10"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300 placeholder:text-mist/40"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300 placeholder:text-mist/40"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300 placeholder:text-mist/40"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Preferred Location
                          </label>
                          <select className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300">
                            <option value="">Select Target Corridor</option>
                            {PLACEHOLDER_LOCATIONS.map((loc) => (
                              <option key={loc} value={loc} className="bg-navy-800">
                                {loc}
                              </option>
                            ))}
                            <option value="Other" className="bg-navy-800">Other Location</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Property Interest Type
                          </label>
                          <select className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300">
                            <option value="">Select Property Type</option>
                            {PROPERTY_TYPES.map((t) => (
                              <option key={t} value={t} className="bg-navy-800">
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                            Budget Range
                          </label>
                          <select className="w-full rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300">
                            <option value="">Select Budget</option>
                            <option value="1 Cr - 3 Cr" className="bg-navy-800">₹1 Cr – ₹3 Cr</option>
                            <option value="3 Cr - 7 Cr" className="bg-navy-800">₹3 Cr – ₹7 Cr</option>
                            <option value="7 Cr - 15 Cr" className="bg-navy-800">₹7 Cr – ₹15 Cr</option>
                            <option value="Above 15 Cr" className="bg-navy-800">Above ₹15 Cr</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                          Specific Requirements or Notes
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us what you are looking for: possession timeline, preferred Gurugram corridor (Sector 69, SPR, Golf Course Ext), amenities..."
                          className="w-full resize-none rounded-xl border border-navy-600 bg-navy-700/60 px-4 py-3 text-sm text-ivory outline-none focus:border-gold-300 placeholder:text-mist/40"
                        />
                      </div>

                      <div className="flex items-center gap-2 text-xs text-mist/80">
                        <ShieldCheck size={16} className="text-gold-300 shrink-0" />
                        <span>Your contact details are strictly confidential. We never spam.</span>
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.4)] sm:w-auto"
                      >
                        Submit Enquiry
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Direct Contact Cards & Information */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              <Reveal delay={100} className="space-y-4">
                {/* Corporate Office Card */}
                <div className="rounded-2xl border border-gold-300/40 bg-navy-800/90 p-6 shadow-xl backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-gold-300 font-semibold">Corporate Office</span>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300 uppercase">
                          Operational HQ
                        </span>
                      </div>
                      <div className="mt-1.5 font-serif text-xl text-ivory">AVYAAVATI REALTORS PVT LTD</div>
                      <div className="text-xs text-mist mt-2 leading-relaxed font-sans">
                        {CORPORATE_OFFICE.flatNo}, {CORPORATE_OFFICE.tower}, {CORPORATE_OFFICE.society},
                        <br />
                        {CORPORATE_OFFICE.sector}, {CORPORATE_OFFICE.city} - {CORPORATE_OFFICE.pincode}, {CORPORATE_OFFICE.state}.
                      </div>
                      <div className="mt-2 text-[11px] text-gold-300/90">
                        Operational focus: Gurugram &amp; Delhi-NCR
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-700/80 bg-navy-800/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-mist/60">Phone Support</div>
                      <div className="mt-1 font-serif text-xl text-ivory">+91 98100 00000</div>
                      <div className="text-xs text-mist mt-1">Mon – Sat, 9:30 AM to 7:00 PM IST</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-700/80 bg-navy-800/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-mist/60">WhatsApp Concierge</div>
                      <div className="mt-1 font-serif text-xl text-ivory">+91 98100 00000</div>
                      <div className="text-xs text-mist mt-1">Direct property brochures &amp; site visit booking</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-700/80 bg-navy-800/80 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-mist/60">Email Inquiries</div>
                      <div className="mt-1 font-serif text-xl text-ivory">contact@avyaavati.com</div>
                      <div className="text-xs text-mist mt-1">Prompt replies within 24 hours</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Consultation Promise */}
              <div className="rounded-2xl border border-gold-300/20 bg-gold-300/5 p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
                  <Clock size={16} /> Our Service Commitment
                </div>
                <p className="mt-2 text-xs leading-relaxed text-mist">
                  We assign a single dedicated property advisor to your requirement, ensuring no
                  repetitive calls, zero aggressive sales pitches, and complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-ivory py-24 text-navy-900 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Advisory FAQs"
            title="Frequently Asked Questions"
            subtitle="Clear answers about our Gurugram operations, consultation process, and client services."
            align="center"
          />

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-serif text-xl text-navy-800"
                >
                  <span>{faq.q}</span>
                  <span className="text-gold-600 ml-4 font-sans text-xl">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="border-t border-navy-50 px-6 pb-6 pt-2 text-sm leading-relaxed text-navy-700/75">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
