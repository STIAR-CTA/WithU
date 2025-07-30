import Barbox from "@/layout/BarBox/barbox";

import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.box}>   
      <Barbox/>

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