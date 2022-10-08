import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";

import DrawerContent from "_navigation/DrawerNavigator/DrawerContent";
import MainTabScreen from "./navigation/MainTabScreen";
import Footer from "./screens/Footer";
import { HeaderBackButton } from "@react-navigation/elements";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoginScreen, ProductScreen, RegisterScreen } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import BraceletScreen from "./screens/Home/pages/CategoriesSubMenu/Bracelet";
import EarringScreen from "_screens/Home/pages/CategoriesSubMenu/Earring";
import NecklaceScreen from "_screens/Home/pages/CategoriesSubMenu/Necklace";
import OthersScreen from "_screens/Home/pages/CategoriesSubMenu/Others";

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

//Drawer to show main screen
const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    initialRouteName="HomeDrawer"
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
  </Drawer.Navigator>
);

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack.Navigator
          style={{ flex: 1 }}
          screenOptions={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image source={require('_assets/images/shopLogo.png')} style={{ height: '80%' }} resizeMode="contain" />
            ),
          }}
        >
          <MainStack.Screen name="MainScreen" component={MainDrawer} options={{ headerShown: false }} />
          <MainStack.Screen name="Product" component={ProductScreen} />
          <MainStack.Screen name="Bracelet" component={BraceletScreen} />
          <MainStack.Screen name="Earring" component={EarringScreen} />
          <MainStack.Screen name="Necklace" component={NecklaceScreen} />
          <MainStack.Screen name="Others" component={OthersScreen} />
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
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
    paddingTop: StatusBar.currentHeight,
  },
});
