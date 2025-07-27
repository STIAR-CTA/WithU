import { StyleSheet, View } from "react-native";

import { ThemedText } from '@/components/ThemedText';

const Logo = () => {
    return (
        <View style={styles.container}>
           <ThemedText style={styles.text}>WithU</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "25%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "#dd3939ff",
    },
    text: {
        fontSize: 90,
        lineHeight: 100,
    },
});

export default Logo