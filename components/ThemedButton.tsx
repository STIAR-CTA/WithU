import { ButtonVariant } from '@/constants/ColorsButton';
import { useButtonColors } from '@/hooks/useButtonColors';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ThemedButtonProps = {
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  textStyle?: object;
};

export const ThemedButton = ({
  title,
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
      disabled={disabled || loading}
      activeOpacity={0.7}
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
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "VAG",
    paddingBottom: 4,
    margin: 3,
  },
});