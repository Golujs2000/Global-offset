import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          light 
            ? 'bg-white/10 text-accent border border-white/15' 
            : 'bg-primary/5 text-secondary border border-secondary/15'
        }`}>
          {badge}
        </span>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-primary'
      }`}>
        {title}
      </h2>

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
