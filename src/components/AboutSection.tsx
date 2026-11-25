import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Premium architectural property"
              loading="lazy"
              className="h-[30rem] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy-800 p-6 text-ivory shadow-2xl sm:block">
            <div className="font-serif text-4xl text-gold-gradient">100%</div>
            <div className="mt-1 max-w-[10rem] text-xs uppercase tracking-wider text-mist">
              Commitment to Transparent Guidance
            </div>
          </div>
        </Reveal>

        {/* Content side */}
        <Reveal delay={120}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              About Us
            </span>
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-[1.12] text-navy-800 sm:text-5xl">
            A Vision Built on Trust.
            <br />A Journey Guided by Value.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700/75">
            <p>
              AVYAAVATI REALTORS PRIVATE LIMITED is focused on creating meaningful real
              estate experiences through transparency, professional guidance and
              thoughtfully curated property opportunities.
            </p>
            <p>
              We believe real estate decisions deserve clarity, informed guidance and a
              relationship built on trust. From residential property to commercial spaces
              and investment opportunities, our approach places the client's objectives at
              the heart of every interaction.
            </p>
          </div>

          <div className="mt-8 inline-flex flex-col items-start gap-1 rounded-xl border-l-2 border-gold-500 bg-gold-50/60 px-5 py-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Trust, Transparency &amp; Value
            </span>
            <span className="text-xs text-navy-700/60">
              The principles that guide every recommendation we make.
            </span>
          </div>

          <a
            href="#why"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-navy-700"
          >
            Read More
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
