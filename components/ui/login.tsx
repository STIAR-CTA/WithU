import { ThemedView } from '@/components/ThemedView';
import LogInC from '@/layout/LogIn/LogIn';
import LogoRL from '@/layout/Logo/logoRL';


import Version from '@/layout/Version/version';



const LogIn = () => {
    return (
        <ThemedView>
            <LogoRL/>
            <LogInC/>
            <Version/>
        </ThemedView>
        
    );
};


export default LogIn