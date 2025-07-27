import { StyleSheet, View } from "react-native";

import { ThemedText } from '@/components/ThemedText';

const Version = () => {
    return (
        <View style={styles.container}>
           <ThemedText style={styles.textv1}>wilka.. © 2025</ThemedText>
           <ThemedText style={styles.textv2}>V1.0.0 beta</ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "10%",
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    textv1: {
        fontSize: 16,
        lineHeight: 20,
    },
    textv2: {
        fontSize: 14,
        lineHeight: 20,
    },
});

export default Version