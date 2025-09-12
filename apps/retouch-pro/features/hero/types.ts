export type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaSubtext?: string;
  secondaryCtaText?: string;
  whatsappButtonText?: string;
  businessHours?: string;
  dragDropText?: string;
  maxPhotos?: number;
};

export type TrustBadge = {
  icon: string;
  text: string;
  color?: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaIcon: string;
  ctaSubtext: string;
  secondaryCtaText: string;
  whatsappButtonText: string;
  businessHours: string;
  dragDropText: string;
  maxPhotos: number;
};

export type TerminalConfig = {
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
};

export type UseHeroReturn = {
  content: HeroContent;
  trustBadges: TrustBadge[];
  terminalConfig: TerminalConfig;
  theme: string;
  handleFileSelect: (files: FileList | null) => void;
  handleClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
};
