
export type RootStackParamList = {
  'index': undefined;
  'register': undefined;
  '404': undefined;
};

// Добавляем типы для expo-router
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
