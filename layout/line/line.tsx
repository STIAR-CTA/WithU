
import { ThemedBar } from '@/components/ThemedBar';
import { StyleSheet } from "react-native";

const LineView = () => {
    return (
        <ThemedBar style={styles.container}>

        </ThemedBar>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "92%",
        height: 1,
        marginTop: 8,
        marginBottom: 8,
        alignSelf: "center",
    },
});

export default LineView