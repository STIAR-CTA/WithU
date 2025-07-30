import { Colors } from '@/constants/ColorsInput';
import { useThemeInput } from '@/hooks/useThemeInput';
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark;
};

export function ThemedInput({ 
  style, 
  lightColor, 
  darkColor,
  colorName = 'background', // Значение по умолчанию
  ...otherProps 
}: ThemedInputProps) {
  const backgroundColor = useThemeInput(
    { 
      light: lightColor, 
      dark: darkColor 
    }, 
    colorName
  );

  return (
    <TextInput 
      style={[{ backgroundColor }, style]} 
      {...otherProps} 
    />
  );
}