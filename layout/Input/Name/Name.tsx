import { StyleSheet, View } from "react-native";

import { ThemedInput } from '@/components/ThemedInput';

const NameInput = () => {
    return (
        <View>
           <ThemedInput style={styles.input} placeholder="Name"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {

    alignSelf: "center",
    
  },
});

export default NameInput
