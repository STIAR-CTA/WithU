import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, type ViewProps } from 'react-native';

export type ScreenContainerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  children: React.ReactNode;
};

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ 
  children, 
  style,
  lightColor,
  darkColor,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor },
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "94%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    bottom: 0,
  },
}); 