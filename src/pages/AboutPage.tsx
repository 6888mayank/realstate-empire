import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Target, Users, CheckCircle, PhoneCall } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ClientJourney } from '@/components/ClientJourney';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export function AboutPage() {
  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="About Our Firm"
        title="Trust, Transparency & Enduring Value"
        subtitle="AVYAAVATI REALTORS PRIVATE LIMITED was founded on the fundamental premise that real estate decisions demand complete clarity, rigorous due diligence, and ethical advisory."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Philosophy & Story */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural home"
                  className="h-[34rem] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 hidden rounded-2xl border border-navy-700 bg-navy-900 p-8 text-ivory shadow-2xl sm:block">
                <div className="font-serif text-5xl text-gold-gradient">100%</div>
                <div className="mt-2 max-w-[12rem] text-xs font-semibold uppercase tracking-widest text-mist">
                  Commitment to Transparent Real Estate Guidance
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Our Genesis &amp; Philosophy
                </span>
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-navy-800 sm:text-5xl">
                Redefining the Property Advisory Experience
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-700/80">
                <p>
                  At <strong>AVYAAVATI REALTORS PRIVATE LIMITED</strong>, we recognize that property
                  acquisition is far more than a financial transaction — it is the cornerstone of
                  generational family wealth, business security, and lifestyle aspirations.
                </p>
                <p>
                  Traditional property markets can often feel fragmented and opaque. Our mission is to
                  bring institutional-grade transparency, objective analysis, and client-first ethics
                  to every individual and corporate client we advise.
                </p>
                <p>
                  Whether identifying high-growth plotted lands, luxury sky residences, or Grade-A
                  commercial headquarters, our recommendations are rooted in exhaustive title checks,
                  infrastructure vetting, and realistic market valuation.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Strict Title & Regulatory Verification',
                  'Zero Fabricated Assurances',
                  'Client-Centric Portfolio Matching',
                  'Post-Transaction Support & Documentation',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
                    <CheckCircle size={18} className="shrink-0 text-gold-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Pillars */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="dark"
            eyebrow="Core Values"
            title="The Principles That Steer Every Recommendation"
            subtitle="Four cornerstones that define our conduct, advisory rigor, and client partnerships."
            align="center"
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Uncompromised Transparency',
                desc: 'Every fee, title detail, timeline, and risk factor is articulated with complete honesty upfront.',
              },
              {
                icon: Award,
                title: 'Curated Rigor',
                desc: 'We filter out 80% of opportunities to present only projects backed by certified titles and sound fundamentals.',
              },
              {
                icon: Target,
                title: 'Value Preservation',
                desc: 'We prioritize capital security, livability, and long-term liquidity over short-term market hype.',
              },
              {
                icon: Users,
                title: 'Relationship Longevity',
                desc: 'Our advisory partnership extends far beyond closing, supporting clients across generations.',
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-700/50 bg-navy-800/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-gold-300/40 hover:bg-navy-700/50">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300">
                    <pillar.icon size={26} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ivory">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Client Journey */}
      <ClientJourney />

      {/* Direct Contact CTA */}
      <section className="relative overflow-hidden bg-navy-900 py-20">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-gold-300/20 bg-gradient-to-r from-navy-800 via-navy-700/60 to-navy-800 p-10 lg:p-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Begin Your Property Journey
              </span>
              <h2 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl lg:text-5xl">
                Ready to Experience a Better Way in Real Estate?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                Whether you have an immediate requirement or are exploring portfolio opportunities for
                the coming quarters, our advisors are at your service.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.4)]"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+910000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-500 bg-navy-800/80 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-gold-300/40 hover:text-gold-300"
                >
                  <PhoneCall size={16} />
                  Direct Advisory Line
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
