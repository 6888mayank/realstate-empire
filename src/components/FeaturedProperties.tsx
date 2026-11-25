import { useMemo, useState } from 'react';
import { MapPin, Maximize, ArrowRight, Building2, BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

type Property = {
  name: string;
  location: string;
  type: string;
  area: string;
  price: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  image: string;
};

const PROPERTIES: Property[] = [
  {
    name: 'Tulip Crimson & Purple Suites',
    location: 'Sector 69, SPR, Gurugram',
    type: 'Luxury Apartments',
    area: '2,800 – 4,500 sq.ft.',
    price: '₹3.6 Cr onwards',
    status: 'Ready to Move',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Meridian Corporate Square',
    location: 'Cyber City Fringe, Gurugram',
    type: 'Office Spaces',
    area: '5,000 – 45,000 sq.ft.',
    price: '₹22,500 / sq.ft.',
    status: 'Ready to Move',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Sovereign Grand Mansions',
    location: 'Golf Course Extension, Gurugram',
    type: 'Independent Homes & Villas',
    area: '6,200 – 9,800 sq.ft.',
    price: '₹14.5 Cr onwards',
    status: 'New Launch',
    image:
      'https://images.unsplash.com/photo-1613977257363-fce7ac12c4f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'The Crest Retail Promenade',
    location: 'Sector 69-70, SPR, Gurugram',
    type: 'Retail & Commercial Shops',
    area: '850 – 4,200 sq.ft.',
    price: '₹1.85 Cr onwards',
    status: 'Under Construction',
    image:
      'https://images.unsplash.com/photo-1567521464026-f4e5346411c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'The Aurelia Sky Residences',
    location: 'Sector 65, Golf Course Ext, Gurugram',
    type: 'Luxury Apartments',
    area: '3,200 – 5,400 sq.ft.',
    price: '₹7.8 Cr onwards',
    status: 'Under Construction',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Signature Business Nexus',
    location: 'Golf Course Extension Road, Gurugram',
    type: 'Commercial Properties',
    area: '6,500 – 35,000 sq.ft.',
    price: 'Price on Request',
    status: 'New Launch',
    image:
      'https://images.unsplash.com/photo-1497366811353-67807737656c?auto=format&fit=crop&w=1200&q=80',
  },
];

const STATUS_STYLES: Record<Property['status'], string> = {
  'Ready to Move': 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  'Under Construction': 'bg-gold-300/15 text-gold-300 border-gold-300/30',
  'New Launch': 'bg-sky-500/15 text-sky-300 border-sky-400/30',
};

export function FeaturedProperties() {
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');

  const types = useMemo(
    () => ['All', ...Array.from(new Set(PROPERTIES.map((p) => p.type)))],
    []
  );
  const statuses = useMemo(
    () => ['All', ...Array.from(new Set(PROPERTIES.map((p) => p.status)))],
    []
  );

  const filtered = PROPERTIES.filter(
    (p) => (type === 'All' || p.type === type) && (status === 'All' || p.status === status)
  );

  return (
    <section id="featured" className="bg-navy-800 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="dark"
          eyebrow="Gurugram Portfolio"
          title="Featured Property Opportunities in Gurugram"
          subtitle="Discover verified real estate opportunities across Sector 69, SPR, and Golf Course Extension Road."
        />

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <FilterSelect
            label="Property Type"
            value={type}
            options={types}
            onChange={setType}
          />
          <FilterSelect
            label="Construction Status"
            value={status}
            options={statuses}
            onChange={setStatus}
          />
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-navy-600/40 bg-navy-700/40 transition-all duration-300 hover:border-gold-300/40 hover:bg-navy-700/70">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                      STATUS_STYLES[p.status]
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gold-300">
                    <Building2 size={14} />
                    <span className="font-semibold uppercase tracking-wider">{p.type}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                    {p.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-mist">
                    <MapPin size={14} className="shrink-0 text-gold-300" />
                    <span>{p.location}</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-mist">
                    <Maximize size={14} className="shrink-0 text-gold-300" />
                    <span>{p.area}</span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-navy-600/40 pt-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-mist/60">
                        Indicative Price
                      </span>
                      <span className="font-serif text-lg font-semibold text-gold-300">
                        {p.price}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gold-300/10 px-4 py-2 text-xs font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-300 hover:text-navy-900"
                    >
                      Enquire <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-mist">
            <BadgeCheck className="mx-auto mb-2 text-gold-300" size={28} />
            No properties match the selected filters.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-navy-600/60 bg-navy-700/50 px-4 py-2">
      <span className="text-xs text-mist/70">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-xs font-semibold text-ivory outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-navy-800 text-ivory">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
