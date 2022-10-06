import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import HomePage from "./pages/HomePage";
import HomeDetails from "./pages/HomeDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeDetails" component={HomeDetails}
                options={({ route }) => ({
                    headerTitleAlign: 'center',
                    title: route.params?.title,
                })
                }
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
export default HomeStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});