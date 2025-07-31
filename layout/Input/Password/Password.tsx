import { StyleSheet, View } from "react-native";

import { ThemedInput } from '@/components/ThemedInput';

const PasswordInput = () => {
    return (
        <View>
           <ThemedInput style={styles.input} placeholder="Password"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {

    alignSelf: "center",

  },
});

export default PasswordInput
