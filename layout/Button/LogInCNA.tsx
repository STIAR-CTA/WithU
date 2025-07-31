import { StyleSheet, View } from "react-native";

import { ThemedButton } from '@/components/ThemedButton';

const LogInCButton = () => {
    return (
        <View>
           <ThemedButton style={styles.button} title="Log In"/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "80%",
        alignSelf: "center",
  },
});

export default LogInCButton