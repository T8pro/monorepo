// Hero feature types and interfaces

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaSubtext?: string;
  whatsappButtonText?: string;
  businessHours?: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
  color?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaSubtext: string;
  whatsappButtonText: string;
  businessHours: string;
}

export interface TerminalConfig {
  scale: number;
  timeScale: number;
  scanlineIntensity: number;
  curvature: number;
  tint: string;
  mouseReact: boolean;
  mouseStrength: number;
  pageLoadAnimation: boolean;
  brightness: number;
  background: string;
}

export interface UseHeroReturn {
  content: HeroContent;
  trustBadges: TrustBadge[];
  terminalConfig: TerminalConfig;
  theme: string;
  splitTitle: (title: string) => { firstPart: string; secondPart: string };
}
