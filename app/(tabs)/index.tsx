import Loader from "@/components/ui/loader";
import Barbox from "@/layout/BarBox/barbox";

import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.box}>   
      <Barbox/>
      <Loader/>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});