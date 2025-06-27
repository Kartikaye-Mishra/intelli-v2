import { useLocation } from "react-router-dom";
import FeaturesCarousel from "../components/Carousal/Carousal";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import HeroSection from "../components/Hero/Hero";
import Materials from "../components/Materials/Materials";
import ExploreServicesCTA from "../components/Services/ExploreServices";
import { useEffect } from "react";


export default function Landing() {
    const location = useLocation();

  useEffect(() => {
    if (location.hash === '#getintouch') {
      const el = document.getElementById('getintouch');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
   <FeaturesCarousel />
   <HeroSection />
   <Materials />
   <ExploreServicesCTA />
   <GetInTouch />
    </>
  )
}
