import { View } from "react-native";

import { ThemedButton } from '@/components/ThemedButton';

const AcceptButton = () => {
    return (
        <View style={{ marginTop: "20%" }}>
           <ThemedButton title="Accept" variant="primary"/>
        </View>
    );
};



export default AcceptButton