import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[ styles.view, { backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: "94%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    bottom: 0,
  },
});