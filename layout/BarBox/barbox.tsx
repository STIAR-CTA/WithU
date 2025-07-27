import { ThemedBar } from '@/components/ThemedBar';
import { StyleSheet } from "react-native";

const Barbox = () => {
    return (
        <ThemedBar style={styles.container}>
        </ThemedBar>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Barbox