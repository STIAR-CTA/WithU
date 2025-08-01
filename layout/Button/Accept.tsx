import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { View } from "react-native";

const AcceptButton = () => {
    return (
        <View style={{ marginTop: "20%" }}>
           <AnimatedButton 
             title="Accept" 
             variant="primary"
             onPress={() => console.log('Accept button pressed')}
           />
        </View>
    );
};

export default AcceptButton