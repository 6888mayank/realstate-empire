import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ALL_LOCATIONS } from '@/data/mockData';
import { CORPORATE_OFFICE } from '@/data/constants';

export function LocationsPage() {
  const [activeCityId, setActiveCityId] = useState<string>(ALL_LOCATIONS[0].id);

  const activeCity = ALL_LOCATIONS.find((c) => c.id === activeCityId) ?? ALL_LOCATIONS[0];

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Locations & Operational Footprint"
        title="Gurugram Hub & Strategic Expansion Pipeline"
        subtitle="AVYAAVATI REALTORS is actively operational with on-ground expertise in Gurugram (Delhi-NCR), with future scope identified for high-growth Indian metros."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1567521464026-f4e5346411c0?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Corporate Base Callout */}
      <section className="border-b border-navy-700/60 bg-navy-900 py-6">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-xs text-mist">
                <span className="font-semibold text-ivory">Active Operations:</span> Gurugram &amp; Delhi-NCR •{' '}
                <span className="text-gold-300">Corporate HQ: Tulip Purple, Sector 69, Gurgaon</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mist/70">
              <ShieldCheck size={14} className="text-gold-300" />
              <span>Future Scope: Mumbai, Pune, Bengaluru, Noida, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive City Selector Bar */}
      <section className="border-b border-navy-700/60 bg-navy-800/80 py-5">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ALL_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveCityId(loc.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  activeCityId === loc.id
                    ? 'bg-gold-300 text-navy-900 shadow-[0_0_20px_rgba(224,176,100,0.3)]'
                    : 'border border-navy-600 bg-navy-800 text-mist hover:border-gold-300/40 hover:text-ivory'
                }`}
              >
                <MapPin size={13} className={loc.isOperational ? 'text-emerald-400' : 'text-gold-300'} />
                <span>{loc.name}</span>
                {loc.isOperational && (
                  <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                    ACTIVE
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight City Showcase */}
      <section className="bg-navy-800 py-16 lg:py-24">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid items-center gap-12 rounded-3xl border border-navy-700/80 bg-navy-900/80 p-8 lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  {activeCity.state}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    activeCity.isOperational
                      ? 'border border-emerald-400/40 bg-emerald-950/80 text-emerald-300'
                      : 'border border-amber-400/40 bg-amber-950/80 text-amber-300'
                  }`}
                >
                  {activeCity.statusBadge}
                </span>
              </div>

              <h2 className="mt-3 font-serif text-4xl text-ivory sm:text-5xl">
                {activeCity.name}
              </h2>
              <p className="mt-2 font-serif text-xl text-gold-200/90 italic">
                "{activeCity.tagline}"
              </p>

              {/* Corporate address mention if Gurugram */}
              {activeCity.corporateNote && (
                <div className="mt-4 rounded-xl border border-gold-300/30 bg-gold-300/10 p-3.5 text-xs text-ivory">
                  <span className="font-semibold text-gold-300">Registered Corporate Address:</span>
                  <div className="mt-0.5 text-mist">{CORPORATE_OFFICE.fullAddress}</div>
                </div>
              )}

              <p className="mt-5 text-sm leading-relaxed text-mist">
                {activeCity.description}
              </p>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-navy-700/80 py-5">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-mist/60">Portfolio Status</div>
                  <div className="mt-1 font-serif text-xl text-ivory">{activeCity.propertyCount}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-mist/60">Corridor Appreciation</div>
                  <div className="mt-1 font-serif text-2xl text-emerald-400">{activeCity.averageGrowth}</div>
                </div>
              </div>

              {/* Key Micro-markets */}
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-mist">
                  {activeCity.isOperational ? 'Active Corridors Covered:' : 'Key Planned Corridors:'}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCity.keySectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-lg border border-navy-600 bg-navy-800/80 px-3 py-1.5 text-xs text-mist"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={activeCity.isOperational ? '/residential' : '/contact'}
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-xs font-semibold text-navy-900 transition-all hover:bg-gold-200"
                >
                  {activeCity.isOperational ? 'View Gurugram Properties' : 'Enquire About Expansion'}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-600 px-6 py-3 text-xs font-semibold text-ivory transition-colors hover:border-gold-300/40"
                >
                  Contact Gurugram Desk
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative h-[26rem] overflow-hidden rounded-2xl border border-navy-700/80 shadow-2xl">
                <img
                  src={activeCity.image}
                  alt={activeCity.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-navy-900/90 p-4 backdrop-blur-md">
                  <div>
                    <div className="text-xs text-mist/70">
                      {activeCity.isOperational ? 'Active Operations Center' : 'Strategic Future Scope'}
                    </div>
                    <div className="font-serif text-lg text-ivory">{activeCity.name}</div>
                  </div>
                  <Compass className="text-gold-300" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Cities Cards Grid */}
      <section className="bg-ivory py-24 text-navy-900 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Market Portfolio"
            title="Gurugram Base & Future Expansion Scope"
            subtitle="Deep on-ground expertise currently in Gurugram, combined with a calibrated expansion roadmap for other prime Indian metros."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 80}>
                <div
                  onClick={() => {
                    setActiveCityId(loc.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    loc.isOperational ? 'ring-2 ring-gold-500/40' : ''
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-5 font-serif text-2xl text-ivory">
                      {loc.name}
                    </span>

                    {/* Operational badge */}
                    <span
                      className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold backdrop-blur-sm ${
                        loc.isOperational
                          ? 'bg-emerald-900/90 text-emerald-300 border border-emerald-400/40'
                          : 'bg-navy-900/90 text-gold-300'
                      }`}
                    >
                      {loc.isOperational ? 'ACTIVE OPERATIONAL' : 'UPCOMING SCOPE'}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                        {loc.tagline}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-navy-700/75 line-clamp-3">
                        {loc.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4 text-xs font-semibold text-navy-800">
                      <span>{loc.propertyCount}</span>
                      <span className="inline-flex items-center gap-1 text-gold-600 group-hover:translate-x-1 transition-transform">
                        Explore Micro-Market <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
