import { aboutImage } from "../../constants/images";
import { aboutInfo, fullCompanyName } from "../../constants/title";
const AboutSection = () => {
  return (
    <section className="bg-white py-8 px-4 max-w-7xl 2xl:max-w-full 2xl:px-32 mx-auto md:mt-12">
      <h1 className="text-4xl font-bold text-center mb-8">About <span className="text-primary">Us</span></h1>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 text-left ">
          <h3 className="text-lg md:text-2xl font-bold  mb-4 text-center md:text-start">We Are <span className="text-primary">{fullCompanyName}</span></h3>
          <p className="text-gray-700 text-justify text-sm/snug md:text-lg leading-relaxed">
           {aboutInfo}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={aboutImage} alt="About us" className="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
