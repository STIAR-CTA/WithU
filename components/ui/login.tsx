import { ThemedView } from '@/components/ThemedView';
import EmailInput from '@/layout/Input/Email/Email';
import NameInput from '@/layout/Input/Name/Name';
import PasswordInput from '@/layout/Input/Password/Password';

import Version from '@/layout/Version/version';
import { StyleSheet } from "react-native";


const Login = () => {
    return (
        <ThemedView style={styles.box}>
            <NameInput/>
            <EmailInput/>
            <PasswordInput/>
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

export default Login