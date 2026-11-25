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
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Residential Plots',
    segment: 'Residential',
    desc: 'Gated Freehold Land',
    href: '/residential',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Independent Homes & Villas',
    segment: 'Residential',
    desc: 'Bespoke Private Mansions',
    href: '/residential',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Ready-to-Move Properties',
    segment: 'Residential',
    desc: 'Immediate Possession & OC',
    href: '/residential',
    icon: KeyRound,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Commercial Properties',
    segment: 'Commercial',
    desc: 'Enterprise Tech Parks',
    href: '/commercial',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Office Spaces',
    segment: 'Commercial',
    desc: 'Grade-A Corporate Suites',
    href: '/commercial',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Retail & Commercial Shops',
    segment: 'Commercial',
    desc: 'High-Footfall Promenades',
    href: '/commercial',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Investment Properties',
    segment: 'Capital Yield',
    desc: '8-9% Pre-Leased Returns',
    href: '/investment',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-between">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80"
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

          {/* 8-Card Grid: Visual Luxury Photo Cards with Real Imagery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to={cat.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-700/80 bg-navy-800/90 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300/80 hover:shadow-[0_12px_32px_rgba(224,176,100,0.25)]"
                >
                  {/* Photo with Overlay */}
                  <div className="relative h-36 w-full overflow-hidden bg-navy-950 sm:h-40">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

                    {/* Segment Badge */}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full border border-gold-300/40 bg-navy-900/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-md shadow-sm">
                        {cat.segment}
                      </span>
                    </div>

                    {/* Floating Icon Pill */}
                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900/80 text-gold-300 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-300 group-hover:text-navy-900 shadow">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="font-serif text-base font-semibold text-ivory transition-colors group-hover:text-gold-200">
                        {cat.label}
                      </div>
                      <div className="mt-1 text-xs text-mist/70">
                        {cat.desc}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-navy-700/60 pt-2.5 text-xs font-semibold text-gold-300">
                      <span>Explore Collection</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
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
