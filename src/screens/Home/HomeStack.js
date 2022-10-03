import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import HomeScreen from "./index";
import HomeDetailsScreen from "./HomeDetails.js";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} options={{ headerTitleAlign: 'center' }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
export default HomeStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});