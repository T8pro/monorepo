import styles from './styles.module.scss';
import { FaultyTerminalProps } from './types';
import { useFaultyTerminal } from './hooks';

export const FaultyTerminal = ({
  scale,
  gridMul,
  digitSize,
  timeScale,
  pause,
  scanlineIntensity,
  glitchAmount,
  flickerAmount,
  noiseAmp,
  chromaticAberration,
  dither,
  curvature,
  tint,
  background,
  mouseReact,
  mouseStrength,
  dpr,
  pageLoadAnimation,
  brightness,
  ...props
}: Partial<FaultyTerminalProps>) => {
  const config = {
    scale,
    gridMul,
    digitSize,
    timeScale,
    pause,
    scanlineIntensity,
    glitchAmount,
    flickerAmount,
    noiseAmp,
    chromaticAberration,
    dither,
    curvature,
    tint,
    background,
    mouseReact,
    mouseStrength,
    dpr,
    pageLoadAnimation,
    brightness,
  };

  const { containerRef } = useFaultyTerminal(config);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <div
        ref={containerRef}
        className={`${styles.container} ${props.className || ''}`}
        style={props.style}
        {...props}
      />
    </div>
  );
};
