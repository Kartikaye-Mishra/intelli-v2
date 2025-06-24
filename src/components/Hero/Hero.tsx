import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { heroImage } from '../../constants/images';
import { Link } from 'react-router-dom';
import { companyInfo, websiteName } from '../../constants/title';
import { textConstants } from '../../constants/general';

const HeroSection = () => {
  return (
    <section id='hero'  className="w-full px-6 md:px-16 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
           {textConstants.welcomeToText} <span className="text-primary">{websiteName}</span> !
          </h1>
          <p className="mt-4 text-gray-700 text-justify leading-relaxed">
            {companyInfo}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/about">
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded shadow hover:bg-primary/90 hover:cursor-pointer">
               {textConstants.readMore}<FaArrowRight />
            </button>
               </Link>
               <Link to="/contact">
            <button className="flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded hover:bg-primary/10 hover:cursor-pointer">
              {textConstants.getInTouch} <FaEnvelope />
            </button>
               </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img src={heroImage} alt="Hero Graphic" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
