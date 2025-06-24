// import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import type { IconType } from "react-icons";
// import { carousalData as cardData } from "../../constants/general";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function SampleNextArrow(props: ArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "end",
//         color: "black",
//         background: "none", // No background
//         width: "40px", // Optional, adjust as needed
//         height: "40px", // Optional, adjust as needed
//       }}
//       children={<FaChevronRight size={24} />}
//       onClick={onClick}
//     ></div>
//   );
// }

// function SamplePrevArrow(props: ArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "start",
//         color: "black",
//         background: "none", // No background
//         width: "40px", // Optional, adjust as needed
//         height: "40px", // Optional, adjust as needed
//       }}
//       children={<FaChevronLeft size={24} />}
//       onClick={onClick}
//     ></div>
//   );
// }

// const InfoCard = ({
//   icon: Icon,
//   title,
//   description,
//   isActive,
// }: InfoCardInterface) => {
//   return (
//     <div
//       className={` h-[375px] custom-tiny-height-Info lg700:h-[620px] md:h-[530px] lg:h-[480px] xl:h-[420px] 2xl:h-[380px]  w-full p-8  min-h-[320px]  rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 transform  ${
//         isActive ? "bg-white scale-105 shadow-lg" : "bg-gray-100"
//       }`}
//     >
//       <Icon
//         className={`text-5xl mb-4 ${
//           isActive ? "text-primary" : "text-gray-600"
//         }`}
//       />
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <ul className="text-gray-600 list-disc list-inside flex-grow">
//         {description.map((point, index) => (
//           <li key={index} className="mb-1 text-left">
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const FeaturesCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Track active slide
//   const settings = {
//     dots: true,
//     infinite: true,
//     centerMode: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     beforeChange: (_current: number, next: number) => setActiveIndex(next),
//     responsive: [
//       {
//         breakpoint: 1024, // For desktops
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 700, // For mobile devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <style>
//         {`
//           .slick-next::before,
//           .slick-prev::before {
//             display: none !important; /* Hides the default Slick arrow icons */
//           }
//             @media (max-width: 360px) {
//   .custom-tiny-height-Info {
//     height: 470px; /* Height for screens up to 352px */
//   }
//   .custom-tiny-height-div {
//     height: 500px; /* Height for screens up to 352px */
//   }
// }
//         `}
//       </style>
//       <div className="bg-primary/10 py-8 px-8" id="services">
//         <h2 className="text-center font-bold text-xl mb-6">
//           Explore What We Offer
//         </h2>
//         <Slider {...settings}>
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className={`${
//                 index === activeIndex ? "pt-4" : "pt-6"
//               } rounded-t-lg  px-2 md:px-3 lg:px-8 flex h-[375px] custom-tiny-height-div lg700:h-[640px] lg700:mb-4 md:h-[550px] lg:h-[500px] xl:h-[440px] 2xl:h-[400px]`}
//             >
//               <div className="flex-grow">
//                 {" "}

//                 <InfoCard
//                   icon={card.icon}
//                   title={card.title}
//                   description={card.description}
//                   isActive={index === activeIndex}
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default FeaturesCarousel;

// interface InfoCardInterface {
//   icon: IconType;
//   title: string;
//   description: Array<string>;
//   isActive: boolean;
// }
// interface ArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: () => void;
// }

// HeroCarousel.tsx
// import { useEffect, useState } from "react";

// interface Slide {
//   url: string;
//   title: string;
//   subtitle: string;
//   cta: string;
// }

// const slides: Slide[] = [
//   {
//     url: "https://media.istockphoto.com/id/2183748780/photo/artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBHginkDrPKr1r0BtEe9PkJ2CtghLgbhoYR-Hhn2o3Q=",
//     title: "Empower Innovation with AI",
//     subtitle: "Unlock smart solutions using next‑gen tech",
//     cta: "Discover More",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
//     title: "Defend Your Digital Frontier",
//     subtitle: "Cutting‑edge cybersecurity solutions",
//     cta: "Discover More",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1667984390533-64bdefe719ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
//     title: "Scale with Cloud Power",
//     subtitle: "Reliable infrastructure at your fingertips",
//     cta: "Discover More",
//   },
// ];

// const HeroCarousel = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-rotate every 6s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const { url, title, subtitle, cta } = slides[index];

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {slides.map((s, i) => (
//         <img
//           key={i}
//           src={url}
//           alt={`Slide ${i + 1}`}
//           className={`
//             absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
//             ${i === index ? "opacity-100" : "opacity-0"}
//           `}
//         />
//       ))}

//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Centered overlayed content */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//         <h1 className="text-white font-bold text-4xl md:text-6xl drop-shadow-lg">
//           {title}
//         </h1>
//         <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow">
//           {subtitle}
//         </p>
//         <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg shadow-lg">
//           {cta}
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             className={`
//               w-3 h-3 rounded-full transition-all
//               ${i === index ? "bg-white scale-110" : "bg-white/50"}
//             `}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

import { useEffect, useState } from "react";

import { slides } from "../../constants/general";



const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen lg:h-[95vh] overflow-hidden ">

      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-snappy ${
          fade ? "opacity-80" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${slides[index].url})` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white font-bold text-4xl md:text-6xl drop-shadow-lg">
          {slides[index].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow">
          {slides[index].subtitle}
        </p>
        <button
         onClick={() => {
    const el = document.getElementById('materials');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
        className="mt-6 px-8 py-3 bg-white font-semibold hover:bg-gray-200 hover:cursor-pointer rounded-lg text-primary text-lg shadow-lg">
          {slides[index].cta}
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
