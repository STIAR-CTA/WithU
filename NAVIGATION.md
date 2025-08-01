# Навигация в приложении WithU

## Структура навигации

Приложение использует **Expo Router** для навигации между экранами.

### Основные экраны:
- `/` - Экран входа (Login)
- `/register` - Экран регистрации (Register)
- `/404` - Страница не найдена

## Компоненты навигации

### 1. Хук useNavigation
```typescript
import { useNavigation } from '@/hooks/useNavigation';

const { navigateToLogin, navigateToRegister, goBack, replace, canGoBack } = useNavigation();
```

### 2. Анимированные кнопки
```typescript
import { AnimatedButton } from '@/components/ui/AnimatedButton';

<AnimatedButton
  title="Log In"
  variant="primary" // или "secondary"
  onPress={navigateToLogin}
/>
```

### 3. Переходы между экранами
```typescript
import { ScreenContainer } from '@/components/ui/ScreenContainer';

<ScreenContainer>
  <YourScreenContent />
</ScreenContainer>
```

## Анимации

- **Вход**: Плавное появление с движением снизу вверх
- **Переходы**: Слайд справа налево
- **Кнопки**: Масштабирование при нажатии

## Жесты

- Поддержка свайпа назад (iOS)
- Горизонтальные жесты для навигации

## Типизация

Все пути навигации типизированы в `types/expo-navigation.d.ts`:

```typescript
export type RootStackParamList = {
  'index': undefined;
  'register': undefined;
  '404': undefined;
};
```

## Константы

Пути навигации определены в `constants/Navigation.ts`:

```typescript
export const ROUTES = {
  LOGIN: '/',
  REGISTER: '/register',
  NOT_FOUND: '/404',
} as const;
```

## Лучшие практики

1. Всегда используйте хук `useNavigation` вместо прямого вызова `router.push`
2. Оборачивайте экраны в `ScreenContainer` для плавных анимаций
3. Используйте `AnimatedButton` для лучшего UX
4. Проверяйте возможность возврата с помощью `canGoBack()` 