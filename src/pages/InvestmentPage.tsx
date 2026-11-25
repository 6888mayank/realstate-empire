import { Link } from 'react-router-dom';
import { TrendingUp, ShieldAlert, BarChart3, Layers, ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ALL_PROPERTIES } from '@/data/mockData';

export function InvestmentPage() {
  const investmentProps = ALL_PROPERTIES.filter((p) => p.category === 'investment');

  return (
    <div className="bg-navy-800 text-ivory">
      <PageHeader
        badge="Strategic Capital Advisory"
        title="Real Estate Investment & Wealth Preservation"
        subtitle="Institutional-grade asset selection, pre-leased commercial yields, and strategic land banking opportunities tailored for discerning private investors and family offices."
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Investment Framework */}
      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="light"
            eyebrow="Advisory Framework"
            title="A Disciplined Approach to Property Capital"
            subtitle="Real estate investments require an objective balance between secure income streams and long-term capital appreciation."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: DollarSign,
                title: 'Predictable Rental Yields',
                desc: 'Focus on Grade-A corporate assets with multi-year leases, blue-chip tenants, and structured escalation clauses.',
              },
              {
                icon: TrendingUp,
                title: 'Infrastructure Catalysts',
                desc: 'Targeting corridors with confirmed multimodal connectivity: metro extensions, expressways, and international airports.',
              },
              {
                icon: BarChart3,
                title: 'Capital Preservation',
                desc: 'Stress-testing micro-market demand dynamics to ensure asset liquidity and downside protection under shifting market cycles.',
              },
              {
                icon: Layers,
                title: 'Clear Regulatory Title',
                desc: 'Rigorous legal vetting to ensure unencumbered freehold ownership, compliant zoning, and clean exit pathways.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-700/10 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                    <item.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-navy-800">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-navy-700/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Investment Assets */}
      <section className="bg-navy-900 py-24 lg:py-32">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <SectionHeading
            theme="dark"
            eyebrow="Curated Assets"
            title="Featured Investment Opportunities"
            subtitle="Select assets available for capital deployment with validated documentation and immediate financial models."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {investmentProps.map((prop, idx) => (
              <Reveal key={prop.id} delay={idx * 100}>
                <div className="group overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-800/80 transition-all duration-300 hover:border-gold-300/40 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-gold-300/40 bg-navy-900/80 px-3 py-1 text-xs font-semibold text-gold-300 backdrop-blur-md">
                      {prop.type}
                    </span>
                  </div>

                  <div className="p-8">
                    <h3 className="font-serif text-3xl text-ivory group-hover:text-gold-300 transition-colors">
                      {prop.name}
                    </h3>
                    <div className="mt-1 text-xs text-mist">{prop.location}</div>

                    <p className="mt-4 text-sm leading-relaxed text-mist/90">
                      {prop.description}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl border border-navy-700/60 bg-navy-900/60 p-4">
                      {prop.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ivory">
                          <CheckCircle2 size={14} className="shrink-0 text-gold-300" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-navy-700/60 pt-5">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-mist/60">Ticket Size</div>
                        <div className="font-serif text-2xl font-semibold text-gold-300">{prop.price}</div>
                      </div>

                      <Link
                        to="/contact"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-xs font-semibold text-navy-900 transition-all hover:bg-gold-200"
                      >
                        Request Financial Model
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Legal Advisory Disclaimer */}
          <div className="mt-12 rounded-xl border border-navy-700/50 bg-navy-800/40 p-6 text-xs leading-relaxed text-mist/70">
            <div className="flex items-center gap-2 text-gold-300 font-semibold mb-2">
              <ShieldAlert size={16} /> Regulatory &amp; Advisory Notice
            </div>
            Information provided across our investment showcases is for structured discussion and informational
            evaluation only. Real estate investments are subject to market forces, liquidity shifts, and tenancy
            risks. AVYAAVATI REALTORS does not offer guaranteed speculative returns. Prospective investors are
            advised to review independent financial, tax, and legal counsel prior to formal commitment.
          </div>
        </div>
      </section>

      {/* Advisory Consultation CTA */}
      <section className="bg-ivory py-20 text-navy-900">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Private Wealth Desk
            </span>
            <h2 className="mt-3 font-serif text-3xl text-navy-800 sm:text-4xl">
              Confidential Portfolio Allocation Advisory
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-navy-700/75">
              Discuss your capital deployment horizon, target yields, and geographic preferences with our
              senior advisory team under strict non-disclosure.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-navy-700"
              >
                Schedule Private Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
