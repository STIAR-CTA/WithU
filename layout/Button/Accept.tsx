import { StyleSheet, View } from "react-native";

import { ThemedButton } from '@/components/ThemedButton';

const AcceptButton = () => {
    return (
        <View style={{ padding: "26%" }}>
           <ThemedButton style={styles.button} title="Accept"/>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
    top: "80%",
    width: "200%",
    alignSelf: "center",
    borderRadius: 50,
    paddingBlockStart: 0,
    paddingBlockEnd: 3,
  },
});

export default AcceptButton