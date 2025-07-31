import { ButtonVariant, Colors } from '@/constants/ColorsButton';
import { useColorScheme } from 'react-native';

export const useButtonColors = (variant: ButtonVariant = 'primary') => {
  const theme = useColorScheme() ?? 'light';
  const colors = Colors[theme];

  const config = {
    primary: {
      bg: colors.primary,
      text: colors.primaryText,
      border: colors.primary,
      pressed: colors.primaryPressed,
      disabled: colors.primaryDisabled,
    },
    secondary: {
      bg: colors.secondary,
      text: colors.secondaryText,
      border: colors.secondary,
      pressed: colors.secondaryPressed,
      disabled: colors.secondaryDisabled,
    },
    outline: {
      bg: 'transparent',
      text: colors.outlineText,
      border: colors.outlineBorder,
      pressed: colors.outlinePressed,
      disabled: colors.outlineDisabled,
    },
  };

  return {
    ...config[variant],
    borderWidth: variant === 'outline' ? 1 : 0,
  };
};