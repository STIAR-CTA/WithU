import { StyleSheet, View } from "react-native";

import { ThemedInput } from '@/components/ThemedInput';

const PasswordInput = () => {
    return (
        <View style={{ padding: 6 }}>
           <ThemedInput style={styles.input} placeholder="Password"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
    width: "145%",
    
    alignSelf: "center",
    padding: "8%",
    borderWidth: 2.5,
    borderRadius: 50,
    paddingBlockStart: 0,
    paddingBlockEnd: 3,
    fontFamily: "VAG",
    fontSize: 16,
  },
});

export default PasswordInput
