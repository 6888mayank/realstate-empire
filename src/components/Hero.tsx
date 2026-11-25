import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  Building2,
  MapPin,
  Home,
  KeyRound,
  Building,
  Briefcase,
  Store,
  TrendingUp,
} from 'lucide-react';

const CATEGORIES = [
  {
    label: 'Luxury Apartments',
    segment: 'Residential',
    desc: 'High-Rise Sky Suites',
    href: '/residential',
    icon: Building2,
  },
  {
    label: 'Residential Plots',
    segment: 'Residential',
    desc: 'Gated Freehold Land',
    href: '/residential',
    icon: MapPin,
  },
  {
    label: 'Independent Homes & Villas',
    segment: 'Residential',
    desc: 'Bespoke Private Mansions',
    href: '/residential',
    icon: Home,
  },
  {
    label: 'Ready-to-Move Properties',
    segment: 'Residential',
    desc: 'Immediate Possession & OC',
    href: '/residential',
    icon: KeyRound,
  },
  {
    label: 'Commercial Properties',
    segment: 'Commercial',
    desc: 'Enterprise Tech Parks',
    href: '/commercial',
    icon: Building,
  },
  {
    label: 'Office Spaces',
    segment: 'Commercial',
    desc: 'Grade-A Corporate Suites',
    href: '/commercial',
    icon: Briefcase,
  },
  {
    label: 'Retail & Commercial Shops',
    segment: 'Commercial',
    desc: 'High-Footfall Promenades',
    href: '/commercial',
    icon: Store,
  },
  {
    label: 'Investment Properties',
    segment: 'Capital Yield',
    desc: '8-9% Pre-Leased Returns',
    href: '/investment',
    icon: TrendingUp,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613492390611-a14a3a0fc6f6?auto=format&fit=crop&w=2400&q=80"
          alt="Modern luxury villa at dusk with warm golden interior lighting"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col px-5 pt-32 sm:pt-36 lg:px-10 lg:pt-40">
        <div className="max-w-3xl">
          {/* Intro with gold emblem & line */}
          <div className="animate-fade-in flex items-center gap-3.5 opacity-0" style={{ animationDelay: '0.2s' }}>
            <img
              src="/logo-symbol.png"
              alt="AVYAAVATI Emblem"
              className="h-10 w-10 object-contain drop-shadow-[0_2px_12px_rgba(224,176,100,0.4)]"
            />
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-gold-300" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                AVYAAVATI REALTORS • GURUGRAM
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="animate-fade-up mt-6 font-serif text-5xl leading-[1.05] text-ivory opacity-0 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.4s' }}
          >
            Find a Property That
            <br />
            Reflects Your{' '}
            <span className="italic text-gold-gradient">Vision.</span>
          </h1>

          {/* Official Motto Tagline */}
          <div
            className="animate-fade-up mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gold-300 opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            <span>Fostering Trust, Transparency &amp; Value</span>
            <span className="hidden sm:inline text-gold-400/40">•</span>
            <span className="text-xs text-mist font-medium tracking-wider">Residential | Commercial | Industrial</span>
          </div>

          {/* Supporting paragraph */}
          <p
            className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-mist opacity-0"
            style={{ animationDelay: '0.75s' }}
          >
            Discover thoughtfully curated residential residences, Grade-A commercial spaces, and high-yield
            investment opportunities with certified title due diligence across Gurugram and Delhi-NCR.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.9s' }}
          >
            <Link
              to="/residential"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.45)]"
            >
              Explore Properties
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/60 bg-navy-900/40 px-8 py-4 text-sm font-semibold text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold-300 hover:bg-gold-300/10"
            >
              Connect With Our Gurugram Office
            </Link>
          </div>
        </div>
      </div>

      {/* Property Category Explorer — Spacious, Structured 8-Card Layout */}
      <div className="relative z-20 mx-auto w-full max-w-8xl px-5 pt-12 pb-12 lg:px-10 lg:pt-16 lg:pb-14">
        <div className="rounded-3xl border border-gold-300/20 bg-navy-900/85 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-7">
          {/* Section Header with Indicator */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-navy-700/80 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-gold-300 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Property Categories • Quick Discovery
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-mist/70">
              <span>Verified On-Ground Opportunities in Gurugram</span>
            </div>
          </div>

          {/* 8-Card Grid with Generous Gaps & Distinct Cards */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to={cat.href}
                  className="group flex items-center gap-3.5 rounded-2xl border border-navy-700/80 bg-navy-800/80 p-3.5 transition-all duration-300 hover:border-gold-300/60 hover:bg-navy-700/80 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(224,176,100,0.18)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-300/10 text-gold-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-300 group-hover:text-navy-900 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-gold-300/80">
                      {cat.segment}
                    </div>
                    <div className="text-sm font-semibold text-ivory group-hover:text-gold-200 transition-colors truncate">
                      {cat.label}
                    </div>
                    <div className="text-[11px] text-mist/60 truncate mt-0.5">
                      {cat.desc}
                    </div>
                  </div>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-mist/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-300"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick floating contact links (visible on wide screens) */}
      <div className="fixed bottom-10 right-6 z-30 hidden flex-col gap-3 2xl:flex">
        {[
          { icon: Phone, href: 'tel:+919810000000', label: 'Call Gurugram Office' },
          { icon: MessageCircle, href: '/contact', label: 'WhatsApp Concierge' },
          { icon: Mail, href: 'mailto:contact@avyaavati.com', label: 'Email Inquiry' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/30 bg-navy-900/90 text-gold-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-gold-300 hover:bg-gold-300 hover:text-navy-900"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
