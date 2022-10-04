import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  AccountScreen,
  ProductScreen,
  CartScreen
} from "_screens";
import BottomTabNavigator from "../BottomTabNavigator";

const Drawer = createDrawerNavigator();




const DrawerNavigatorIOS = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorIOS;
