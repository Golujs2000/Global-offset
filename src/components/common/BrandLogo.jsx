import React from 'react';
import brandLogoIcon from '../../assets/layered-paper-g-logo.png';

/**
 * BrandLogo component that uses the official 'Layered Paper G Logo.png'
 * paired with crisp typography styled exactly like the original logo.
 */
export default function BrandLogo({ variant = 'header', className = '' }) {
  const isDark = variant === 'footer';

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* Official 'Layered Paper G Logo' Icon */}
      <img
        src={brandLogoIcon}
        alt="Global Offset Logo"
        className={`${
          variant === 'footer' ? 'h-12 sm:h-14' : 'h-10 min-[380px]:h-11 sm:h-12'
        } w-auto object-contain shrink-0`}
        width="48"
        height="48"
        loading="eager"
      />

      {/* Vertical orange dividing accent line */}
      <div 
        className={`${
          variant === 'footer' ? 'h-10 sm:h-11' : 'h-8 min-[380px]:h-9 sm:h-10'
        } w-[2.5px] bg-[#EA5A0C] rounded-full shrink-0`}
      ></div>

      {/* Typography: GLOBAL OFFSET in ONE line, big and bold */}
      <div className="flex flex-col justify-center text-left leading-none">
        <div className="flex items-center gap-1.5 leading-none">
          <span 
            className={`${
              variant === 'footer' 
                ? 'text-2xl sm:text-[26px]' 
                : 'text-[17px] min-[380px]:text-[19px] sm:text-[22px] lg:text-[25px]'
            } font-[900] tracking-tight uppercase leading-none ${
              isDark ? 'text-white' : 'text-[#0C1A30]'
            }`}
          >
            GLOBAL
          </span>
          <span 
            className={`${
              variant === 'footer' 
                ? 'text-2xl sm:text-[26px]' 
                : 'text-[17px] min-[380px]:text-[19px] sm:text-[22px] lg:text-[25px]'
            } font-[900] tracking-tight uppercase text-[#EA5A0C] leading-none`}
          >
            OFFSET
          </span>
        </div>

        {/* Subline 1: PRINTING & PAPER SOLUTIONS — */}
        <div 
          className={`${
            variant === 'footer' 
              ? 'text-[7.5px] sm:text-[8.5px]' 
              : 'text-[6px] min-[380px]:text-[6.5px] sm:text-[7.5px] lg:text-[8.2px]'
          } font-[800] tracking-[0.18em] sm:tracking-[0.22em] uppercase mt-1 flex items-center gap-1 leading-none ${
            isDark ? 'text-gray-200' : 'text-[#0C1A30]'
          }`}
        >
          <span>PRINTING &amp; PAPER SOLUTIONS</span>
          <span className="w-2 sm:w-2.5 h-[1px] bg-current opacity-70"></span>
        </div>

        {/* Subline 2: PATNA, BIHAR — */}
        <div 
          className={`${
            variant === 'footer' 
              ? 'text-[6.5px] sm:text-[7.5px]' 
              : 'text-[5px] min-[380px]:text-[5.5px] sm:text-[6.5px] lg:text-[7.2px]'
          } font-[800] tracking-[0.2em] sm:tracking-[0.24em] uppercase flex items-center gap-1 mt-[2px] leading-none ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <span>PATNA, BIHAR</span>
          <span className="w-1.5 sm:w-2 h-[1px] bg-current opacity-70"></span>
        </div>
      </div>
    </div>
  );
}
