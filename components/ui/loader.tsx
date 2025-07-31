import { ThemedView } from '@/components/ThemedView';
import Logo from "@/layout/Logo/logo";
import Version from '@/layout/Version/version';



const Loader = () => {
    return (
        <ThemedView>
            <Logo/>
            <Version/>
        </ThemedView>
        
    );
};



export default Loader