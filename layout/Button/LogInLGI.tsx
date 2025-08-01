import { StyleSheet, View } from "react-native";

import { ThemedButton } from '@/components/ThemedButton';

const LogInLButton = () => {
    return (
        <View>
           <ThemedButton style={styles.button} title="Log In" variant="secondary"/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "120%",
        alignSelf: "center",
        marginTop: 20,
  },
});

export default LogInLButton