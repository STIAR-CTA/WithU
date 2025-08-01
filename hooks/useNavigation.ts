import { ROUTES } from '@/constants/Navigation';
import { router } from 'expo-router';

export const useNavigation = () => {
  const navigateToLogin = () => {
    router.push(ROUTES.LOGIN);
  };

  const navigateToRegister = () => {
    router.push(ROUTES.REGISTER);
  };

  const goBack = () => {
    router.back();
  };

  const replace = (route: keyof typeof ROUTES) => {
    router.replace(ROUTES[route]);
  };

  const canGoBack = () => {
    return router.canGoBack();
  };

  return {
    navigateToLogin,
    navigateToRegister,
    goBack,
    replace,
    canGoBack,
  };
}; 