import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section className="relative z-10 bg-white">
      {/* Full Width Map - Fully interactive and colorful */}
      <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3964.666993189886!2d125.1720392759173!3d6.115011993871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1709650000000!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="General Santos City Hall Map"
        ></iframe>

        {/* Fixed Map Pin Overlay - Non-interactive */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex flex-col items-center">
            {/* Pulsing shadow/glow effect on ground */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/25 rounded-full blur-md animate-pulse"></div>

            {/* Bouncing pin with integrated label */}
            <div className="animate-bounce">
              {/* Name Label - connected to pin */}
              <div className="relative mb-1">
                <div className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg shadow-red-600/30">
                  <p className="text-xs font-semibold text-white whitespace-nowrap tracking-wide">General Santos City Hall</p>
                </div>
                {/* Connector line from label to pin */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-red-600"></div>
              </div>

              {/* Pin marker */}
              <div className="relative flex justify-center">
                {/* Pin circle */}
                <div className="w-10 h-10 bg-gradient-to-b from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 ring-2 ring-white/80">
                  <MapPin size={20} className="text-white" strokeWidth={2.5} />
                </div>
                {/* Pin pointer */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-red-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;