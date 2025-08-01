import { useCallback, useState } from 'react';

interface AppState {
  isLoading: boolean;
  isAuthenticated: boolean;
  currentUser: any | null;
}

export const useAppState = () => {
  const [state, setState] = useState<AppState>({
    isLoading: false,
    isAuthenticated: false,
    currentUser: null,
  });

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, isLoading: loading }));
  }, []);

  const setAuthenticated = useCallback((authenticated: boolean) => {
    setState(prev => ({ ...prev, isAuthenticated: authenticated }));
  }, []);

  const setCurrentUser = useCallback((user: any | null) => {
    setState(prev => ({ ...prev, currentUser: user }));
  }, []);

  const login = useCallback(async (credentials: { email: string; password: string }) => {
    setLoading(true);
    try {
      // Здесь будет логика авторизации
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      setAuthenticated(true);
      setCurrentUser({ email: credentials.email });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setAuthenticated, setCurrentUser]);

  const register = useCallback(async (userData: { name: string; email: string; password: string }) => {
    setLoading(true);
    try {
      // Здесь будет логика регистрации
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      setAuthenticated(true);
      setCurrentUser({ name: userData.name, email: userData.email });
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setAuthenticated, setCurrentUser]);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setCurrentUser(null);
  }, [setAuthenticated, setCurrentUser]);

  return {
    ...state,
    setLoading,
    setAuthenticated,
    setCurrentUser,
    login,
    register,
    logout,
  };
}; 