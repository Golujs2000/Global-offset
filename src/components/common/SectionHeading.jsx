import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionHeading({
  badge,
  badgeLink,
  title,
  titleLink,
  subtitle,
  centered = true,
  light = false
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        badgeLink ? (
          <Link to={badgeLink} className="inline-block group" title={`View ${badge}`}>
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 transition-all cursor-pointer ${
              light 
                ? 'bg-white/10 text-accent border border-white/15 hover:bg-white/20' 
                : 'bg-primary/5 text-secondary border border-secondary/15 hover:bg-secondary/10 hover:border-secondary/30'
            }`}>
              <span>{badge}</span>
              <span className="text-[10px] opacity-75 group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
          </Link>
        ) : (
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            light 
              ? 'bg-white/10 text-accent border border-white/15' 
              : 'bg-primary/5 text-secondary border border-secondary/15'
          }`}>
            {badge}
          </span>
        )
      )}
      
      {titleLink ? (
        <Link to={titleLink} className="group inline-block cursor-pointer" title={`View ${title}`}>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight group-hover:text-secondary transition-colors ${
            light ? 'text-white' : 'text-primary'
          }`}>
            {title}
          </h2>
        </Link>
      ) : (
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          light ? 'text-gray-300' : 'text-text-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
