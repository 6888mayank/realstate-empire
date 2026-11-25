import { Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
        <SectionHeading
          theme="dark"
          eyebrow="Testimonials"
          title="Trust That Speaks Through Experience"
          subtitle="Client experiences are shared here once verified reviews are provided."
          align="center"
          className="mx-auto"
        />

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-navy-600/40 bg-navy-800/60 p-10 backdrop-blur-sm">
            <Quote className="mx-auto text-gold-300" size={40} />
            <p className="mt-6 font-serif text-2xl leading-relaxed text-ivory sm:text-3xl">
              Genuine client testimonials will appear here.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              We do not publish fabricated reviews, names or ratings. Actual verified
              client experiences will be showcased once they are provided and confirmed.
            </p>
            <div className="mt-8 flex items-center justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-6 rounded-full bg-navy-600"
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
