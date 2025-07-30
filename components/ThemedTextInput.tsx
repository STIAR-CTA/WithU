import { Colors } from '@/constants/ColorsInput';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native';

type ColorTheme = {
  light?: string;
  dark?: string;
};

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  lightPlaceholderColor?: string;
  darkPlaceholderColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  lightPlaceholderColor,
  darkPlaceholderColor,
  lightBorderColor,
  darkBorderColor,
  ...otherProps
}: ThemedInputProps) {
  const colorScheme = useColorScheme() ?? 'light';

  // Выносим функцию getThemeColor за пределы useMemo
  const getThemeColor = React.useCallback(
    (colors: ColorTheme, defaultKey: keyof typeof Colors.light) => {
      return colors[colorScheme] || Colors[colorScheme][defaultKey];
    },
    [colorScheme]
  );

  // Вычисляем все цвета с явными зависимостями
  const themeColors = React.useMemo(() => ({
    background: getThemeColor({ light: lightColor, dark: darkColor }, 'inputBackground'),
    text: getThemeColor({ light: lightTextColor, dark: darkTextColor }, 'inputText'),
    placeholder: getThemeColor(
      { light: lightPlaceholderColor, dark: darkPlaceholderColor },
      'inputPlaceholder'
    ),
    border: getThemeColor(
      { light: lightBorderColor, dark: darkBorderColor },
      'inputBorder'
    ),
  }), [
    getThemeColor,
    lightColor, darkColor,
    lightTextColor, darkTextColor,
    lightPlaceholderColor, darkPlaceholderColor,
    lightBorderColor, darkBorderColor
  ]);

  return (
    <TextInput
      style={[
        styles.baseInput,
        {
          backgroundColor: themeColors.background,
          color: themeColors.text,
          borderColor: themeColors.border,
        },
        style,
      ]}
      placeholderTextColor={themeColors.placeholder}
      {...otherProps}
    />
  );
}


const styles = StyleSheet.create({
  baseInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    fontSize: 16,
    minHeight: 48,
  }
});