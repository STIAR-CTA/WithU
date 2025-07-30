import { ThemedView } from '@/components/ThemedView';

import Version from '@/layout/Version/version';
import { StyleSheet } from "react-native";


const Login = () => {
    return (
        <ThemedView style={styles.loader}>
            {/* <NameInput/> */}
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

export default Login