import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ALL_INSIGHTS, InsightArticle } from '@/data/mockData';

const CATEGORIES = [
  'All Perspectives',
  'Real Estate Trends',
  'Property Buying Guides',
  'Investment Insights',
  'Location Guides',
];

export function InsightsPage() {
  const [selectedCat, setSelectedCat] = useState('All Perspectives');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const filtered = useMemo(() => {
    if (selectedCat === 'All Perspectives') return ALL_INSIGHTS;
    return ALL_INSIGHTS.filter((a) => a.category === selectedCat);
  }, [selectedCat]);

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Knowledge &amp; Intelligence"
        title="Real Estate Insights &amp; Market Perspectives"
        subtitle="Thoughtful analysis, buyer advisory guides, legal due diligence frameworks, and long-term investment wisdom from our research desk."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Filter Tabs */}
      <section className="border-b border-navy-700/60 bg-navy-900 py-6">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                  selectedCat === cat
                    ? 'bg-gold-300 text-navy-900 shadow-[0_0_20px_rgba(224,176,100,0.3)]'
                    : 'border border-navy-600 bg-navy-800 text-mist hover:border-gold-300/40 hover:text-ivory'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="bg-ivory py-24 text-navy-900 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Editorial Desk"
            title="Recent Analyses & Guides"
            subtitle="Objective perspectives crafted to empower clients with clarity and informed judgment."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {filtered.map((art, i) => (
              <Reveal key={art.id} delay={i * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                      {art.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-navy-700/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {art.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> {art.readTime}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-2xl leading-snug text-navy-800 group-hover:text-gold-600 transition-colors">
                        {art.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-navy-700/75">
                        {art.summary}
                      </p>

                      {/* Key Takeaways Box */}
                      <div className="mt-6 rounded-2xl border border-navy-100 bg-gold-50/50 p-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                          Key Takeaways:
                        </div>
                        <ul className="mt-3 space-y-2">
                          {art.keyPoints.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-navy-800 leading-relaxed">
                              <CheckCircle size={14} className="shrink-0 text-gold-600 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-navy-100 pt-5">
                      <div className="text-xs text-navy-700/60 font-medium">
                        By {art.author}
                      </div>

                      <button
                        onClick={() => setSelectedArticle(art)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700"
                      >
                        Read Full Analysis <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Newsletter / Consultation */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-10">
          <Reveal>
            <div className="rounded-3xl border border-navy-700 bg-navy-800/80 p-10 lg:p-14">
              <BookOpen size={36} className="mx-auto text-gold-300" />
              <h3 className="mt-4 font-serif text-3xl text-ivory">
                Need Specific Micro-Market Data or Advisory?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist">
                Our team regularly prepares customized property evaluation reports, title audit summaries,
                and rental yield forecasts for clients.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-200"
                >
                  Request Customized Market Dossier <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 p-4 backdrop-blur-md">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-navy-700 bg-navy-800 p-8 text-ivory shadow-2xl lg:p-12">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gold-300/10 px-3 py-1 text-xs font-semibold text-gold-300">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full bg-navy-700 p-2 text-mist hover:text-ivory"
              >
                ✕
              </button>
            </div>

            <h2 className="mt-5 font-serif text-3xl text-ivory sm:text-4xl">
              {selectedArticle.title}
            </h2>

            <div className="mt-3 flex items-center gap-4 text-xs text-mist">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.author}</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="h-64 w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-mist">
              <p>{selectedArticle.summary}</p>
              <h4 className="font-serif text-xl text-gold-300">Key Pillars of This Analysis</h4>
              <ul className="space-y-2 pl-4 list-disc text-mist">
                {selectedArticle.keyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <p>
                Real estate decisions must be informed by macro-economic liquidity, demographic expansion,
                and regulatory compliance. At AVYAAVATI REALTORS, our advisory framework continuously monitors
                these signals across key Indian metros.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                to="/contact"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-2.5 text-xs font-semibold text-navy-900 hover:bg-gold-200"
              >
                Discuss with Research Team <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
