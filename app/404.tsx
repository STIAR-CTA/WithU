import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ScreenContainer } from '@/components/ui/ScreenContainer';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops!' }} />
      <ScreenContainer style={styles.container}>
        <ThemedText type="title">404</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ScreenContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
