import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ShoesScreen from './pages/Shoes'
import ClothingScreen from './pages/Clothing'
import { HeaderBackButton } from '@react-navigation/elements';
const MenStack = createStackNavigator();


const MenStackScreen = ({ navigation }) => (
    <MenStack.Navigator screenOptions={{
        headerLeft: ({ canGoBack, onPress }) => {
            return canGoBack ? <HeaderBackButton style={styles.button} onPress={onPress}>
            </HeaderBackButton> : <HeaderBackButton style={styles.button} onPress={() => navigation.navigate('HomeDrawer')}>
            </HeaderBackButton>
        },
    }}>
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