import { StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

const screen = Dimensions.get("screen");
const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default HomeStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: screen.width,
        height: screen.height,
    },
});
