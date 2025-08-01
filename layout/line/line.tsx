
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
        width: "108%",
        height: 1,
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
    },
});

export default LineView