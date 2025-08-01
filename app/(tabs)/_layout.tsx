import Loader from '@/components/ui/loader';
import Barbox from '@/layout/BarBox/barbox';
import { Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

export default function AuthLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loadApp = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }).start(() => setIsLoading(false));
      }
    };

    loadApp();
  }, );

  if (isLoading) {
    return (
      <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
        <Barbox/>
        <Loader/>
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
      </Stack>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});