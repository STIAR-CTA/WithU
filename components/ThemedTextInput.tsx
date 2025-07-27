import { TextInput, TextInputProps } from "react-native";

import { useThemeInput } from '@/hooks/useThemeInput';

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedInput({ style, lightColor, darkColor, ...otherProps }: ThemedInputProps) {
  const backgroundColor = useThemeInput({ light: lightColor, dark: darkColor }, 'background');

  return <TextInput style={[{ backgroundColor }, style]} {...otherProps} />;
}
