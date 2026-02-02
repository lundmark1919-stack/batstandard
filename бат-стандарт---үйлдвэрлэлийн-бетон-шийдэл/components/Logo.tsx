
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} bg-[#1D3196] relative overflow-hidden shadow-inner flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Deep Blue Background already provided by parent div */}
        
        {/* Central "X" structure and white areas */}
        <path d="M0 0 L42 42 L42 58 L0 100 Z" fill="white" opacity="0.1" />
        <path d="M100 0 L58 42 L58 58 L100 100 Z" fill="white" opacity="0.1" />
        
        {/* Main white diagonal bars */}
        <path d="M0 0 L100 100" stroke="white" strokeWidth="12" fill="none" />
        <path d="M100 0 L0 100" stroke="white" strokeWidth="12" fill="none" />
        
        {/* Horizontal lines at top and bottom (Staircase effect) */}
        <g fill="none" stroke="#1D3196" strokeWidth="1.5">
          <line x1="15" y1="5" x2="85" y2="5" />
          <line x1="20" y1="10" x2="80" y2="10" />
          <line x1="25" y1="15" x2="75" y2="15" />
          <line x1="30" y1="20" x2="70" y2="20" />
          <line x1="35" y1="25" x2="65" y2="25" />
          <line x1="40" y1="30" x2="60" y2="30" />
          
          <line x1="15" y1="95" x2="85" y2="95" />
          <line x1="20" y1="90" x2="80" y2="90" />
          <line x1="25" y1="85" x2="75" y2="85" />
          <line x1="30" y1="80" x2="70" y2="80" />
          <line x1="35" y1="75" x2="65" y2="75" />
          <line x1="40" y1="70" x2="60" y2="70" />
        </g>

        {/* Center Gate/Symbol */}
        <rect x="46" y="44" width="8" height="12" fill="#1D3196" stroke="white" strokeWidth="1" />
        <line x1="50" y1="44" x2="50" y2="56" stroke="white" strokeWidth="1" />

        {/* Text placeholders (SVG text paths for diagonals) */}
        <defs>
          <path id="top-left" d="M10 15 L40 45" />
          <path id="top-right" d="M90 15 L60 45" />
          <path id="bottom-left" d="M10 85 L40 55" />
          <path id="bottom-right" d="M90 85 L60 55" />
        </defs>
        
        <text fontSize="5" fill="#1D3196" fontWeight="bold" className="uppercase font-serif">
          <textPath href="#top-left" startOffset="5%">MONGOLIAN</textPath>
        </text>
        <text fontSize="5" fill="#1D3196" fontWeight="bold" className="uppercase font-serif">
          <textPath href="#top-right" startOffset="5%">STANDART</textPath>
        </text>
        <text fontSize="5" fill="#1D3196" fontWeight="bold" className="uppercase font-serif">
          <textPath href="#bottom-left" startOffset="5%">BAT</textPath>
        </text>
        <text fontSize="5" fill="#1D3196" fontWeight="bold" className="uppercase font-serif">
          <textPath href="#bottom-right" startOffset="5%">COMPANY</textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
