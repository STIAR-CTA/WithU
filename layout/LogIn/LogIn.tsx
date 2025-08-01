import EmailInput from '@/layout/Input/Email/Email';
import PasswordInput from '@/layout/Input/Password/Password';

import { StyleSheet, View } from "react-native";
import CreateNA from '../Button/CreateNA';
import LogInLButton from '../Button/LogInLGI';
import LineView from '../line/line';


const LogInC = () => {
    return (
        <View style={styles.container}>
            <EmailInput/>
            <PasswordInput/>
            <LogInLButton/>
            <LineView/>
            <CreateNA/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        top: "16%",
        gap: 10,


    },
});

export default LogInC