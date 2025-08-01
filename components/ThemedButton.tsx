import { ButtonVariant } from '@/constants/ColorsButton';
import { useButtonColors } from '@/hooks/useButtonColors';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ThemedButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  textStyle?: object;
};

export const ThemedButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ThemedButtonProps) => {
  const { bg, text, border, disabled: disabledColor, borderWidth } = 
    useButtonColors(variant);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled ? disabledColor : bg,
          borderColor: border,
          borderWidth,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={text} />
      ) : (
        <Text style={[styles.text, { color: text }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignItems: "center",
    width: "120%",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "VAG",
    paddingBottom: 4,
    margin: 3,
    
  },
});