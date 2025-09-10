import {
  PiBuilding,
  PiCamera,
  PiComputerTower,
  PiTarget,
  PiUserSwitch,
  PiGear,
  PiRobot,
} from 'react-icons/pi';

export const SERVICES = [
  {
    icon: PiUserSwitch,
    title: 'Branding & Design',
    description:
      'Identity, design systems, UI/UX, guidelines, design operations',
  },
  {
    icon: PiComputerTower,
    title: 'Web & App',
    description:
      'React/Next.js, TypeScript, APIs, headless CMS, accessibility & performance',
  },
  {
    icon: PiBuilding,
    title: 'Employee Communications',
    description: '(Endomarketing): internal campaigns, onboarding, intranet',
  },
];

export const ADDITIONAL_SERVICES = [
  {
    icon: PiCamera,
    title: 'Content (Photo/Video)',
    description:
      'product shoots, brand films, post-production, motion graphics',
  },
  {
    icon: PiTarget,
    title: 'Marketing',
    description:
      'campaigns, landing pages, SEO/ASO, paid media assets, email/SMS',
  },
  {
    icon: PiRobot,
    title: 'AI',
    description:
      'content copilots, data-aware assistants, image/video generation, workflow agents',
  },
  {
    icon: PiGear,
    title: 'Automation & Integrations',
    description: 'HubSpot, Salesforce, GA4, Meta/Google Ads, PayPal, and more',
  },
];
