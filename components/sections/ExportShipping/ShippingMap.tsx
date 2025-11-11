"use client";

import { useState } from "react";

interface MarkerData {
  id: number;
  number: string;
  country: string;
  flag: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
  popupPosition: "top" | "bottom" | "left" | "right";
}

const markers: MarkerData[] = [
  {
    id: 1,
    number: "01",
    country: "Brazil",
    flag: "🇧🇷",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "45%",
      left: "28%",
    },
    popupPosition: "bottom",
  },
  {
    id: 2,
    number: "02",
    country: "Democratic Republic of Congo",
    flag: "🇨🇩",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "50%",
      left: "50%",
    },
    popupPosition: "top",
  },
  {
    id: 3,
    number: "03",
    country: "Sudan",
    flag: "🇸🇩",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "42%",
      left: "52%",
    },
    popupPosition: "bottom",
  },
  {
    id: 4,
    number: "04",
    country: "Algeria",
    flag: "🇩🇿",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "38%",
      left: "48%",
    },
    popupPosition: "bottom",
  },
  {
    id: 5,
    number: "05",
    country: "Mozambique",
    flag: "🇲🇿",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "58%",
      left: "53%",
    },
    popupPosition: "top",
  },
  {
    id: 6,
    number: "06",
    country: "Russia",
    flag: "🇷🇺",
    description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    position: {
      top: "25%",
      left: "68%",
    },
    popupPosition: "bottom",
  },
];

export default function ShippingMap() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [clickedMarker, setClickedMarker] = useState<number | null>(null);

  const handleMarkerHover = (markerId: number) => {
    // Only show popup on hover if it wasn't opened by click
    if (clickedMarker !== markerId) {
      setActiveMarker(markerId);
    }
  };

  const handleMarkerLeave = () => {
    // Only close popup on mouse leave if it wasn't opened by click
    if (clickedMarker !== activeMarker) {
      setActiveMarker(null);
    }
  };

  const handleMarkerClick = (markerId: number) => {
    if (activeMarker === markerId && clickedMarker === markerId) {
      // Close popup if clicking the same marker that's already open
      setActiveMarker(null);
      setClickedMarker(null);
    } else {
      // Open popup and mark it as clicked
      setActiveMarker(markerId);
      setClickedMarker(markerId);
    }
  };

  const handleClosePopup = () => {
    setActiveMarker(null);
    setClickedMarker(null);
  };

  return (
    <>
    <section className="container mx-auto px-4 mt-20 md:mt-30">
      <div>
      <img
          src="/assets/icons/ic_stars.png"
          alt="stars"
          className="w-auto h-5 md:h-6 mb-3 md:mb-4"
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground font-urbanist mb-3 md:mb-3.5">
        Shipping Maps
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground/50 font-urbanist font-medium">
        A meticulous journey of transforming natural coconut shells into high-performance charcoal briquettes trusted by global buyers.
        </p>
      </div>
    </section>
    <section className="w-full mt-10 sm:mt-16 md:mt-20 lg:mt-30">
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen max-h-[900px] overflow-hidden">
        {/* Background Map Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-map.png')" }}
        />

        {/* Markers Container */}
        <div className="absolute inset-0">
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute cursor-pointer transition-transform duration-200 hover:scale-110 z-10"
              style={{
                top: marker.position.top,
                left: marker.position.left,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => handleMarkerHover(marker.id)}
              onMouseLeave={handleMarkerLeave}
              onClick={() => handleMarkerClick(marker.id)}
              aria-label={`Marker ${marker.number} - ${marker.country}`}
            >
              {/* Marker Pin */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                <img
                  src="/assets/icons/ic_marker.png"
                  alt={`Marker ${marker.number}`}
                  className="w-full h-full object-contain"
                />
                {/* Number Overlay - Centered in marker, positioned higher */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateY(-20%)' }}>
                  <span className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-bold font-urbanist drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {marker.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popups Container - Outside markers for proper z-index */}
        {markers.map((marker) => (
          activeMarker === marker.id && (
            <div
              key={`popup-${marker.id}`}
              className="absolute z-100 w-[calc(100vw-2rem)] sm:w-auto sm:min-w-[320px] md:min-w-[360px] max-w-[70vw] sm:max-w-none border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg"
              style={{
                backgroundColor: '#05080E',
                opacity: 1,
                top: marker.popupPosition === "top" 
                  ? `calc(${marker.position.top} - 8px)` 
                  : marker.popupPosition === "bottom"
                  ? `calc(${marker.position.top} + 40px)`
                  : marker.position.top,
                left: marker.popupPosition === "left"
                  ? `calc(${marker.position.left} - 8px)`
                  : marker.popupPosition === "right"
                  ? `calc(${marker.position.left} + 40px)`
                  : marker.position.left,
                transform: marker.popupPosition === "top" || marker.popupPosition === "bottom"
                  ? "translate(-50%, -100%)"
                  : marker.popupPosition === "left"
                  ? "translate(-100%, -50%)"
                  : marker.popupPosition === "right"
                  ? "translate(0, -50%)"
                  : "translate(-50%, -50%)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full bg-transparent hover:bg-gray-200/20 border border-gray-200/50 hover:border-gray-200 transition-all duration-200 group"
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground/70 group-hover:text-foreground w-3.5 h-3.5 sm:w-4 sm:h-4"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>

              {/* Popup Arrow - Mobile: always top, Desktop: based on position */}
              <div
                className={`absolute w-0 h-0 border-8 ${
                  // Mobile: always show arrow pointing up (popup is below marker)
                  "bottom-full left-1/2 -translate-x-1/2 border-b-primary border-l-transparent border-r-transparent border-t-transparent sm:hidden"
                }`}
                style={{
                  bottom: "-8px",
                }}
              />
              <div
                className={`hidden sm:block absolute w-0 h-0 border-8 ${
                  marker.popupPosition === "top"
                    ? "top-full left-1/2 -translate-x-1/2 border-t-primary border-l-transparent border-r-transparent border-b-transparent"
                    : marker.popupPosition === "bottom"
                    ? "bottom-full left-1/2 -translate-x-1/2 border-b-primary border-l-transparent border-r-transparent border-t-transparent"
                    : marker.popupPosition === "left"
                    ? "left-full top-1/2 -translate-y-1/2 border-l-primary border-t-transparent border-b-transparent border-r-transparent"
                    : "right-full top-1/2 -translate-y-1/2 border-r-primary border-t-transparent border-b-transparent border-l-transparent"
                }`}
                style={
                  marker.popupPosition === "top"
                    ? { top: "-8px" }
                    : marker.popupPosition === "bottom"
                    ? { bottom: "-8px" }
                    : marker.popupPosition === "left"
                    ? { left: "-8px" }
                    : { right: "-8px" }
                }
              />

              {/* Popup Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg sm:text-xl font-bold text-foreground font-urbanist">
                    {marker.number}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-foreground font-urbanist">
                    {marker.country}
                  </span>
                  <span className="text-xl sm:text-2xl">{marker.flag}</span>
                </div>
                <p className="text-sm sm:text-base text-foreground/50 font-urbanist font-regular leading-relaxed max-w-100">
                  {marker.description}
                </p>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
    </>
  );
}
