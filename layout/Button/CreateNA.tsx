import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { useNavigation } from '@/hooks/useNavigation';
import { StyleSheet, View } from 'react-native';

const CreateNA = () => {
  const { navigateToRegister } = useNavigation();
  
  return (
    <View style={styles.container}>
      <AnimatedButton
        style={styles.button}
        title="Create Account"
        variant="primary"
        onPress={navigateToRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    width: "100%",
    alignSelf: "center",
  },
});

export default CreateNA;