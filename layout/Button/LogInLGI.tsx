import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { useNavigation } from '@/hooks/useNavigation';
import { StyleSheet, View } from "react-native";

const LogInLButton = () => {
    const { navigateToLogin } = useNavigation();
    
    return (
        <View>
            <AnimatedButton
            style={styles.button}
            title="Log In"
            variant="secondary"
            onPress={navigateToLogin}
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
