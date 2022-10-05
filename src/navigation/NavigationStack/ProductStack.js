import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { ProductHome, ProductDetail } from "_screens/Product/pages";

import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createStackNavigator();

const ProductStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerLeft: ({ canGoBack, onPress }) => {
            return canGoBack ? <HeaderBackButton style={styles.button} onPress={onPress}>
            </HeaderBackButton> : undefined
        },
    }}>
        <Stack.Screen name="ProductHome" component={ProductHome} options={{
            headerLeft: () => (
                <HeaderBackButton style={styles.button} onPress={() => navigation.jumpTo('HomeStack')}>
                </HeaderBackButton>
            )
        }}></Stack.Screen>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }}></Stack.Screen>
    </Stack.Navigator>
)
export default ProductStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});