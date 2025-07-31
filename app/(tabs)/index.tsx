import Register from "@/components/ui/register";
import Barbox from "@/layout/BarBox/barbox";
import { View } from "react-native";

export default function LogIn() {
  return (
    <View style={{ flex: 1 }}>   
      <Barbox/>
      <Register/>
    </View>
  );
}

