// import type { ServiceCardProps } from "../../lib/types";

// const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
//   return (
//    <div className="bg-white shadow-md border border-gray-600 hover:scale-105 hover:cursor-pointer rounded-lg p-6 flex flex-col items-center text-center transition duration-300 ease-in-out">

//       <img src={icon} alt={title} className="h-24 mb-4 object-contain" />
//       <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
//       <p className="text-gray-700 text-sm text-justify leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export default ServiceCard;







import React from 'react';
import type { Service } from '../../lib/types';

type Props = { 
  service: Service;
  onClick: () => void;
 };

const ServiceCard: React.FC<Props> = ({ service, onClick }) => (
  <div
  onClick={onClick}
  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition hover:cursor-pointer">
    <img
      src={service.image}
      alt={service.title}
      className="h-48 w-full object-cover bg-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
      <p className="text-gray-600 text-sm">{service.summary}</p>
    </div>
  </div>
);

export default ServiceCard;
