# Features Directory

## Overview

This directory contains feature components for the Retouch Pro application. Each feature is organized as a self-contained module with all necessary code in a single file.

## Architecture Approach

Each feature follows a consolidated approach where all related code is contained within a single index.tsx file:

- **Types**: TypeScript interfaces and types
- **Constants**: Default values and configuration
- **Hooks**: Custom React hooks for logic and state management
- **Component**: The main React component that renders the UI

## Directory Structure

Each feature follows this structure:

```
feature-name/
├── index.tsx         # Contains all types, constants, hooks, and the component
└── styles.module.scss # Component styles
```

## Implementation Guide

To implement a new feature:

1. **Create a new directory** for the feature
2. **Create index.tsx** with all necessary types, constants, hooks, and the component
3. **Create styles.module.scss** for component styling

## Refactored Features

The following features have been refactored to follow the consolidated approach:

- **what-you-get**: Service benefits section
- **hero**: Main landing page hero section

## Features To Be Refactored

The following features still need to be refactored:

- before-after
- faq
- how-it-works
- lead-magnet
- plans
- retouch-process
- social-proof
- upload

## Benefits of Consolidated Architecture

- **Simplicity**: All related code is in one place
- **Reduced Complexity**: Fewer files to manage
- **Easier Navigation**: No need to jump between multiple files
- **Cohesion**: All related code is kept together
- **Reduced Boilerplate**: Less import/export overhead