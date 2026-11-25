import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ClientJourney } from '@/components/ClientJourney';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { ALL_PROPERTIES, ALL_LOCATIONS, ALL_INSIGHTS } from '@/data/mockData';
import { CORPORATE_OFFICE } from '@/data/constants';

export function HomePage() {
  const featuredResidential = ALL_PROPERTIES.filter((p) => p.category === 'residential').slice(0, 3);
  const featuredCommercial = ALL_PROPERTIES.filter((p) => p.category === 'commercial').slice(0, 2);
  const topInsights = ALL_INSIGHTS.slice(0, 3);
  const topLocations = ALL_LOCATIONS.slice(0, 3);

  return (
    <div className="min-h-screen bg-navy-800">
      {/* 1. Hero */}
      <Hero />

      {/* Gurugram Corporate Operational Banner */}
      <div className="border-b border-navy-700/60 bg-navy-900 py-3.5">
        <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-4 px-5 text-xs lg:px-10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-ivory">Active Operations:</span>
            <span className="text-mist">Gurugram (Sector 69, SPR, Golf Course Ext, Dwarka Expressway)</span>
          </div>
          <div className="flex items-center gap-2 text-gold-300">
            <MapPin size={14} className="text-emerald-400" />
            <span className="font-medium">Corporate Office: {CORPORATE_OFFICE.fullAddress}</span>
          </div>
        </div>
      </div>

      {/* 2. Quick Discovery Banner */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Explore Portfolio"
            title="Discover Real Estate Across Every Category"
            subtitle="Thoughtfully curated property opportunities across residential homes, enterprise spaces, and capital investments."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Residential Homes',
                subtitle: 'Luxury Apartments, Villas & Plots in Gurugram',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
                link: '/residential',
                count: 'Active in Sector 69 & SPR',
              },
              {
                title: 'Commercial Spaces',
                subtitle: 'Corporate Offices, IT Parks & Retail Shops',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
                link: '/commercial',
                count: 'Cyber City & Golf Course Rd',
              },
              {
                title: 'Investment Advisory',
                subtitle: 'Pre-Leased Commercial & Growth Land',
                image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1000&q=80',
                link: '/investment',
                count: '8-9% Annual Yield Assets',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <Link
                  to={card.link}
                  className="group relative block h-80 overflow-hidden rounded-3xl shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="rounded-full bg-navy-900/80 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
                      {card.count}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-ivory group-hover:text-gold-200 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs text-mist">{card.subtitle}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300">
                      View Properties <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us Preview Section */}
      <section className="bg-navy-900 py-24 lg:py-32 border-y border-navy-700/60">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern residence"
                  className="h-[30rem] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-800/95 p-5 text-ivory shadow-2xl border border-navy-700 sm:flex flex-col items-center text-center backdrop-blur-md max-w-xs">
                <img
                  src="/logo-gold.png"
                  alt="AVYAAVATI REALTORS"
                  className="h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(224,176,100,0.3)]"
                />
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-gold-300">
                  Fostering Trust, Transparency &amp; Value
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-300" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  About AVYAAVATI REALTORS
                </span>
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-ivory sm:text-5xl">
                A Vision Built on Trust.
                <br />A Journey Guided by Value.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-mist">
                <p>
                  AVYAAVATI REALTORS PRIVATE LIMITED was founded on the fundamental principle that
                  property acquisition deserves clarity, verified data, and ethical advisory.
                </p>
                <p>
                  Operating actively from our corporate headquarters at <strong>Tulip Purple, Sector 69, Gurugram</strong>,
                  we provide clients with verified title due diligence, RERA compliance, and objective price negotiations across
                  Gurugram and Delhi-NCR.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-200"
                >
                  Explore Full Company Story
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-600 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:border-gold-300/40 hover:text-gold-300"
                >
                  Visit Gurugram Office
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Residential Preview */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              theme="light"
              eyebrow="Residential Spotlight"
              title="Signature Homes & Residential Estates in Gurugram"
              subtitle="Curated living spaces in Sector 69, Golf Course Extension Road, and Southern Peripheral Road."
            />
            <Link
              to="/residential"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-ivory transition-all hover:bg-navy-700"
            >
              View All Residential Properties
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredResidential.map((prop, idx) => (
              <Reveal key={prop.id} delay={idx * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-900/80 px-3 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur-sm">
                      {prop.status}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-gold-300">
                      {prop.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-serif text-2xl text-navy-800 group-hover:text-gold-600 transition-colors">
                        {prop.name}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-navy-700/60">
                        <MapPin size={13} className="text-gold-600" />
                        <span>{prop.location}</span>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-navy-700/70 line-clamp-2">
                        {prop.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4">
                      <div className="font-serif text-lg font-semibold text-navy-800">
                        {prop.price}
                      </div>
                      <Link
                        to="/residential"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700"
                      >
                        Details <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Commercial Preview */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              theme="dark"
              eyebrow="Commercial Spotlight"
              title="Commercial Spaces. Bigger Possibilities."
              subtitle="Grade-A office towers, retail promenades, and corporate IT parks across Cyber City and SPR Gurugram."
            />
            <Link
              to="/commercial"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-6 py-3 text-sm font-semibold text-gold-300 transition-all hover:bg-gold-300/10"
            >
              Explore Commercial Spaces
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {featuredCommercial.map((prop, idx) => (
              <Reveal key={prop.id} delay={idx * 100}>
                <div className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-800/80 transition-all hover:border-gold-300/40 hover:shadow-2xl">
                  <div className="relative h-60 sm:h-auto sm:w-2/5 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                        {prop.type}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                        {prop.name}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-mist">
                        <MapPin size={13} className="text-gold-300" />
                        <span>{prop.location}</span>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-mist line-clamp-2">
                        {prop.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-navy-700/60 pt-4">
                      <div className="font-serif text-lg font-semibold text-gold-300">
                        {prop.price}
                      </div>
                      <Link
                        to="/commercial"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-ivory hover:text-gold-300"
                      >
                        Explore Commercial <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Investment Preview */}
      <section className="bg-ivory py-24 lg:py-32 text-navy-900">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="rounded-3xl border border-navy-700/10 bg-white p-8 shadow-xl lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Strategic Capital Allocation
                </span>
                <h2 className="mt-3 font-serif text-3xl text-navy-800 sm:text-4xl">
                  High-Yield Pre-Leased Commercial Assets in Gurugram
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                  Real estate investments must generate sustainable yield while protecting principal capital.
                  We curate pre-leased commercial offices with MNC tenants offering 8–9% net yields, and
                  high-growth development land along Southern Peripheral Road (SPR) and Golf Course Extension.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-navy-800">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-gold-500" /> Pre-Leased Corporate Floors
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-gold-500" /> 8.0% – 9.0% Rental Yields
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-gold-500" /> SPR &amp; Sector 69 High-Growth Node
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
                <Link
                  to="/investment"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-navy-700"
                >
                  Explore Investment Opportunities
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-xs text-navy-700/60">Includes yield models &amp; title dossier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Locations Preview */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Gurugram Operational Base &amp; Expansion Horizons</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
                Active in Gurugram • Planned Pan-India Growth
              </h2>
            </div>
            <Link
              to="/locations"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-600 px-6 py-3 text-sm font-semibold text-ivory transition-all hover:border-gold-300 hover:text-gold-300"
            >
              View Location Map <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topLocations.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 80}>
                <Link
                  to="/locations"
                  className={`group relative block h-80 overflow-hidden rounded-2xl border bg-navy-800/80 shadow-md transition-all hover:border-gold-300/40 ${
                    loc.isOperational ? 'border-emerald-400/40 ring-1 ring-emerald-400/30' : 'border-navy-700/60'
                  }`}
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        loc.isOperational
                          ? 'bg-emerald-900/90 text-emerald-300 border border-emerald-400/40'
                          : 'bg-navy-900/80 text-gold-300'
                      }`}
                    >
                      {loc.isOperational ? 'ACTIVE OPERATIONAL HUB' : 'UPCOMING EXPANSION'}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="mt-1 text-xs text-mist line-clamp-2">{loc.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold-300">
                      Explore Region <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Client Journey (5 Steps) */}
      <ClientJourney />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Insights & Perspectives Preview */}
      <section className="bg-ivory py-24 lg:py-32 text-navy-900">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              theme="light"
              eyebrow="Market Intelligence"
              title="Real Estate Insights &amp; Buying Guides"
              subtitle="Perspectives on SPR, HRERA due diligence, and commercial yields."
            />
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-ivory transition-all hover:bg-navy-700"
            >
              Read All Articles <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topInsights.map((art, idx) => (
              <Reveal key={art.id} delay={idx * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                      {art.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="text-xs text-navy-700/60">{art.readTime} • {art.date}</div>
                      <h3 className="mt-2 font-serif text-xl text-navy-800 group-hover:text-gold-600 transition-colors">
                        {art.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-navy-700/70 line-clamp-3">
                        {art.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-navy-100 pt-3">
                      <Link
                        to="/insights"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700"
                      >
                        Read Full Analysis <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Quick Contact Section */}
      <ContactSection />
    </div>
  );
}
