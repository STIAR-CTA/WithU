import { ScreenContainer } from '@/components/ui/ScreenContainer';
import LogoRL from '@/layout/Logo/logoRL';
import RegisterC from '@/layout/Register/Register';
import Version from '@/layout/Version/version';

const Register = () => {
    return (
        <ScreenContainer>
            <LogoRL/>
            <RegisterC/>
            <Version/>
        </ScreenContainer>
    );
};

export default Register