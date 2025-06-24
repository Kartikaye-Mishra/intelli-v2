import React from 'react';
import type { Service } from '../../lib/types';


type Props = { service: Service; reverse?: boolean };

const ServiceDetail: React.FC<Props> = ({ service, reverse }) => (
  <div
  id={service.id}
    className={`flex flex-col lg:flex-row items-center gap-8 py-16 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <div className="lg:w-1/2 flex-shrink-0">
      <div className="w-full h-64  overflow-hidden rounded-lg shadow-md">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>

    <div className="lg:w-1/2 space-y-4">
      <h4 className="text-2xl font-bold text-primary">{service.title}</h4>
      <p className="text-gray-700 leading-relaxed">{service.details}</p>
    </div>
  </div>
);

export default ServiceDetail;
