
import React, { useRef, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  AccountScreen,
  ProductScreen,
  CartScreen,
} from "_screens";
import BottomTabNavigator from "../BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigatorAndroid = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text>Hello World</Text>
      {/* <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            title: "Home",
            headerTitle: () => (
              <Image
                source={require("_assets/images/shopLogo.png")}
                style={styles.logoImageResize}
              />
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <Icon name="bell" size={20} color="#fff" />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Products" component={ProductScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator> */}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <BottomTabNavigator
        onPress={() => {
          drawer.current.openDrawer();
        }}
      />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
  },
  buttonOpenDrawer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 30,
  },
});

export default DrawerNavigatorAndroid;
