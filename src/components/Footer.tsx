import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, ArrowRight, MapPin } from 'lucide-react';
import { CORPORATE_OFFICE } from '@/data/constants';
import { BrandLogo } from '@/components/BrandLogo';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers & Hiring', href: '/careers' },
      { label: 'Why Choose Us', href: '/about' },
      { label: 'Client Journey', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Residential',
    links: [
      { label: 'Luxury Apartments', href: '/residential' },
      { label: 'Villas & Mansions', href: '/residential' },
      { label: 'Residential Plots', href: '/residential' },
      { label: 'Ready-to-Move', href: '/residential' },
    ],
  },
  {
    title: 'Commercial',
    links: [
      { label: 'Office Spaces', href: '/commercial' },
      { label: 'Retail Shops', href: '/commercial' },
      { label: 'Commercial Buildings', href: '/commercial' },
      { label: 'Business Hubs', href: '/commercial' },
    ],
  },
  {
    title: 'Advisory & Markets',
    links: [
      { label: 'Investment Yields', href: '/investment' },
      { label: 'Gurugram & Corridors', href: '/locations' },
      { label: 'Insights & Blog', href: '/insights' },
      { label: 'Client Enquiries', href: '/contact' },
    ],
  },
];

const LEGAL = ['Privacy Policy', 'Terms & Conditions', 'RERA Disclaimer'];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-ivory">
      {/* CTA band */}
      <div className="border-b border-navy-700/60 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-6 px-5 py-12 text-center lg:flex-row lg:px-10 lg:text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              Personalized Real Estate Advisory
            </span>
            <h3 className="mt-2 font-serif text-3xl text-ivory sm:text-4xl">
              Ready to Discover Your Next Property?
            </h3>
            <p className="mt-2 text-sm text-mist max-w-xl">
              Connect with our Gurugram advisory desk or visit our corporate office in Sector 69 for transparent guidance.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gold-200 hover:shadow-[0_0_30px_rgba(224,176,100,0.4)]"
          >
            Schedule a Consultation
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-8xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <BrandLogo variant="footer" />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Creating meaningful real estate experiences through transparency, professional
              guidance and thoughtfully curated property opportunities.
            </p>

            <div className="mt-4 inline-block rounded-lg border-l-2 border-gold-300 bg-navy-800/60 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                Fostering Trust, Transparency &amp; Value
              </span>
            </div>

            {/* Corporate Address Block */}
            <div className="mt-5 rounded-xl border border-navy-700/80 bg-navy-800/60 p-4 max-w-md">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-300 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <div className="font-semibold text-ivory">Corporate Office:</div>
                  <div className="text-mist mt-0.5">{CORPORATE_OFFICE.fullAddress}</div>
                  <div className="mt-2 text-[11px] text-emerald-400 font-medium">
                    Currently Operational in Gurugram (Delhi-NCR) • Pan-India Expansion Pipeline
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/60 text-mist transition-all duration-300 hover:border-gold-300 hover:bg-gold-300/10 hover:text-gold-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-mist transition-colors hover:text-gold-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy-700/60 pt-6">
          {LEGAL.map((l) => (
            <span
              key={l}
              className="text-xs text-mist/80 cursor-pointer hover:text-gold-300 transition-colors"
            >
              {l}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-mist/60">
          © {new Date().getFullYear()} AVYAAVATI REALTORS PRIVATE LIMITED. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
