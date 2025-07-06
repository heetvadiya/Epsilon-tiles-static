/**
 * EPSILON TILES COLOR REFERENCE GUIDE
 * 
 * This file provides a reference for developers to understand the color system.
 * To actually change colors, edit the CSS variables in src/index.css
 * 
 * HOW TO CHANGE COLORS:
 * 1. Open src/index.css
 * 2. Find the :root section with color variables
 * 3. Change the base color values (format: R G B)
 * 4. The dark mode variants will automatically adjust
 * 
 * EXAMPLE:
 * To change the primary color to a deep blue:
 * --color-primary-base: 25 91 255; (RGB values for blue)
 */

// These are just for reference, the actual values come from CSS variables
export const colorPalette = {
  // Primary color (main brand color)
  primary: {
    base: 'rgb(var(--color-primary-base))',
    light: 'rgb(var(--color-primary-base) + var(--color-primary-light-offset))',
    dark: 'rgb(var(--color-primary-base) + var(--color-primary-dark-offset))',
  },
  
  // Secondary color (accent/contrast color)
  secondary: {
    base: 'rgb(var(--color-secondary-base))',
    light: 'rgb(var(--color-secondary-base) + var(--color-secondary-light-offset))',
    dark: 'rgb(var(--color-secondary-base) + var(--color-secondary-dark-offset))',
  },
  
  // Accent color (highlight color)
  accent: 'rgb(var(--color-accent-base))',
  
  // Background colors
  background: {
    light: 'rgb(var(--color-bg-light))',
    dark: 'rgb(var(--color-bg-dark))',
  },
  
  // Text colors
  text: {
    light: 'rgb(var(--color-text-light))',
    dark: 'rgb(var(--color-text-dark))',
    muted: {
      light: 'rgb(var(--color-muted-text-light))',
      dark: 'rgb(var(--color-muted-text-dark))',
    }
  },
  
  // UI element colors
  card: {
    light: 'rgb(var(--color-card-light))',
    dark: 'rgb(var(--color-card-dark))',
  },
  
  muted: {
    light: 'rgb(var(--color-muted-light))',
    dark: 'rgb(var(--color-muted-dark))',
  },
  
  border: {
    light: 'rgb(var(--color-border-light))',
    dark: 'rgb(var(--color-border-dark))',
  },
};

/**
 * HOW COLORS ARE APPLIED:
 * 
 * In light mode:
 * - primary: primary-base
 * - secondary: secondary-base
 * - accent: accent-base
 * - background: bg-light
 * - foreground (text): text-light
 * 
 * In dark mode:
 * - primary: primary-base (remains the same)
 * - secondary: secondary-base + secondary-light-offset (slightly lighter)
 * - accent: accent-base + accent-light-offset (slightly lighter)
 * - background: bg-dark
 * - foreground (text): text-dark
 */

/**
 * RGB COLOR PICKER HELPER
 * 
 * Converting hex colors to RGB:
 * 
 * Example: #1E5FFF (blue)
 * R: 30 (1E in hex)
 * G: 95 (5F in hex)
 * B: 255 (FF in hex)
 * 
 * Result for CSS: 30 95 255
 */

// Common colors in RGB format for easy copy-paste:
export const commonRgbColors = {
  // Blues
  navy: '0 32 96',
  blue: '30 95 255',
  skyBlue: '66 153 225',
  teal: '56 178 172',
  
  // Greens
  emerald: '16 185 129',
  mint: '72 187 120',
  olive: '128 128 0',
  
  // Earth tones
  brown: '120 83 44',
  tan: '210 180 140',
  khaki: '240 230 140',
  
  // Warm colors
  red: '220 38 38',
  crimson: '220 20 60',
  orange: '245 158 11',
  amber: '252 211 77',
  gold: '234 179 8',
  
  // Cool colors
  purple: '139 92 246',
  violet: '124 58 237',
  indigo: '79 70 229',
  slate: '71 85 105',
  
  // Neutral
  white: '255 255 255',
  black: '0 0 0',
  gray: {
    50: '249 250 251',
    100: '243 244 246',
    200: '229 231 235',
    300: '209 213 219',
    400: '156 163 175',
    500: '107 114 128',
    600: '75 85 99',
    700: '55 65 81',
    800: '31 41 55',
    900: '17 24 39',
  }
}; 