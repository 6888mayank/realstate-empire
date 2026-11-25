import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
}

export function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  bgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-36 lg:pb-28 lg:pt-44">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 lg:px-10">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-mist/70">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight size={14} className="text-gold-300/60" />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="transition-colors hover:text-gold-300"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold-300">{crumb.label}</span>
              )}
            </div>
          ))}
          <ChevronRight size={14} className="text-gold-300/60" />
          <span className="text-gold-300">{title}</span>
        </nav>

        <Reveal>
          {badge && (
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold-300" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                {badge}
              </span>
              <span className="h-px w-8 bg-gold-300" />
            </div>
          )}

          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
