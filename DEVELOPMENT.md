# Инструкции для разработки

## 🚀 Быстрый старт

1. **Запуск проекта:**
   ```bash
   npm start
   ```

2. **Открытие на устройстве:**
   - iOS: отсканируйте QR-код в приложении Camera
   - Android: отсканируйте QR-код в Expo Go
   - Web: нажмите `w` в терминале

## 🎯 Основные компоненты

### Кнопки
```typescript
import { AnimatedButton } from '@/components/ui/AnimatedButton';

<AnimatedButton
  title="Нажми меня"
  variant="primary" // или "secondary"
  onPress={() => console.log('Нажато!')}
  loading={false}
  disabled={false}
/>
```

### Контейнеры экранов
```typescript
import { ScreenContainer } from '@/components/ui/ScreenContainer';

<ScreenContainer>
  <YourContent />
</ScreenContainer>
```

### Навигация
```typescript
import { useNavigation } from '@/hooks/useNavigation';

const { navigateToLogin, navigateToRegister, goBack } = useNavigation();
```

## 🏗 Добавление новых экранов

1. **Создайте файл в `app/`:**
   ```typescript
   // app/new-screen.tsx
   import { ScreenContainer } from '@/components/ui/ScreenContainer';
   
   export default function NewScreen() {
     return (
       <ScreenContainer>
         <Text>Новый экран</Text>
       </ScreenContainer>
     );
   }
   ```

2. **Добавьте тип в `types/expo-navigation.d.ts`:**
   ```typescript
   export type RootStackParamList = {
     'index': undefined;
     'register': undefined;
     'new-screen': undefined; // добавьте здесь
     '404': undefined;
   };
   ```

3. **Добавьте константу в `constants/Navigation.ts`:**
   ```typescript
   export const ROUTES = {
     LOGIN: '/',
     REGISTER: '/register',
     NEW_SCREEN: '/new-screen', // добавьте здесь
     NOT_FOUND: '/404',
   } as const;
   ```

## 🎨 Стилизация

### Темы
```typescript
import { useThemeColor } from '@/hooks/useThemeColor';

const textColor = useThemeColor({}, 'text');
const backgroundColor = useThemeColor({}, 'background');
```

### Анимации
```typescript
import { Animated } from 'react-native';

const fadeAnim = useRef(new Animated.Value(0)).current;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 300,
  useNativeDriver: true, // всегда используйте это!
}).start();
```

## 🔧 Отладка

### Логирование
```typescript
console.log('Debug info:', data);
console.warn('Warning message');
console.error('Error message');
```

### React DevTools
- Установите React DevTools для отладки
- Проверяйте ре-рендеры компонентов
- Анализируйте дерево компонентов

## 📱 Тестирование

### На устройстве
- Тестируйте на реальных устройствах
- Проверяйте разные размеры экранов
- Тестируйте жесты и анимации

### Производительность
- Следите за FPS (должно быть 60)
- Проверяйте использование памяти
- Оптимизируйте анимации

## 🚀 Готовые к использованию

### Компоненты
- ✅ `AnimatedButton` - универсальная кнопка
- ✅ `ScreenContainer` - контейнер экрана
- ✅ `Loader` - компонент загрузки

### Хуки
- ✅ `useNavigation` - навигация
- ✅ `useAppState` - состояние приложения
- ✅ `useThemeColor` - темы

### Константы
- ✅ `ROUTES` - пути навигации
- ✅ `ANIMATIONS` - типы анимаций
- ✅ `GESTURES` - настройки жестов

## 📚 Полезные ссылки

- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Expo](https://docs.expo.dev/)

## 🎉 Готово к работе!

Проект полностью настроен и готов к разработке. Все компоненты оптимизированы, навигация работает, документация готова.

**Удачной разработки!** 🚀 