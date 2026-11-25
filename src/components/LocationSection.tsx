import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CORPORATE_OFFICE } from '@/data/constants';

const LOCATIONS = [
  {
    name: 'Sector 69 & SPR, Gurugram',
    desc: 'Our active corporate headquarters at Tulip Purple. Rapid cloverleaf access to Golf Course Extension Road, NH-48 and Dwarka Expressway.',
    categories: 'Luxury Apartments · Commercial Retail · Plots',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    status: 'Operational Base',
  },
  {
    name: 'Golf Course Extension Road, Gurugram',
    desc: 'Premier ultra-luxury residential and corporate boulevard featuring top developer communities, international schools, and fine dining.',
    categories: 'Independent Mansions · Grade A Offices',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    status: 'Active Corridor',
  },
  {
    name: 'Dwarka Expressway & Cyber Belts, Gurugram',
    desc: 'The fastest-growing urban expressway corridor in Delhi-NCR offering immediate connectivity to IGI Airport Terminal 3 and major tech parks.',
    categories: 'Ready-to-Move Condos · High-Yield Commercial',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    status: 'Active Corridor',
  },
];

export function LocationSection() {
  return (
    <section id="locations" className="bg-navy-800 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="dark"
          eyebrow="Gurugram Focus"
          title="Active Operational Corridors in Gurugram"
          subtitle="Explore primary micro-markets where our team provides verified on-ground advisory and legal due diligence."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-navy-600/40 bg-navy-700/40">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-950/80 border border-emerald-400/40 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    {loc.status}
                  </span>
                  <h3 className="absolute bottom-4 left-5 font-serif text-2xl text-ivory">
                    {loc.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-mist">{loc.desc}</p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-300">
                    {loc.categories}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ivory transition-colors hover:text-gold-300"
                  >
                    Explore Properties in Corridor
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-navy-700/60 bg-navy-900/60 p-4 text-xs text-mist/80">
          <span className="font-semibold text-gold-300">Corporate Headquarters:</span> {CORPORATE_OFFICE.fullAddress}.
          Currently serving clients across Gurugram &amp; Delhi-NCR. Pan-India expansion planned for upcoming phases.
        </div>
      </div>
    </section>
  );
}
