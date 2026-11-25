import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const RESIDENTIAL = [
  {
    title: 'Luxury Apartments',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Premium Residences',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Villas',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Independent Homes',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Residential Plots',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Ready-to-Move Properties',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
];

export function ResidentialSection() {
  return (
    <section id="residential" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="light"
          eyebrow="Residential"
          title="Discover Spaces That Feel Like Home"
          subtitle="Cinematic residential property categories — from luxury apartments to ready-to-move homes."
        />

        {/* Editorial mosaic layout */}
        <div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESIDENTIAL.map((r, i) => {
            const large = i === 0 || i === 3;
            return (
              <Reveal
                key={r.title}
                delay={i * 70}
                className={`${large ? 'sm:col-span-2 sm:row-span-1' : ''}`}
              >
                <a
                  href="#featured"
                  className="group relative block h-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-2xl text-ivory">{r.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Explore <ArrowRight size={15} />
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-gold-300/70 transition-all duration-300 group-hover:scale-150" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
