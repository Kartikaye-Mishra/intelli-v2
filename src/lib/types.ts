
import type { IconType } from 'react-icons';

export type NavItem = {
  icon: IconType;
  label: string;
  path:string;
};
export type MaterialItem = {
  title: string;
  imgSrc: string;
};
export type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export type LeaderCardProps = {
  name: string;
  title: string;
  role: string;
  image: string;
  handle: string;
};

export interface Slide {
  url: string;
  title: string;
  subtitle: string;
  cta: string;
}


export type Service = {
  id: string;
  title: string;
  summary: string;
  image: string;
  details: string;
};

export type ExploreServicesSection = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  link: string;
  reverse: boolean;
};