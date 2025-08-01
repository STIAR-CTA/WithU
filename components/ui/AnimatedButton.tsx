import { ButtonVariant } from '@/constants/ColorsButton';
import { useButtonColors } from '@/hooks/useButtonColors';
import React, { useRef } from 'react';
import {
    ActivityIndicator,
    Animated,
    Pressable,
    StyleSheet,
    Text,
    TextStyle,
    ViewStyle
} from 'react-native';

interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  loading = false,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const { bg, text, border, disabled: disabledColor, borderWidth } = useButtonColors(variant);

  const handlePressIn = () => {
    if (disabled || loading) return;
    
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    if (disabled || loading) return;
    
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    if (disabled || loading) return;
    onPress();
  };

  const buttonStyle = [
    styles.button,
    {
      backgroundColor: disabled ? disabledColor : bg,
      borderColor: border,
      borderWidth,
    },
    style,
  ];

  const textStyleCombined = [
    styles.text,
    { color: text },
    textStyle,
  ];

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={({ pressed }) => [
        buttonStyle,
        pressed && styles.pressed,
      ]}
      disabled={disabled || loading}
    >
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color={text} size="small" />
        ) : (
          <Text style={textStyleCombined}>{title}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    width: "120%",
    alignSelf: "center",
  },
  animatedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "VAG",
    paddingBottom: 4,
    margin: 3,
    fontWeight: '600',
  },
}); 