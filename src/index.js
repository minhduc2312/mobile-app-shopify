import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import DrawerContent from "_navigation/DrawerNavigator/DrawerContent";
import MainTabScreen from "./navigation/MainTabScreen"

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductStackScreen, MenStackScreen, WomenStackScreen } from "./screens";

const Drawer = createDrawerNavigator();

export default function App() {

    return (
        <NavigationContainer style={styles.container}>
            <StatusBar style="dark"></StatusBar>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="ProductsDrawer" component={ProductStackScreen} />
                <Drawer.Screen name="MenDrawer" component={MenStackScreen} />
                <Drawer.Screen name="WomenDrawer" component={WomenStackScreen} />
                {/* <Drawer.Screen name="SignInDrawer" component={SignInScreen} />
                <Drawer.Screen name="SignUpDrawer" component={SignUpScreen} /> */}

            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
