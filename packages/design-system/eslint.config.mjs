import { reactInternal } from '@t8pro/eslint-config/react-internal';

// Use flat config array; extend reactInternal and add any package-specific tweaks.
export default [
  ...reactInternal,
  // Add package-specific rules here. Avoid referencing Next.js rules in this
  // package since the Next plugin is not loaded in reactInternal.
];
