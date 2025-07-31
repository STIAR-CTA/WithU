import AcceptButton from '@/layout/Button/Accept';
import EmailInput from '@/layout/Input/Email/Email';
import NameInput from '@/layout/Input/Name/Name';
import PasswordInput from '@/layout/Input/Password/Password';

import { StyleSheet, View } from "react-native";
import LogInCButton from '../Button/LogInCNA';


const RegisterC = () => {
    return (
        <View style={styles.container}>
            <NameInput/>
            <EmailInput/>
            <PasswordInput/>
            <AcceptButton/>
            <LogInCButton/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        top: "10%",
        gap: 10,


    },
});

export default RegisterC