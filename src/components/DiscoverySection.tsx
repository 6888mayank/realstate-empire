import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const CATEGORIES = [
  {
    title: 'Luxury Apartments',
    description:
      'Elevated high-rise living with premium amenities, curated layouts and refined architectural detail.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Residential Plots',
    description:
      'Thoughtfully located land parcels with clear titles, ready for you to build your envisioned home.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Independent Homes & Villas',
    description:
      'Spacious private residences designed for comfort, privacy and timeless architectural appeal.',
    image:
      'https://images.unsplash.com/photo-1600596542815-0515304f0ba6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Properties',
    description:
      'Strategic commercial assets positioned for visibility, accessibility and long-term value.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c6cafa27b0fc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Office Spaces',
    description:
      'Modern workplace environments built for productivity, collaboration and professional presence.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Retail Properties',
    description:
      'High-footfall retail spaces in prominent locations, designed to elevate your brand presence.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  },
];

export function DiscoverySection() {
  return (
    <section id="discovery" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="light"
          eyebrow="Property Discovery"
          title="Explore Properties That Match Your Aspirations"
          subtitle="From thoughtfully designed homes to strategic commercial investments, discover opportunities aligned with your aspirations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-card shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
                </div>
                <div className="relative -mt-16 px-6 pb-6">
                  <div className="rounded-xl bg-white/95 p-5 shadow-lg backdrop-blur-sm">
                    <h3 className="font-serif text-xl text-navy-800">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700/70">
                      {cat.description}
                    </p>
                    <a
                      href="#featured"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600"
                    >
                      Explore
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
