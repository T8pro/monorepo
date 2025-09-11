export type Vec2 = [number, number];

export type FaultyTerminalProps = React.HTMLAttributes<HTMLDivElement> & {
  scale: number;
  gridMul: Vec2;
  digitSize: number;
  timeScale: number;
  pause: boolean;
  scanlineIntensity: number;
  glitchAmount: number;
  flickerAmount: number;
  noiseAmp: number;
  chromaticAberration: number;
  dither: number | boolean;
  curvature: number;
  tint: string;
  background: string;
  mouseReact: boolean;
  mouseStrength: number;
  dpr: number;
  pageLoadAnimation: boolean;
  brightness: number;
};
