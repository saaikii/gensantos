import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="relative z-10 bg-white">
      {/* Full Width Map */}
      <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-700 relative z-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.666993189886!2d125.1720392759173!3d6.115011993871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79f4a663e2607%3A0x676233155792440!2sCity%20Hall%20Dr%2C%20General%20Santos%20City%2C%20South%20Cotabato!5e0!3m2!1sen!2sph!4v1709650000000!5m2!1sen!2sph" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="General Santos City Hall Map"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;