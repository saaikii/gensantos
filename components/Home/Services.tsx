import React from 'react';
import { FileText, Briefcase, Map, Building2, Phone, Calendar } from 'lucide-react';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  { id: '1', title: 'Business Permits', icon: <Building2 className="w-6 h-6" />, description: 'Apply or renew business licenses online', link: '#' },
  { id: '2', title: 'Job Portal', icon: <Briefcase className="w-6 h-6" />, description: 'Find opportunities in GenSan', link: '#' },
  { id: '3', title: 'Civil Registry', icon: <FileText className="w-6 h-6" />, description: 'Birth, Marriage, Death certificates', link: '#' },
  { id: '4', title: 'Tourism Guide', icon: <Map className="w-6 h-6" />, description: 'Explore hotels, spots, and food', link: '#' },
  { id: '5', title: 'Emergency', icon: <Phone className="w-6 h-6" />, description: 'Hotlines and safety information', link: '#' },
  { id: '6', title: 'Events Calendar', icon: <Calendar className="w-6 h-6" />, description: 'Festivals and city activities', link: '#' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">e-Services & Quick Links</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Access government services from the comfort of your home. Fast, secure, and convenient.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <a 
              key={service.id} 
              href={service.link}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;