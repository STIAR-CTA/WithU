import { ThemedView } from '@/components/ThemedView';
import LogoRL from '@/layout/Logo/logoRL';
import RegisterC from '@/layout/Register/Register';

import Version from '@/layout/Version/version';
import { StyleSheet } from "react-native";


const Register = () => {
    return (
        <ThemedView style={styles.box}>
            <LogoRL/>
            <RegisterC/>
            <Version/>
        </ThemedView>
        
    );
};

const styles = StyleSheet.create({
    box: {
        width: "100%",
        height: "94%",

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        bottom: 0,
    },

});

export default Register