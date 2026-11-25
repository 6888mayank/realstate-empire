import { TrendingUp, Building2, MapPin, Layers } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const BLOCKS = [
  {
    icon: TrendingUp,
    title: 'Residential Investments',
    text: 'Residential assets selected with a focus on location quality, design and livability.',
  },
  {
    icon: Building2,
    title: 'Commercial Investments',
    text: 'Commercial opportunities evaluated for visibility, accessibility and tenant potential.',
  },
  {
    icon: MapPin,
    title: 'Emerging Locations',
    text: 'Attention to developing corridors and neighbourhoods with evolving infrastructure.',
  },
  {
    icon: Layers,
    title: 'Property Opportunities',
    text: 'A curated view of opportunities aligned with your investment objectives.',
  },
];

export function InvestmentSection() {
  return (
    <section id="investment" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="light"
          eyebrow="Investment Opportunities"
          title="Real Estate Opportunities Worth Exploring"
          subtitle="Explore property opportunities with a thoughtful approach to location, asset selection and your investment objectives."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-navy-700/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-800 text-gold-300 transition-all duration-300 group-hover:scale-110">
                  <b.icon size={24} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-navy-800">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/70">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-navy-700/50">
          Information provided is for general guidance only and does not constitute investment
          advice or a promise of returns. Property values are subject to market conditions.
        </p>
      </div>
    </section>
  );
}
