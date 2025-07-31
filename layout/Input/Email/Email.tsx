import { StyleSheet, View } from "react-native";

import { ThemedInput } from '@/components/ThemedInput';

const EmailInput = () => {
    return (
        <View>
           <ThemedInput style={styles.input} placeholder="Email"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {

    alignSelf: "center",

  },
});

export default EmailInput