import { ScreenContainer } from '@/components/ui/ScreenContainer';
import Logo from "@/layout/Logo/logo";
import Version from '@/layout/Version/version';

const Loader = () => {
    return (
        <ScreenContainer>
            <Logo/>
            <Version/>
        </ScreenContainer>
    );
};

export default Loader