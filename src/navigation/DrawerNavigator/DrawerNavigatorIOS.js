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
import HomeStack from "../NavigationStack/HomeStack";
import ProductStack from "../NavigationStack/ProductStack";

const Drawer = createDrawerNavigator();

const DrawerNavigatorIOS = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={BottomTabNavigator}
        options={{
          title: 'Home'
        }}
      />
      <Drawer.Screen name="Categories" component={HomeStack} />
      <Drawer.Screen name="ProductStack" component={ProductStack} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorIOS;
