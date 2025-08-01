export const Colors = {
  light: {
    primary: '#803CFF',
    primaryText: '#FFFFFF',
    primaryPressed: '#0062CB',
    primaryDisabled: '#A7C7FF',

    secondary: '#000000',
    secondaryText: '#FFFFFF',
    secondaryPressed: '#D1D1D6',
    secondaryDisabled: '#F2F2F7',

    outlineBorder: '#000000ff',
    outlineText: '#000000ff',
    outlinePressed: 'rgba(0, 122, 255, 0.1)',
    outlineDisabled: 'rgba(0, 122, 255, 0.3)',
  },
  dark: {
    primary: '#803CFF',
    primaryText: '#000000',
    primaryPressed: '#803CFF',
    primaryDisabled: '#3A3A3C',

    secondary: '#803CFF',
    secondaryText: '#000000',
    secondaryPressed: '#3A3A3C',
    secondaryDisabled: '#1C1C1E',

    outlineBorder: '#803CFF',
    outlineText: '#803CFF',
    outlinePressed: 'rgba(10, 132, 255, 0.2)',
    outlineDisabled: 'rgba(10, 132, 255, 0.4)',
  },
} as const;

export type ColorTheme = keyof typeof Colors;
export type ButtonVariant = 'primary' | 'secondary' | 'outline';