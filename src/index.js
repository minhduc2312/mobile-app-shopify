import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import DrawerContent from "_navigation/DrawerNavigator/DrawerContent";
import MainTabScreen from "./navigation/MainTabScreen"

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductStackScreen, MenStackScreen, WomenStackScreen } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

//Drawer to show main screen
const MainDrawer = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="HomeDrawer"
        screenOptions={{
            headerShown: true,
            headerTitle: () => (
                <Image source={require('_assets/images/shopLogo.png')} style={{ height: '80%' }} resizeMode="contain" />
            ),
            headerTitleAlign: 'center'
        }}
    >
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}
            options={{ headerShown: true }} />

    </Drawer.Navigator>
)


export default function App() {
    return (
        <NavigationContainer style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
            <SafeAreaView style={{ flex: 1 }}>
                <MainStack.Navigator style={{ flex: 1 }} screenOptions={{
                    headerShown: false
                }}>
                    <MainStack.Screen name="MainScreen" component={MainDrawer} />
                    <MainStack.Screen name="ProductStack" component={ProductStackScreen} />
                    <MainStack.Screen name="MenStack" component={MenStackScreen} />
                    <MainStack.Screen name="WomenStack" component={WomenStackScreen} />

                </MainStack.Navigator>
            </SafeAreaView>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight
    },
});
