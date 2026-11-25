import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'dark',
  className = '',
}: Props) {
  const isDark = theme === 'dark';
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-gold-300" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
            {eyebrow}
          </span>
          {align === 'center' && <span className="h-px w-8 bg-gold-300" />}
        </div>
      )}
      <h2
        className={`mt-4 font-serif text-4xl leading-[1.12] sm:text-5xl ${
          isDark ? 'text-ivory' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? 'text-mist' : 'text-navy-700/75'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
