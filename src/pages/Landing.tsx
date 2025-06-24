import FeaturesCarousel from "../components/Carousal/Carousal";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import HeroSection from "../components/Hero/Hero";
import Materials from "../components/Materials/Materials";
import ExploreServicesCTA from "../components/Services/ExploreServices";


export default function Landing() {
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
