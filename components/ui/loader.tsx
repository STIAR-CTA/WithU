import { ThemedView } from '@/components/ThemedView';
import Logo from "@/layout/Logo/logo";
import Version from '@/layout/Version/version';
import { StyleSheet } from "react-native";


const Loader = () => {
    return (
        <ThemedView style={styles.loader}>
            <Logo/>
            <Version/>
        </ThemedView>
        
    );
};

const styles = StyleSheet.create({
    loader: {
        width: "100%",
        height: "94%",
        bottom: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Loader