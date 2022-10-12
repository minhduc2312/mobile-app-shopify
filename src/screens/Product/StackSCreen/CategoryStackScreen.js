import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { ProductCategory } from "../pages";

const CategoryStack = createStackNavigator();

const CategoryStackScreen = (props) => (
    <CategoryStack.Navigator>
        <CategoryStack.Screen name="Shoes" component={ProductCategory} />
        <CategoryStack.Screen name="Clothing" component={ProductCategory} />
    </CategoryStack.Navigator>
)
export default CategoryStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});