import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const STEPS = [
  { num: '01', title: 'Understand Your Needs', text: 'We begin by listening — your goals, preferences and priorities shape the entire journey.' },
  { num: '02', title: 'Discover Suitable Properties', text: 'A curated shortlist of properties aligned with your requirements and aspirations.' },
  { num: '03', title: 'Consultation & Evaluation', text: 'Professional guidance to evaluate each option with clarity and confidence.' },
  { num: '04', title: 'Site Visits', text: 'On-ground visits to experience the property, surroundings and connectivity firsthand.' },
  { num: '05', title: 'Transaction Assistance', text: 'Support through documentation and completion for a smooth, informed transaction.' },
];

export function ClientJourney() {
  return (
    <section id="journey" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="light"
          eyebrow="Client Journey"
          title="Your Property Journey. Our Professional Guidance."
          subtitle="A structured, transparent process designed to keep you informed at every step."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 90}>
              <div className="group relative h-full rounded-2xl border border-navy-700/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold-300/40 hover:shadow-lg">
                <div className="font-serif text-5xl text-gold-gradient">{s.num}</div>
                <h3 className="mt-4 font-serif text-xl text-navy-800">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/70">{s.text}</p>
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gold-300/40 lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
