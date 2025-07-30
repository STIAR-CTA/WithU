import { Colors } from '@/constants/ColorsInput';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

export function useThemeInput(
  { light, dark }: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  
  return React.useMemo(() => {
    const colorFromProps = theme === 'light' ? light : dark;
    return colorFromProps || Colors[theme][colorName];
  }, [theme, light, dark, colorName]);
}