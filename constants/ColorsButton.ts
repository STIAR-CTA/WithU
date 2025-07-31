export const Colors = {
  light: {
    primary: '#803CFF',
    primaryText: '#FFFFFF',
    primaryPressed: '#0062CB',
    primaryDisabled: '#A7C7FF',

    secondary: '#E8E8E8',
    secondaryText: '#000000',
    secondaryPressed: '#D1D1D6',
    secondaryDisabled: '#F2F2F7',

    outlineBorder: '#803CFF',
    outlineText: '#007AFF',
    outlinePressed: 'rgba(0, 122, 255, 0.1)',
    outlineDisabled: 'rgba(0, 122, 255, 0.3)',
  },
  dark: {
    primary: '#803CFF',
    primaryText: '#000000ff',
    primaryPressed: '#803CFF',
    primaryDisabled: '#3A3A3C',

    secondary: '#2C2C2E',
    secondaryText: '#FFFFFF',
    secondaryPressed: '#3A3A3C',
    secondaryDisabled: '#1C1C1E',

    outlineBorder: '#0A84FF',
    outlineText: '#0A84FF',
    outlinePressed: 'rgba(10, 132, 255, 0.2)',
    outlineDisabled: 'rgba(10, 132, 255, 0.4)',
  },
} as const;

export type ColorTheme = keyof typeof Colors;
export type ButtonVariant = 'primary' | 'secondary' | 'outline';