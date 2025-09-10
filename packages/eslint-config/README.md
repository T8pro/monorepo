# `@repo/eslint-config`

Collection of internal ESLint configurations for the monorepo.

## Available Configurations

### `@repo/eslint-config/base`
Base configuration with TypeScript, import ordering, and Prettier integration.

### `@repo/eslint-config/next-js`
Next.js-specific configuration extending the base config with React and Next.js rules.

### `@repo/eslint-config/react-internal`
React configuration for internal libraries, optimized for component development.

### `@repo/eslint-config/comprehensive`
Comprehensive configuration that combines modern flat config with legacy compatibility. Includes all rules from the reference configuration with enhanced TypeScript, React, and Next.js support.

## Features

- **TypeScript Support**: Full TypeScript integration with strict rules
- **Import Organization**: Automatic import ordering and deduplication
- **Prettier Integration**: Seamless code formatting
- **React/Next.js Rules**: Optimized for modern React development
- **Performance**: Optimized ignore patterns for faster linting
- **Monorepo Support**: Works with Turborepo and workspace references

## Usage

```javascript
// For Next.js apps
import { nextJsConfig } from '@repo/eslint-config/next-js';

export default nextJsConfig;

// For comprehensive setup
import { comprehensiveConfig } from '@repo/eslint-config/comprehensive';

export default comprehensiveConfig;
```
