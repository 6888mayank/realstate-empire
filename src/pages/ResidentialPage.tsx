import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize, ArrowRight, Bed, Bath, Shield } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ALL_PROPERTIES } from '@/data/mockData';

const RESIDENTIAL_TYPES = [
  'All Residential',
  'Luxury Apartments',
  'Independent Homes & Villas',
  'Residential Plots',
  'Ready-to-Move Properties',
];

const STATUS_BADGES: Record<string, string> = {
  'Ready to Move': 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  'Under Construction': 'bg-gold-300/15 text-gold-300 border-gold-300/30',
  'New Launch': 'bg-sky-500/15 text-sky-300 border-sky-400/30',
};

export function ResidentialPage() {
  const [selectedType, setSelectedType] = useState('All Residential');
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const residentialProps = useMemo(() => {
    return ALL_PROPERTIES.filter((p) => p.category === 'residential');
  }, []);

  const cities = useMemo(() => {
    return ['All Cities', ...Array.from(new Set(residentialProps.map((p) => p.city)))];
  }, [residentialProps]);

  const filtered = useMemo(() => {
    return residentialProps.filter((p) => {
      const matchType = selectedType === 'All Residential' || p.type === selectedType;
      const matchCity = selectedCity === 'All Cities' || p.city === selectedCity;
      return matchType && matchCity;
    });
  }, [residentialProps, selectedType, selectedCity]);

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Residential Portfolio"
        title="Curated Homes & Living Sanctuaries"
        subtitle="Explore thoughtfully designed luxury apartments, private villas, and residential plots in India's most sought-after neighbourhoods."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1613492390611-a14a3a0fc6f6?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Property Categories Grid */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Residential Segments"
            title="Designed for Every Stage of Living"
            subtitle="From elevated sky residences to private landed villas, discover properties matched to your aspirations."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Luxury Apartments',
                desc: 'Panoramic skyline views, private lobbies, and hotel-grade lifestyle amenities.',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
                count: '30+ Available',
              },
              {
                title: 'Villas & Mansions',
                desc: 'Expansive private lawns, gated community security, and bespoke personal spaces.',
                image: 'https://images.unsplash.com/photo-1600596542815-0515304f0ba6?auto=format&fit=crop&w=800&q=80',
                count: '15+ Available',
              },
              {
                title: 'Residential Plots',
                desc: 'Clear-titled, approved land parcels ready for your custom architectural vision.',
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
                count: '20+ Parcels',
              },
              {
                title: 'Ready-to-Move',
                desc: 'Immediate occupancy homes with completed finishes and validated Occupancy Certificates.',
                image: 'https://images.unsplash.com/photo-1600585154526-990dced4750f?auto=format&fit=crop&w=800&q=80',
                count: '25+ Turnkey',
              },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 70}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-gold-300">
                      {cat.count}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-navy-800">{cat.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-navy-700/70">{cat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Listings Section */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Residential Portfolio
              </span>
              <h2 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
                Featured Residential Opportunities
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="rounded-full border border-navy-600 bg-navy-800 px-4 py-2 text-xs font-semibold text-ivory outline-none focus:border-gold-300"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subtype pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {RESIDENTIAL_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                  selectedType === t
                    ? 'bg-gold-300 text-navy-900 shadow-md'
                    : 'border border-navy-600/70 bg-navy-800/80 text-mist hover:border-gold-300/40 hover:text-ivory'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Property Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((prop, idx) => (
              <Reveal key={prop.id} delay={idx * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-800/70 transition-all duration-300 hover:border-gold-300/40 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute left-4 top-4 flex flex-col items-start gap-1">
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md ${
                          STATUS_BADGES[prop.status] ?? 'bg-navy-900/80 text-ivory border-navy-600'
                        }`}
                      >
                        {prop.status}
                      </span>
                      {prop.operationalStatus && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-md ${
                            prop.operationalStatus === 'Active in Gurugram'
                              ? 'bg-emerald-950/80 border border-emerald-400/40 text-emerald-300'
                              : 'bg-navy-900/80 border border-navy-600 text-mist'
                          }`}
                        >
                          {prop.operationalStatus}
                        </span>
                      )}
                    </div>

                    <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-gold-300">
                      {prop.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                        {prop.name}
                      </h3>
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-xs text-mist">
                      <MapPin size={14} className="shrink-0 text-gold-300" />
                      <span>{prop.location}</span>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-mist/80 line-clamp-2">
                      {prop.description}
                    </p>

                    {/* Specs if available */}
                    {prop.specs && (
                      <div className="mt-5 grid grid-cols-3 gap-2 border-y border-navy-700/60 py-3 text-xs text-mist">
                        {prop.specs.beds && (
                          <div className="flex items-center gap-1.5">
                            <Bed size={13} className="text-gold-300" />
                            <span>{prop.specs.beds}</span>
                          </div>
                        )}
                        {prop.specs.baths && (
                          <div className="flex items-center gap-1.5">
                            <Bath size={13} className="text-gold-300" />
                            <span>{prop.specs.baths}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Maximize size={13} className="text-gold-300" />
                          <span>{prop.specs.sqft ?? prop.area}</span>
                        </div>
                      </div>
                    )}

                    {/* Highlights bullet tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {prop.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="rounded-md bg-navy-700/60 px-2 py-0.5 text-[10px] text-mist"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-2">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-mist/60">Pricing</div>
                        <div className="font-serif text-xl font-semibold text-gold-300">{prop.price}</div>
                      </div>

                      <Link
                        to="/contact"
                        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-navy-700 px-4 py-2 text-xs font-semibold text-ivory transition-colors hover:bg-gold-300 hover:text-navy-900"
                      >
                        Enquire
                        <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-mist">No properties found matching your selection.</p>
              <button
                onClick={() => {
                  setSelectedType('All Residential');
                  setSelectedCity('All Cities');
                }}
                className="mt-4 text-xs font-semibold text-gold-300 underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Buying Guide Feature */}
      <section className="bg-ivory py-20 text-navy-900">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="rounded-3xl border border-navy-700/10 bg-white p-8 shadow-xl lg:p-14">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Residential Advisory
                </span>
                <h3 className="mt-3 font-serif text-3xl text-navy-800">
                  Our Due Diligence Checklist for Homebuyers
                </h3>
                <p className="mt-3 text-sm text-navy-700/75">
                  Before we present any residential project to our clients, our legal and technical team
                  conducts an exhaustive 4-tier validation.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                >
                  Speak With an Advisor <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
                {[
                  {
                    title: 'Title & Ownership Search',
                    text: '30-year historical title search ensuring zero litigations, encumbrances or family disputes.',
                  },
                  {
                    title: 'RERA & Sanctioned Plans',
                    text: 'Verification of commencement certificate (CC), approved FAR, and environmental clearances.',
                  },
                  {
                    title: 'Structural & Carpet Audit',
                    text: 'Independent assessment of usable RERA carpet area versus super built-up claims.',
                  },
                  {
                    title: 'Developer Track Record',
                    text: 'Scrutiny of previous delivery timelines, escrow compliance, and financial health.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-navy-100 bg-gold-50/40 p-5">
                    <Shield className="text-gold-600" size={22} />
                    <h4 className="mt-3 font-serif text-lg font-semibold text-navy-800">{item.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-navy-700/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
