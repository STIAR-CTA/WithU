import LogIn from '@/components/ui/login';
import Barbox from '@/layout/BarBox/barbox';
import { View } from 'react-native';

export default function LogInScreen() {
  return (
    <View style={{ flex: 1 }}>   
      <Barbox/>
      <LogIn/>
    </View>
  );
}

