import { ArrowRight, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const ARTICLES = [
  {
    category: 'Real Estate Trends',
    title: 'Understanding Current Residential Property Trends',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Property Buying Guides',
    title: 'A First-Time Buyer\'s Guide to Informed Decisions',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1568605114967-8130fc81cb94?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Investment Insights',
    title: 'Evaluating Property as a Long-Term Consideration',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Location Guides',
    title: 'What to Look for When Exploring a New Location',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <SectionHeading
          theme="light"
          eyebrow="Insights & Blog"
          title="Real Estate Insights & Perspectives"
          subtitle="Editorial perspectives on trends, buying guidance, investment considerations and locations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.category}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-navy-800/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5 text-xs text-navy-700/50">
                    <Clock size={13} /> {a.readTime}
                  </div>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-navy-800">
                    {a.title}
                  </h3>
                  <a
                    href="#insights"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600"
                  >
                    Read More
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-navy-700/50">
          Article titles shown are editable placeholders. Published articles will appear here once available.
        </p>
      </div>
    </section>
  );
}
