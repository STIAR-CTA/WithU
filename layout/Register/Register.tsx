import AcceptButton from '@/layout/Button/Accept';
import EmailInput from '@/layout/Input/Email/Email';
import NameInput from '@/layout/Input/Name/Name';
import PasswordInput from '@/layout/Input/Password/Password';

import { StyleSheet, View } from "react-native";


const RegisterC = () => {
    return (
        <View style={styles.box}>
            <NameInput/>
            <EmailInput/>
            <PasswordInput/>
            <AcceptButton/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",

        top: "44%",

        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },

});

export default RegisterC