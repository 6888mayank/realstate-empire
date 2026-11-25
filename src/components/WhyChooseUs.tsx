import {
  ShieldCheck,
  Users,
  Compass,
  Lightbulb,
  Gem,
  Handshake,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Transparency First',
    text: 'Clear information, honest communication and no hidden surprises at any stage of your property journey.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    text: 'Your objectives shape every recommendation, ensuring choices align with what matters most to you.',
  },
  {
    icon: Compass,
    title: 'Curated Property Opportunities',
    text: 'A selectively chosen portfolio of residential, commercial and investment properties.',
  },
  {
    icon: Lightbulb,
    title: 'Professional Guidance',
    text: 'Experienced insight to help you navigate decisions with clarity and confidence.',
  },
  {
    icon: Gem,
    title: 'Value-Oriented Recommendations',
    text: 'Focus on long-term value and thoughtful asset selection over short-term appeal.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    text: 'A relationship-first philosophy that continues well beyond a single transaction.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-900/70" />

      <div className="relative mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="dark"
          eyebrow="Why AVYAAVATI"
          title="Why Choose AVYAAVATI REALTORS?"
          subtitle="Six principles that shape how we guide every property decision."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-navy-600/40 bg-navy-800/50 p-7 transition-all duration-300 hover:border-gold-300/40 hover:bg-navy-700/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-300/20">
                  <f.icon size={26} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
