# `@t8pro/eslint-config`

Collection of internal ESLint configurations for the monorepo.

## Available Configurations

### `@t8pro/eslint-config/base`
Base configuration with TypeScript, Prettier integration, and Turbo support.

### `@t8pro/eslint-config/next-js`
Next.js-specific configuration extending the base config with React and Next.js rules.

### `@t8pro/eslint-config/react-internal`
React configuration for internal libraries, optimized for component development.

### `@t8pro/eslint-config/comprehensive`
Comprehensive configuration that combines modern flat config with legacy compatibility. Includes all rules from the reference configuration with enhanced TypeScript, React, and Next.js support.

## Features

- **TypeScript Support**: Full TypeScript integration with strict rules
- **Prettier Integration**: Seamless code formatting with error-level enforcement
- **React/Next.js Rules**: Optimized for modern React development
- **Performance**: Optimized ignore patterns for faster linting
- **Monorepo Support**: Works with Turborepo and workspace references
- **Self-Linting**: Configuration files are themselves linted for consistency

## Usage

```javascript
// For Next.js apps
import { nextJsConfig } from '@t8pro/eslint-config/next-js';

export default nextJsConfig;

// For React libraries
import { config as reactConfig } from '@t8pro/eslint-config/react-internal';

export default reactConfig;

// For comprehensive setup
import { comprehensiveConfig } from '@t8pro/eslint-config/comprehensive';

export default comprehensiveConfig;
```

## Configuration Notes

- Import rules are disabled due to TypeScript resolver conflicts
- TypeScript compiler handles import resolution and validation
- All configurations include Prettier integration
- Self-linting ensures configuration consistency
