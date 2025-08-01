import { StyleSheet, View } from "react-native";

import { ThemedButton } from '@/components/ThemedButton';
import { Link } from "expo-router";

const CreateNA = () => {
    return (
        <View>
            <Link href="/(tabs)/register" style={{ width: "100%", alignItems: "center" }}>
                <ThemedButton style={styles.button} title="Create new account" variant="outline"/>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        alignSelf: "center",
        borderWidth: 2.5,
        fontSize: 12,
  },
});

export default CreateNA