import ServiceCard from "./ServiceCard";
import { services } from "../../constants/general";

const ServicesSection = () => {
   const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 w-full mx-auto">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} 
           onClick={() => scrollTo(service.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
