import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react';

const CATEGORIES = [
  { label: 'Luxury Apartments', href: '/residential' },
  { label: 'Residential Plots', href: '/residential' },
  { label: 'Independent Homes & Villas', href: '/residential' },
  { label: 'Commercial Properties', href: '/commercial' },
  { label: 'Office Spaces', href: '/commercial' },
  { label: 'Retail & Commercial Shops', href: '/commercial' },
  { label: 'Investment Properties', href: '/investment' },
  { label: 'Ready-to-Move Properties', href: '/residential' },
];

function CategoryIcon({ index }: { index: number }) {
  const common = 'stroke-gold-300';
  const icons: Record<number, React.ReactNode> = {
    0: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M4 21V8l8-5 8 5v13" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" /><path d="M9 11h6" />
      </svg>
    ),
    1: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 9h16M4 13h16" />
        <path d="M9 19v-4h6v4" />
      </svg>
    ),
    2: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M3 21V9l5-3 5 3v12" /><path d="M13 21V13l4-2 4 2v8" strokeLinejoin="round" />
        <path d="M6 12v.5M6 16v.5M16 16v.5" />
      </svg>
    ),
    3: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M4 21V7l7-3v17" /><path d="M11 21V11l9 3v7" strokeLinejoin="round" />
        <path d="M7 9v.5M7 13v.5M7 17v.5" />
      </svg>
    ),
    4: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 9h16M4 14h16" />
        <path d="M10 4v16" />
      </svg>
    ),
    5: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M4 21V8a2 2 0 012-2h12a2 2 0 012 2v13" /><path d="M4 12h16" />
        <path d="M9 21v-5h6v5" /><path d="M7 8h.5M17 8h.5" />
      </svg>
    ),
    6: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" /><path d="M12 9v3l2 2" strokeLinecap="round" />
      </svg>
    ),
    7: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.4" className={common}>
        <path d="M3 21V10l4-3v14" /><path d="M7 21V6l5-3v18" strokeLinejoin="round" />
        <path d="M12 21V8l8 4v9" strokeLinejoin="round" /><path d="M3 21h18" />
      </svg>
    ),
  };
  return <>{icons[index] ?? icons[0]}</>;
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613492390611-a14a3a0fc6f6?auto=format&fit=crop&w=2400&q=80"
          alt="Modern luxury villa at dusk with warm golden interior lighting"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-8xl flex-col justify-center px-5 pt-28 lg:px-10">
        <div className="max-w-2xl">
          {/* Intro with gold lines */}
          <div className="animate-fade-in flex items-center gap-4 opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="h-px w-10 bg-gold-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Welcome to AVYAAVATI Realtors
            </span>
            <span className="h-px w-10 bg-gold-300" />
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

          {/* Tagline */}
          <div
            className="animate-fade-up mt-6 text-sm font-semibold uppercase tracking-widest text-gold-300 opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            Trust, Transparency &amp; Value
          </div>

          {/* Supporting paragraph */}
          <p
            className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-mist opacity-0"
            style={{ animationDelay: '0.75s' }}
          >
            Discover thoughtfully curated residential, commercial and investment
            opportunities with professional guidance and a commitment to transparent
            real estate solutions.
          </p>

          {/* Buttons */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.9s' }}
          >
            <Link
              to="/residential"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.45)]"
            >
              Explore Properties
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-ivory transition-all duration-300 hover:border-gold-300 hover:bg-gold-300/10"
            >
              Connect With Our Experts
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 hidden items-center gap-3 lg:flex">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-mist/40 pt-1.5">
            <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-gold-300" />
          </div>
          <span className="text-xs uppercase tracking-widest text-mist/70">Scroll Down</span>
        </div>
      </div>

      {/* Floating category panel */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 lg:px-10 lg:pb-7">
        <div className="glass-panel mx-auto max-w-8xl rounded-2xl">
          <div className="no-scrollbar flex items-stretch gap-0 overflow-x-auto rounded-2xl">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="group flex min-w-[180px] flex-1 items-center gap-3 px-4 py-4 transition-colors hover:bg-gold-300/8 lg:min-w-0 lg:px-5 lg:py-5"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                  <CategoryIcon index={i} />
                </span>
                <span className="whitespace-nowrap text-xs font-medium leading-tight text-mist transition-colors group-hover:text-gold-300 lg:text-[13px]">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick contact floating */}
      <div className="absolute bottom-28 right-6 z-20 hidden flex-col gap-3 xl:flex">
        {[
          { icon: Phone, href: 'tel:+910000000000', label: 'Call' },
          { icon: MessageCircle, href: '/contact', label: 'WhatsApp' },
          { icon: Mail, href: 'mailto:contact@avyaavati.com', label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/30 bg-navy-800/60 text-gold-300 backdrop-blur-md transition-all duration-300 hover:border-gold-300 hover:bg-gold-300/10"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}
