import { ScreenContainer } from '@/components/ui/ScreenContainer';
import LogInC from '@/layout/LogIn/LogIn';
import LogoRL from '@/layout/Logo/logoRL';
import Version from '@/layout/Version/version';

const LogIn = () => {
    return (
        <ScreenContainer>
            <LogoRL/>
            <LogInC/>
            <Version/>
        </ScreenContainer>
    );
};

export default LogIn