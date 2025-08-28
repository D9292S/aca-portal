// Design tokens based on REDESIGN_PLAN.md

export const colors = {
  primary: {
    navy: '#1e3a5f',
    red: '#c41e3a',
    white: '#ffffff',
    lightGray: '#f8f9fa',
  },
  secondary: {
    gold: '#ffd700',
    green: '#28a745',
    orange: '#ff6b35',
    skyBlue: '#0ea5e9',
  },
  neutral: {
    darkGray: '#2c3e50',
    mediumGray: '#6c757d',
    lightGray: '#e9ecef',
    offWhite: '#fafafa',
  },
} as const;

export const typography = {
  fonts: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Open Sans', 'Roboto', sans-serif",
    hindi: "'Noto Sans Devanagari', sans-serif",
    code: "'JetBrains Mono', monospace",
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.5rem',   // 8px
  2: '1rem',     // 16px
  3: '1.5rem',   // 24px
  4: '2rem',     // 32px
  6: '3rem',     // 48px
  8: '4rem',     // 64px
  12: '6rem',    // 96px
  16: '8rem',    // 128px
} as const;

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
} as const;

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;
