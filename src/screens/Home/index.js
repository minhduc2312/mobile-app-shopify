import { StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./pages/HomePage";
import BraceletScreen from "./pages/CategoriesSubMenu/Bracelet";
import EarringScreen from "./pages/CategoriesSubMenu/Earring";
import NecklaceScreen from "./pages/CategoriesSubMenu/Necklace";
import OthersScreen from "./pages/CategoriesSubMenu/Others";
import { ProductScreen } from "_screens";

const Stack = createStackNavigator();

const screen = Dimensions.get("screen");
const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Bracelet" component={BraceletScreen} />
            <Stack.Screen name="Earring" component={EarringScreen} />
            <Stack.Screen name="Necklace" component={NecklaceScreen} />
            <Stack.Screen name="Others" component={OthersScreen} />
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
