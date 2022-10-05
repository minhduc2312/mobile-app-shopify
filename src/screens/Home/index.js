import { StyleSheet, Dimensions} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

const screen = Dimensions.get('screen')
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: screen.width,
        height: screen.height
    }
});
