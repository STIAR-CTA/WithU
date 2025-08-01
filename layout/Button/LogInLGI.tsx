import { ThemedButton } from '@/components/ThemedButton';
import { router } from 'expo-router';
import { StyleSheet, View } from "react-native";



const LogInLButton = () => {
    return (
        <View>

            <ThemedButton
            style={styles.button}
            title="Log In"
            variant="secondary"
            onPress={() => router.push('/')}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "120%",
        alignSelf: "center",
        marginTop: 20,
  },
});

export default LogInLButton
