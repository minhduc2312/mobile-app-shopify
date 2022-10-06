import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ShoesScreen from "./pages/Shoes";
import ClothingScreen from "./pages/Clothing";

const WomenStack = createStackNavigator();

const WomenStackScreen = (props) => (
    <WomenStack.Navigator>
        <WomenStack.Screen name="Shoes" component={ShoesScreen} />
        <WomenStack.Screen name="Clothing" component={ClothingScreen} />
    </WomenStack.Navigator>
)
export default WomenStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});