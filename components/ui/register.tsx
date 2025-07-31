import { ThemedView } from '@/components/ThemedView';
import LogoRL from '@/layout/Logo/logoRL';
import RegisterC from '@/layout/Register/Register';


import Version from '@/layout/Version/version';



const Register = () => {
    return (
        <ThemedView>
            <LogoRL/>
            <RegisterC/>
            <Version/>
        </ThemedView>
        
    );
};


export default Register