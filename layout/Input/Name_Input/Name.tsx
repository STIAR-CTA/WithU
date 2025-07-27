import { StyleSheet, View } from "react-native";

import { ThemedInput } from '@/components/ThemedTextInput';

const NameInput = () => {
    return (
        <View >
           <ThemedInput style={styles.input}>Name</ThemedInput>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "20%",
        height: "80%",
        fontFamily: "VAG",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "#dd3939ff",
    },
    //text: {
        //fontSize: 90,
        //lineHeight: 100,
    //},
});

export default NameInput
