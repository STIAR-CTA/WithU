import Loader from '@/components/ui/loader';
import Barbox from '@/layout/BarBox/barbox';
import { Slot } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';


export default function Layout() {
  const [showLoader, setShowLoader] = useState(false);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => setShowLoader(false));
    }, 2800);

    return () => clearTimeout(timer);
  },
);

  return (
    <View style={styles.container}>

      <Slot />

      {showLoader && (
        <Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
          <Barbox/>
          <Loader/>
        </Animated.View>
      )}    
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