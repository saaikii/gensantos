import React from 'react';
import { MapPin } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';

const LocationMap: React.FC = () => {
  return (
    <section className="relative z-10 bg-white">
      {/* Full Width Map - Fully interactive and colorful */}
      <ScrollReveal>
        <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] relative z-10">
          <iframe
            src="https://maps.google.com/maps?q=General%20Santos%20City%20Hall&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="General Santos City Hall Map"
            className="transition-all duration-500"
          ></iframe>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default LocationMap;