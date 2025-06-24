import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
import ServiceDetail from '../components/Services/ServicesDetail';
import { services } from '../constants/general';

const ServicesPage: React.FC = () => {
   const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="font-sans ">
      {/* Hero */}
      <section className="bg-gray-50 py-24 px-6 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          At IntelliInsights we offer a full spectrum of digital services 
          to launch, grow, and scale your online presence.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="py-16 px-6  mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <ServiceCard key={svc.id} service={svc}  onClick={() => scrollTo(svc.id)}/>
        ))}
      </section>

      {/* Detailed Sections */}
      <section className="bg-white px-6">
        {services.map((svc, idx) => (
          <ServiceDetail
            key={svc.id}
            service={svc}
            reverse={idx % 2 === 1}
          />
        ))}
      </section>

      {/* Call To Action */}
      <section className="bg-primary py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">Ready To Get Started?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Contact us today and let’s discuss how we can bring your project to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
