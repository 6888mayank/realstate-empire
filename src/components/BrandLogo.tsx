import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'navbar' | 'footer' | 'badge' | 'symbol';
  className?: string;
  imgClassName?: string;
}

export function BrandLogo({
  variant = 'navbar',
  className = '',
  imgClassName = '',
}: BrandLogoProps) {
  if (variant === 'badge') {
    return (
      <Link to="/" className={`inline-block group ${className}`}>
        <img
          src="/logo-gold.png"
          alt="AVYAAVATI REALTORS"
          className={`h-28 sm:h-36 w-auto object-contain drop-shadow-[0_4px_24px_rgba(224,176,100,0.25)] transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
        />
      </Link>
    );
  }

  if (variant === 'footer') {
    return (
      <Link to="/" className={`block group ${className}`}>
        <div className="flex flex-col items-start gap-3">
          <img
            src="/logo-gold.png"
            alt="AVYAAVATI REALTORS — Fostering Trust Transparency and Value"
            className={`h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
          />
        </div>
      </Link>
    );
  }

  if (variant === 'symbol') {
    return (
      <Link to="/" className={`inline-flex items-center group ${className}`}>
        <img
          src="/logo-symbol.png"
          alt="AVYAAVATI REALTORS Emblem"
          className={`h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110 ${imgClassName}`}
        />
      </Link>
    );
  }

  // Default 'navbar' variant
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/logo-symbol.png"
        alt="AVYAAVATI REALTORS"
        className="h-11 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(224,176,100,0.3)]"
      />
      <div className="leading-none">
        <div className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-ivory group-hover:text-gold-200 transition-colors">
          AVYAAVATI
        </div>
        <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-300">
          REALTORS
        </div>
        <div className="mt-0.5 hidden sm:block text-[7.5px] font-medium uppercase tracking-widest text-mist/60">
          Residential • Commercial • Industrial
        </div>
      </div>
    </Link>
  );
}
