export const ROUTES = {
  LOGIN: '/',
  REGISTER: '/register',
  NOT_FOUND: '/404',
} as const;

export const ANIMATIONS = {
  SLIDE_FROM_RIGHT: 'slide_from_right',
  SLIDE_FROM_LEFT: 'slide_from_left',
  FADE: 'fade',
  NONE: 'none',
} as const;

export const GESTURES = {
  ENABLED: true,
  DISABLED: false,
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const; 