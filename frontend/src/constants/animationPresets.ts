export const animationPresets = {
  small: {
    distance: 10,
    duration: 0.2,
    delay: 0,
    blurAmount: 2,
    scaleAmount: 0.96,
  },
  medium: {
    distance: 20,
    duration: 0.3,
    delay: 0.3,
    blurAmount: 4,
    scaleAmount: 0.94,
  },
  large: {
    distance: 30,
    duration: 0.4,
    delay: 0.5,
    blurAmount: 6,
    scaleAmount: 0.9,
  },
  extraLarge: {
    distance: 60,
    duration: 0.8,
    delay: 0.8,
    blurAmount: 10,
    scaleAmount: 0.88,
  },
} as const;
