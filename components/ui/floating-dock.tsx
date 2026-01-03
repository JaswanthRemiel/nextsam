"use client";

import React from "react";

// Types
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface DockIcon {
  src: string;
  alt: string;
  label?: string;
  href?: string;
  onClick?: () => void;
}

const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

// Glass Effect Wrapper Component
const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const glassStyle = {
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45), 0 0 30px rgba(255, 255, 255, 0.14)",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  return (
    <div className="relative">
      <div
        className={`relative flex font-semibold text-black transition-all duration-500 ${className}`}
        style={glassStyle}
      >
        {/* Glass Layers */}
        <div
          className="absolute inset-0 z-0 rounded-xl overflow-hidden"
          style={{
            backdropFilter: "blur(16px) saturate(220%)",
            filter: "url(#glass-distortion)",
            isolation: "isolate",
          }}
        />
        <div
          className="absolute inset-0 z-10 rounded-xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.18))",
          }}
        />
        <div
          className="absolute inset-0 z-20 rounded-xl overflow-hidden"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255, 255, 255, 0.7), inset 0 -1px 0 rgba(255, 255, 255, 0.25), inset 2px 2px 6px rgba(255, 255, 255, 0.25), inset -2px -2px 6px rgba(0, 0, 0, 0.18)",
          }}
        />

        {/* Content */}
        <div className="relative z-30">{children}</div>
      </div>
    </div>
  );
};

// Dock Component
const GlassDock: React.FC<{ icons: DockIcon[] }> = ({ icons }) => (
  <GlassEffect className="rounded-xl p-1">
    <div className="flex items-center justify-center gap-0.5 rounded-xl p-1 py-0 px-0.5">
      {icons.map((icon, index) => {
        const IconWrapper = icon.href ? "a" : "div";
        const wrapperProps = icon.href
          ? { href: icon.href, target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <IconWrapper key={index} {...wrapperProps} className="relative group">
            {icon.label && (
              <div className="absolute -right-7 -top-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-[100]"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              >
                <div className="px-2 py-0.5 bg-[#007AFF] backdrop-blur-md text-white text-[9px] font-semibold rounded-md shadow-xl whitespace-nowrap">
                  {icon.label}
                </div>
              </div>
            )}
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 cursor-pointer"
              style={{
                transformOrigin: "center center",
                transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              onClick={icon.onClick}
            />
          </IconWrapper>
        );
      })}
    </div>
  </GlassEffect>
);

// Main Floating Dock Component
export const FloatingDock: React.FC<{ icons: DockIcon[] }> = ({ icons }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if at bottom of page (with 50px threshold)
      const isAtBottom = windowHeight + currentScrollY >= documentHeight - 50;
      
      if (isAtBottom) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <GlassFilter />
      <div 
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <GlassDock icons={icons} />
      </div>
    </>
  );
};
