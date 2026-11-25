import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const COMMERCIAL = [
  {
    title: 'Commercial Buildings',
    desc: 'Iconic commercial towers built for enterprise presence and long-term value.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Office Spaces',
    desc: 'Modern workplaces designed for productivity and professional collaboration.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Retail Shops',
    desc: 'High-visibility retail spaces in prominent, high-footfall locations.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Business Spaces',
    desc: 'Flexible business environments tailored to growing enterprises.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Plots',
    desc: 'Strategically located land parcels for commercial development.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80',
  },
];

export function CommercialSection() {
  return (
    <section id="commercial" className="relative overflow-hidden bg-navy-800 py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            theme="dark"
            eyebrow="Commercial"
            title="Commercial Spaces. Bigger Possibilities."
            subtitle="Modern commercial architecture and professional spaces built for enterprise growth."
            className="max-w-2xl"
          />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-gold-300/50 px-6 py-3 text-sm font-semibold text-gold-300 transition-all duration-300 hover:bg-gold-300/10"
          >
            Explore Commercial Opportunities
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {COMMERCIAL.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 70}
              className={i === 0 ? 'lg:col-span-6' : 'lg:col-span-3'}
            >
              <a
                href="#contact"
                className={`group relative block overflow-hidden rounded-2xl ${
                  i === 0 ? 'h-80 lg:h-full' : 'h-64'
                }`}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className={`font-serif text-ivory ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {c.title}
                  </h3>
                  {i === 0 && (
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">{c.desc}</p>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
