import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { useNavigation } from '@/hooks/useNavigation';
import { StyleSheet, View } from "react-native";

const LogInCButton = () => {
    const { navigateToLogin } = useNavigation();
    
    return (
        <View>
            <AnimatedButton
            style={styles.button}
            title="Already have an account? Log In"
            variant="secondary"
            onPress={navigateToLogin}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignSelf: "center",
    },
});

export default LogInCButton