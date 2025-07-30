import Login from "@/components/ui/login";
import Barbox from "@/layout/BarBox/barbox";
import { View } from "react-native";

export default function LogIn() {
  return (
    <View style={{ flex: 1 }}>   
      <Barbox/>
      <Login/>
    </View>
  );
}

