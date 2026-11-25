import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Residential',
    href: '/residential',
    hasDropdown: true,
    children: [
      { label: 'All Residential', href: '/residential' },
      { label: 'Luxury Apartments', href: '/residential' },
      { label: 'Villas & Mansions', href: '/residential' },
      { label: 'Residential Plots', href: '/residential' },
      { label: 'Ready-to-Move', href: '/residential' },
    ],
  },
  {
    label: 'Commercial',
    href: '/commercial',
    hasDropdown: true,
    children: [
      { label: 'All Commercial', href: '/commercial' },
      { label: 'Office Spaces', href: '/commercial' },
      { label: 'Retail Shops', href: '/commercial' },
      { label: 'Corporate IT Parks', href: '/commercial' },
    ],
  },
  {
    label: 'Investment',
    href: '/investment',
    hasDropdown: true,
    children: [
      { label: 'Pre-Leased Commercial', href: '/investment' },
      { label: 'Growth Corridors', href: '/investment' },
      { label: 'Investment Due Diligence', href: '/investment' },
    ],
  },
  { label: 'Locations', href: '/locations' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" className="shrink-0 transition-transform group-hover:scale-105">
        <path
          d="M20 44V26l6-4v22h-6zm9 0V20l6-4v28h-6zm9 0V30l6 4v10h-6z"
          fill="#E0B064"
        />
        <rect x="15" y="44" width="34" height="3" rx="1.5" fill="#E0B064" />
      </svg>
      <div className="leading-none">
        <div className="font-serif text-xl tracking-wide text-ivory group-hover:text-gold-200 transition-colors">
          AVYAAVATI
        </div>
        <div className="mt-1 text-[9px] font-medium uppercase tracking-widest text-mist/70">
          Realtors Private Limited
        </div>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md py-3'
          : 'bg-navy-900/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 lg:px-10">
        <div className="flex items-center gap-5">
          <Logo />
          <div className="hidden h-8 w-px bg-gold-300/30 lg:block" />
          <div className="hidden text-[10px] font-semibold uppercase tracking-widest text-gold-300 lg:block">
            Trust, Transparency &amp; Value
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`group flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-300 font-semibold' : 'text-mist hover:text-gold-300'
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold-300 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180 text-gold-300' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.hasDropdown && item.children && (
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
                      openDropdown === item.label
                        ? 'visible opacity-100 translate-y-0'
                        : 'invisible opacity-0 translate-y-2'
                    }`}
                  >
                    <div className="min-w-56 overflow-hidden rounded-xl border border-gold-300/15 bg-navy-800/98 p-2 shadow-2xl backdrop-blur-md">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-mist transition-colors hover:bg-navy-700 hover:text-gold-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_24px_rgba(224,176,100,0.4)]"
          >
            Enquire Now
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-md p-2 text-ivory lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-900/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-h-[80vh] overflow-y-auto px-5 py-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-navy-700/60">
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  onClick={() => !item.hasDropdown && setMobileOpen(false)}
                  className="block py-3.5 text-base font-medium text-ivory hover:text-gold-300"
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <button
                    onClick={() =>
                      setMobileExpanded((p) => (p === item.label ? null : item.label))
                    }
                    className="p-2 text-mist"
                    aria-label="Expand"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileExpanded === item.label ? 'rotate-180 text-gold-300' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.hasDropdown && item.children && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === item.label ? 'max-h-96 pb-2' : 'max-h-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-4 text-sm text-mist hover:text-gold-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold-300 px-5 py-3 text-sm font-semibold text-navy-900"
          >
            Enquire Now <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
