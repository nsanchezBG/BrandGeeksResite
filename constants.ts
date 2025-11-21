import { 
  Palette, 
  Globe, 
  Megaphone, 
  TrendingUp, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter,
  Code2,
  Smartphone
} from 'lucide-react';
import { NavItem, Service, Project, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Branding & Identidad',
    description: 'Creamos marcas con alma. Desde el logotipo hasta la voz de tu marca, construimos identidades que resuenan y perduran.',
    icon: Palette,
  },
  {
    id: '2',
    title: 'Desarrollo Web',
    description: 'Sitios web veloces, responsivos y estéticamente impresionantes. Fusionamos diseño UX/UI con tecnología de punta.',
    icon: Globe,
  },
  {
    id: '3',
    title: 'Estrategia Digital',
    description: 'Analizamos tu mercado y definimos la ruta exacta para alcanzar tus objetivos comerciales en el entorno digital.',
    icon: TrendingUp,
  },
  {
    id: '4',
    title: 'Social Media',
    description: 'Gestión de comunidades y creación de contenido viral. Conectamos tu marca con tu audiencia en el momento justo.',
    icon: Megaphone,
  },
  {
    id: '5',
    title: 'Desarrollo de Software',
    description: 'Soluciones a medida para problemas complejos. Apps, dashboards y sistemas integrados.',
    icon: Code2,
  },
  {
    id: '6',
    title: 'Marketing Móvil',
    description: 'Experiencias optimizadas para dispositivos móviles, donde vive tu audiencia el 80% del tiempo.',
    icon: Smartphone,
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Neon Horizon',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    size: 'large',
  },
  {
    id: 'p2',
    title: 'EcoTech App',
    category: 'App Design',
    imageUrl: 'https://picsum.photos/800/800?random=2',
    size: 'medium',
  },
  {
    id: 'p3',
    title: 'Urban Coffee',
    category: 'Social Media',
    imageUrl: 'https://picsum.photos/600/800?random=3',
    size: 'medium',
  },
  {
    id: 'p4',
    title: 'FinFlow Dashboard',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    size: 'medium',
  },
  {
    id: 'p5',
    title: 'Lumina Fashion',
    category: 'E-commerce',
    imageUrl: 'https://picsum.photos/600/600?random=5',
    size: 'small',
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'Facebook', url: '#', icon: Facebook },
  { platform: 'Twitter', url: '#', icon: Twitter },
];