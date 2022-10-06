import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ShoesScreen from './pages/Shoes'
import ClothingScreen from './pages/Clothing'
const MenStack = createStackNavigator();


const MenStackScreen = (props) => (
    <MenStack.Navigator>
        <MenStack.Screen name="Shoes" component={ShoesScreen} />
        <MenStack.Screen name="Clothing" component={ClothingScreen} />
    </MenStack.Navigator>
)
export default MenStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});