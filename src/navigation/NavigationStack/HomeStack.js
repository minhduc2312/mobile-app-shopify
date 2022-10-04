import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import HomeScreen from "../../screens/Home/index";
import HomeDetailsScreen from "../../screens/Home/pages/HomeDetails.js";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="HomeDetails" component={HomeDetailsScreen}
                options={({ route }) => ({
                    headerTitleAlign: 'center',
                    title: route.params?.title,
                })
                }
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