import { Alert, Button, View } from 'react-native';

const CreateNA = () => {
  const handlePress = () => {
    console.log('Кнопка нажата!'); // Смотрите в консоли (Chrome remote debugger)
    Alert.alert('Тест', 'Кнопка работает!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Button 
        title="Тестовая кнопка" 
        onPress={handlePress} 
        testID="test-button"
      />
    </View>
  );
};

export default CreateNA;