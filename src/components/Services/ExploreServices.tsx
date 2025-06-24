import { useNavigate } from "react-router-dom";
import { ExploreServicesContent as service } from "../../constants/general";

const ExploreServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white px-6 py-16 ">
      <div
        className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
          service.reverse ? "flex-row-reverse" : ""
        }`}
      >


        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            {service.title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">{service.description}</p>
          <button
            onClick={() => navigate(service.link)}
            className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary/90 transition hover:cursor-pointer"
          >
            {service.buttonText}
          </button>
        </div>


        <div className="w-4/5 lg:w-1/2 flex-shrink-0">
          <div className="w-full ">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default ExploreServicesSection;
