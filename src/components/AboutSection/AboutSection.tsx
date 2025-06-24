import { aboutImage } from "../../constants/images";
const AboutSection = () => {
  return (
    <section className="bg-white py-8 px-8 max-w-7xl 2xl:max-w-full 2xl:px-32 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About <span className="text-primary">Us</span></h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 text-left ">
          <h3 className="text-lg md:text-2xl font-bold text-primary mb-4">We Are IntelliInsights</h3>
          <p className="text-gray-700 text-justify text-sm md:text-lg leading-relaxed">
            Welcome to IntelliInsights, where your digital dreams become reality. We blend creativity with
            cutting-edge technology to create stunning and high-performing websites. Our passionate team delivers
            tailored web solutions to elevate your brand and engage your audience. Whether launching new ventures
            or refreshing old ones, we're your guide every step of the way. Let's build something extraordinary!
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
