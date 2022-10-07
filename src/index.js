import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, StatusBar } from "react-native";
import DrawerContent from "_navigation/DrawerNavigator/DrawerContent";
import MainTabScreen from "./navigation/MainTabScreen";
import { HeaderBackButton } from "@react-navigation/elements";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ProductStackScreen,
  MenStackScreen,
  WomenStackScreen,
} from "./screens";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          headerTitle: () => (
            <Image
              source={require("_assets/images/shopLogo.png")}
              style={{ height: "80%" }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen
          name="HomeDrawer"
          component={MainTabScreen}
          options={{ headerShown: true }}
        />
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
