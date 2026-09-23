import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkColor?: 'forest' | 'white';
  productSubtitle?: string;
  emblemClassName?: string;
}

/**
 * TerraSat Logo:
 * Six-blade pinwheel/asterisk mark (three crossing bars) representing spaceborne observation.
 * Color: Lime (#CFF4A7) on transparent or forest.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 32,
  className = '',
  showWordmark = true,
  wordmarkColor = 'white',
  productSubtitle = 'Impact Co. · Climate Intelligence',
  emblemClassName = 'text-[#CFF4A7]',
}) => {
  const bladePoints = '0,0 0,-84 28,-84 28,-16.166';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="-100 -100 200 200"
        fill="currentColor"
        className={`shrink-0 transition-transform duration-300 hover:rotate-30 ${emblemClassName}`}
        aria-label="TerraSat pinwheel emblem"
        role="img"
      >
        <polygon points={bladePoints} transform="rotate(0)" />
        <polygon points={bladePoints} transform="rotate(60)" />
        <polygon points={bladePoints} transform="rotate(120)" />
        <polygon points={bladePoints} transform="rotate(180)" />
        <polygon points={bladePoints} transform="rotate(240)" />
        <polygon points={bladePoints} transform="rotate(300)" />
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-headline text-xl font-extrabold tracking-tight ${
              wordmarkColor === 'white' ? 'text-white' : 'text-[#1D3130]'
            }`}
          >
            TerraSat
          </span>
          {productSubtitle && (
            <span className="text-[10px] tracking-wider uppercase font-mono font-medium text-[#CFF4A7]/90 mt-0.5">
              {productSubtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
