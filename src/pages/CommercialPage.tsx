import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Briefcase, ShoppingBag, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ALL_PROPERTIES } from '@/data/mockData';

const COMMERCIAL_TYPES = [
  'All Commercial',
  'Office Spaces',
  'Commercial Properties',
  'Retail & Commercial Shops',
];

export function CommercialPage() {
  const [selectedType, setSelectedType] = useState('All Commercial');
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const commercialProps = useMemo(() => {
    return ALL_PROPERTIES.filter((p) => p.category === 'commercial');
  }, []);

  const cities = useMemo(() => {
    return ['All Cities', ...Array.from(new Set(commercialProps.map((p) => p.city)))];
  }, [commercialProps]);

  const filtered = useMemo(() => {
    return commercialProps.filter((p) => {
      const matchType = selectedType === 'All Commercial' || p.type === selectedType;
      const matchCity = selectedCity === 'All Cities' || p.city === selectedCity;
      return matchType && matchCity;
    });
  }, [commercialProps, selectedType, selectedCity]);

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Commercial Portfolio"
        title="Commercial Spaces. Engineered for Enterprise."
        subtitle="Grade-A corporate office towers, high-street retail promenades, and strategic business land parcels designed to elevate enterprise presence."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Commercial Asset Types Overview */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Commercial Focus"
            title="Strategic Business Assets Across Sectors"
            subtitle="Tailored physical infrastructures to cater to tech enterprises, multinational headquarters, and high-street retailers."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: 'Corporate Headquarters & IT Parks',
                desc: 'Expansive contiguous floorplates with high ceiling clearances, destination-controlled elevators, and IGBC/LEED green certifications.',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
              },
              {
                icon: ShoppingBag,
                title: 'High-Footfall Retail & F&B Boulevards',
                desc: 'Double-height storefronts in dense catchment zones offering maximum glass frontage, dedicated loading docks, and pedestrian plazas.',
                image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
              },
              {
                icon: Building2,
                title: 'Commercial Land & Development Parcels',
                desc: 'Strategically positioned highway corridors and zoned enterprise zones ready for customized build-to-suit campuses.',
                image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-gold-300 shadow">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy-800">{item.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-navy-700/75">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Commercial Listings */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Commercial Opportunities
              </span>
              <h2 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
                Featured Commercial &amp; Office Inventory
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
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

          {/* Type filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {COMMERCIAL_TYPES.map((t) => (
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

          {/* Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filtered.map((prop, idx) => (
              <Reveal key={prop.id} delay={idx * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-800/70 transition-all duration-300 hover:border-gold-300/40 hover:shadow-2xl sm:flex-row">
                  <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent sm:bg-gradient-to-r" />
                    <div className="absolute left-3 top-3 flex flex-col items-start gap-1">
                      <span className="rounded-full border border-gold-300/30 bg-navy-900/80 px-2.5 py-0.5 text-[10px] font-semibold text-gold-300 backdrop-blur-sm">
                        {prop.status}
                      </span>
                      {prop.operationalStatus && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[9px] font-bold backdrop-blur-sm ${
                            prop.operationalStatus === 'Active in Gurugram'
                              ? 'bg-emerald-950/90 border border-emerald-400/40 text-emerald-300'
                              : 'bg-navy-900/90 border border-navy-600 text-mist'
                          }`}
                        >
                          {prop.operationalStatus}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                        {prop.type}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                        {prop.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-mist">
                        <MapPin size={14} className="shrink-0 text-gold-300" />
                        <span>{prop.location}</span>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-mist/80">
                        {prop.description}
                      </p>

                      {prop.specs && (
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-mist">
                          {prop.specs.grade && (
                            <span className="rounded bg-navy-700/70 px-2.5 py-1 text-gold-200">
                              {prop.specs.grade}
                            </span>
                          )}
                          <span className="rounded bg-navy-700/70 px-2.5 py-1">
                            {prop.area}
                          </span>
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {prop.highlights.map((h) => (
                          <span key={h} className="rounded bg-navy-900/80 px-2 py-0.5 text-[10px] text-mist/90">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-navy-700/60 pt-4">
                      <div>
                        <div className="text-[10px] uppercase text-mist/60">Indicative Pricing</div>
                        <div className="font-serif text-xl font-semibold text-gold-300">{prop.price}</div>
                      </div>

                      <Link
                        to="/contact"
                        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gold-300 px-5 py-2.5 text-xs font-semibold text-navy-900 transition-all hover:bg-gold-200"
                      >
                        Request Dossier
                        <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Advisory Banner */}
      <section className="bg-ivory py-20 text-navy-900">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid items-center gap-10 rounded-3xl border border-navy-700/10 bg-white p-8 shadow-xl lg:grid-cols-12 lg:p-14">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Corporate Real Estate Advisory
              </span>
              <h3 className="mt-3 font-serif text-3xl text-navy-800 sm:text-4xl">
                Looking for Bespoke Office Space or Retail Expansion?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
                Our commercial division assists corporations, family offices, and retail brands with
                site selection, landlord negotiations, lease term optimization, and tenant representation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-navy-800">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-gold-500" /> Tenant Representation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-gold-500" /> High-Street Retail Sourcing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-gold-500" /> Build-to-Suit Advisory
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-navy-700"
              >
                Connect With Commercial Desk
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-navy-700/60">Strictly confidential consultations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
