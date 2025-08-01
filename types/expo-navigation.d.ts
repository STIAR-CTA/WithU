export type RootStackParamList = {
  '(tabs)/index': undefined;
  '(tabs)/register': undefined;
};

declare module 'expo-router' {
  export interface Router {
    push: <T extends keyof RootStackParamList>(
      route: T,
      params?: RootStackParamList[T]
    ) => void;
    back: () => void;
    replace: <T extends keyof RootStackParamList>(
      route: T,
      params?: RootStackParamList[T]
    ) => void;
  }
}