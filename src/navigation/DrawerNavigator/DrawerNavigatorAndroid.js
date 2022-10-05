import React, { useRef, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = (props) => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity
        onPress={(props) => {
          navigation.navigate("HomeScreen", {
            screen: "HomeDetails",
          });
          drawer.current.closeDrawer();
        }}
      >
        <Text>Hello World</Text>
      </TouchableOpacity>
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
