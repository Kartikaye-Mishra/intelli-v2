import type { ExploreServicesSection, NavItem, Service, Slide } from "../lib/types";
import { IoMdHome } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import type { MaterialItem } from "../lib/types";
import { webdevImg, seoImg, dataanalysisImg, designImg, webdesignServiceImg, websiteServiceImg, fullstackerviceImg, mobileServiceImg, ecommerceServiceImg, softwareServiceImg, rashiAvatar, phaniAvatar, shikhaAvatar, sarveshAvatar, exploreServicesImage } from "./images";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import {
  FaHome,
  FaHeadset,
  FaLightbulb,
  FaChartBar,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

export const navItems: NavItem[] = [
  {
    icon: IoMdHome,
    label: "home",
    path: "/",
  },
  {
    icon: FaAddressCard,
    label: "about",
    path: "/about",
  },
  {
    icon: MdOutlineMiscellaneousServices,
    label: "services",
    path: "/services",
  },
  {
    icon: FaPhoneAlt,
    label: "contact us",
    path: "/contact",
  },
];


export const materials: MaterialItem[] = [
  { title: 'Web Development', imgSrc: webdevImg },
  { title: 'Design', imgSrc: designImg },
  { title: 'Data Analysis', imgSrc: dataanalysisImg },
  { title: 'SEO', imgSrc: seoImg },
];


export const servicesInitial = [
  {
    title: "Software Development",
    description:
      "At IntelliInsights, we specialize in delivering high-quality, scalable software solutions tailored to your business needs. Our services include end-to-end software development, technology consulting, cloud migration, application integration, and ongoing support — ensuring your systems are robust, efficient, and future-ready.",
    icon: softwareServiceImg,
  },
  {
    title: "Website Development",
    description:
      "At IntelliInsights, we craft responsive, user-centric websites that elevate your brand and drive engagement. Our expert web developers combine modern design principles with cutting-edge technology to deliver fast, secure, and scalable web solutions that adapt to the evolving digital landscape and meet your business goals.",
    icon: websiteServiceImg,
  },
  {
    title: "Full Stack Development",
    description:
      "Our full-stack developers at IntelliInsights are proficient across the entire development lifecycle — from initial concept and architecture to the final, fully-deployed product. With expertise in both front-end and back-end technologies, we build robust, scalable, and maintainable applications that deliver seamless user experiences and business value.",
    icon: fullstackerviceImg,
  },
  {
    title: "Mobile Application Development",
    description:
      "At IntelliInsights, we design and develop high-performance mobile applications tailored for both Android and iOS platforms. Our mobile app solutions combine intuitive user interfaces with powerful backend systems to ensure smooth performance, scalability, and a seamless user experience. From concept to deployment, we bring your mobile vision to life.",
    icon: mobileServiceImg,
  },
  {
    title: "Website Design",
    description:
      "Our skilled team of designers and developers collaborate to deliver visually compelling, user-friendly websites optimized for a wide range of platforms and devices. We focus on creating intuitive designs that enhance user engagement while reflecting your brand’s unique identity.",
    icon: webdesignServiceImg,
  },
  {
    title: "E-Commerce Development",
    description:
      "At IntelliInsights, we provide comprehensive eCommerce solutions designed to drive sales and enhance customer experience. From platform selection and custom development to secure payment integration and scalable architecture, we deliver everything your eCommerce project needs for success — all under one roof.",
    icon: ecommerceServiceImg,
  },
];


export const leaders = [
  {
    name: "Shikha",
    title: "Experienced Full-Stack Developer With A Strong Background In Scalable Systems And Architecture Design.",
    role: "Full-Stack Developer | Java | Python | 10+ Yrs Experience",
    image: shikhaAvatar,
    handle: "@Techarchitect",
  },
  {
    name: "Rashi",
    title: "Frontend Expert With 6+ Years Of Experience In Building Responsive, High-Performance Web Interfaces.",
    role: "Frontend Developer | JavaScript | React | Angular",
    image: rashiAvatar,
    handle: "@Uiwizard",
  },
  {
    name: "Phanindhra",
    title: "Full-Stack Developer With A Creative Mindset And Hands-On Experience In Building Complete Web Solutions.",
    role: "Full-Stack Developer | React | Node",
    image: phaniAvatar,
    handle: "@CodeInnovator",
  },
  {
    name: "Sarvesh",
    title: "Specialist In Angular And Java With 5 Years Of Experience In Developing Enterprise-Grade Applications.",
    role: "Frontend & Backend Developer | Angular | Java",
    image: sarveshAvatar,
    handle: "@SarvTech",
  },
];

export const textConstants = {
  welcomeToText: ' Welcome To',
  readMore: 'Read More',
  getInTouch: 'Get In Touch'
}


export const carousalData = [
  {
    id: 1,
    title: "Centralized Data Management",
    description: [
      "Securely store, organize, and manage all your property and client information in one centralized platform, making access and updates easier than ever.",
    ],
    icon: FaHome,
  },
  {
    id: 2,
    title: "Powerful Visualizations",
    description: [
      "Gain valuable insights into your data with dynamic charts and statistics, making it simple to track trends and performance.",
    ],
    icon: FaChartLine, // Replaced FaPaintBrush with FaChartLine for better relevance to visualizations
  },

  {
    id: 3,
    title: "Data-Driven Decisions",
    description: [
      "Make smarter, informed business decisions by using comprehensive analytics and reports to guide your strategies and optimize outcomes.",
    ],
    icon: FaChartBar, // Replaced FaLeaf with FaChartBar for a more fitting representation of data-driven decisions
  },

  {
    id: 4,
    title: "Customer Support",
    description: [
      "Our dedicated customer support team is here to assist you with any questions or issues you might have, ensuring a seamless and smooth experience throughout your journey.",
    ],
    icon: FaHeadset,
  },

  {
    id: 5,
    title: "Innovation",
    description: [
      "Embracing the latest technologies and innovative solutions to deliver exceptional results and exceed client expectations.",
    ],
    icon: FaLightbulb,
  },
  {
    id: 6,
    title: "Effortless Organization",
    description: [
      "Boost your productivity by keeping all your tasks and property data organized with a clean, intuitive interface designed for ease of use.",
    ],
    icon: FaTasks, // Replaced FaDollarSign with FaTasks to better reflect organization
  },
];


export const slides: Slide[] = [
  {
    // url: "https://media.istockphoto.com/id/1957022961/photo/digital-brain-hologram-hud-artificial-intelligence-ai-machine-deep-learning-business.jpg?s=612x612&w=0&k=20&c=8Hq19O6HD2-J5aAsJnq7qumBG_4nntZfMSMqSrmYuCY=",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9BIdnKMUMhCkq23_WP8DL2EewvyBKn8afknCP0o-Ay4Sry26exgiEXw&s=10",
    title: "Empower Innovation with AI",
    subtitle: "Unlock smart solutions using next‑gen tech",
    cta: "Discover More",
  },
  {
    // url: "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOfKER2wccz8_UMtG0Jk4uQH2TgkUuHQhGT08EkFTOk=",
    url:"https://png.pngtree.com/background/20240413/original/pngtree-digital-learning-illustration-of-online-education-with-laptop-books-and-internet-picture-image_8468943.jpg",
    title: "Defend Your Digital Frontier",
    subtitle: "Cutting‑edge cybersecurity solutions",
    cta: "Discover More",
  },
  {
    url: "https://media.istockphoto.com/id/2195043685/photo/internet-infrastructure-concept-abstract-technology-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=H4QNVy5uSb5UeHAcMw7i_4NL7jqiyfoNRYl_qNHY_Bw=",
    // url:"https://www.shutterstock.com/image-vector/round-gear-purple-yellow-blue-260nw-2532714705.jpg",
    title: "Scale with Cloud Power",
    subtitle: "Reliable infrastructure at your fingertips",
    cta: "Discover More",
  },


  {
    url: "https://media.istockphoto.com/id/2189150804/photo/city-network-technologybig-data-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=H_71ZhGNAC6G3_twhXsE7z9ioFldeP8WYEz5_lZyAjA=",
    // url:"https://media.istockphoto.com/id/1360633055/vector/digital-network-connection-illustration-internet-of-things-seo-online-education-platform.jpg?s=612x612&w=0&k=20&c=9Lm1coagArCxjA6xTkUSyk6ESCZfR1uadIe4bKvuSHE=",
    title: "Harness the Internet of Things",
    subtitle: "Connect devices for smarter environments",
    cta: "Discover More",
  },
  {
    // url: "https://media.istockphoto.com/id/1212911887/photo/futuristic-digital-block-chain-background.jpg?s=612x612&w=0&k=20&c=tqxa6bZg8XBo_J6h2waJrBZ2UdTeEtzOlRUcM9sDkMc=",
    url:"https://img.freepik.com/premium-photo/graph-graph-financial-graph-with-sun-shining-it_1295671-74035.jpg",
    title: "Transform with Big Data",
    subtitle: "Turn insights into action at scale",
    cta: "Discover More",
  },
  // {
  //   // url: "https://media.istockphoto.com/id/1368757790/photo/biosensor-technology-concepts-new-experiences-with-metaverse-web3-and-blockchain-hand.jpg?s=612x612&w=0&k=20&c=KRGset8yE0kDOHmAeruiKMTVEhuU5nLUMRw4HFWbIRQ=",
  //   url:"",
  //   title: "Secure with Blockchain",
  //   subtitle: "Trustworthy, decentralized solutions",
  //   cta: "Discover More",
  // },
  // {
  //   // url: "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=i8vHSeffMXOknM1iu8QDnSEDuNg0nOoLjJvP-KjdRoE=",
  //   url:"",
  //   title: "Experience Virtual Reality",
  //   subtitle: "Immersive tech for next‑level engagement",
  //   cta: "Discover More",
  // },
];

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    summary:
      'Responsive, SEO-friendly websites built with the latest frameworks to showcase your brand.',
    image: 'https://images.surferseo.art/9602bc4b-cfc4-410e-b291-611d478c9d6a.png',
    details:
      'From static marketing pages to full-blown React/Vue apps, our web development process ensures blazing performance, accessibility, and pixel-perfect designs that convert.',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    summary:
      'Native & cross-platform mobile applications that delight users on iOS & Android.',
    image: 'https://www.skalet.agency/wp-content/uploads/2024/07/Mobile-App-Development-company-in-Delhi.jpg',
    details:
      'Whether React Native, Flutter, or Swift/Kotlin, we architect mobile apps for speed, reliability, and seamless native feel—complete with push notifications, offline support, and app store readiness.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    summary:
      'Secure, scalable online shops with payment gateways, inventory & order management.',
    image: 'https://www.franticpro.com/resource/newHeader/images/eCommerce-website-development.png',
    details:
      'We build headless or monolithic e-commerce platforms on Shopify, WooCommerce, or custom stacks—optimizing checkout funnels and admin workflows to drive sales and reduce abandonment.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    summary:
      'User-centered designs and prototypes that turn visitors into customers.',
    image: 'https://www.infiraise.com/wp-content/uploads/2022/09/UI-Developers-And-UX-Developers.jpg',
    details:
      'Our design team uses Figma/Sketch to craft intuitive interfaces informed by user research and A/B testing—ensuring your product is both beautiful and highly usable.',
  },
  {
  id: 'cloud-devops',
  title: 'Cloud Architecture & DevOps',
  summary:
    'Design, deploy & manage highly available cloud infrastructures with CI/CD pipelines and monitoring.',
  image: 'https://www.tutorialspoint.com/devops/images/devops-architecture.jpg',
  details:
    'Our Cloud & DevOps specialists architect scalable AWS/Azure/GCP environments, automate builds/deployments via Jenkins/GitHub Actions, and set up full observability stacks (Prometheus, Grafana, ELK) to ensure 24/7 reliability and performance tuning.',
},
{
  id: 'ml-ai-solutions',
  title: 'AI & Machine Learning Solutions',
  summary:
    'Custom ML models and AI-powered features—recommendations, computer vision, NLP—to power intelligent apps.',
  image: 'https://www.shutterstock.com/image-photo/abstract-digital-brain-ai-chip-260nw-2521828919.jpg',
  details:
    'We build end-to-end ML pipelines: data preprocessing, model training/tuning, and production deployment (TensorFlow, PyTorch, scikit-learn). From chatbots and predictive analytics to image recognition and anomaly detection, we embed AI to unlock smarter business workflows.',
},

];


export const ExploreServicesContent:ExploreServicesSection = {
  title : 'Discover Our Full Suite of Services',
  description : `At IntelliInsights Technologies, we offer end-to-end solutions—from web & mobile development to AI & DevOps—to help you innovate, scale, and lead in your industry. Dive in to see how we can bring your vision to life.`,
  imageSrc : exploreServicesImage,
  buttonText : 'View All Services',
  link : '/services',
  reverse : false,
}