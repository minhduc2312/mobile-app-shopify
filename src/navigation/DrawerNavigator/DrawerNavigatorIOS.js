import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  ProductScreen,
  LoginScreen,
  RegisterScreen,
  AccountScreen,
  CartScreen,
} from "_screens";
import BottomTabNavigator from "../BottomTabNavigator";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ marginTop: 0 }}>
      {/* Login and Register */}
      <TouchableOpacity onPress={() => alert("go to register page")}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuHeaderText}>Login / Register</Text>
        </View>
      </TouchableOpacity>

      {/* Menu Item */}
      {Object.entries(props.descriptors).map(([key, descriptor], index) => {
        const focused = index === props.state.index;
        if (descriptor.route.name === "Home") {
          return null;
        }
        return (
          <DrawerItem
            key={key}
            label={() => (
              <Text
                style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
              >
                {descriptor.options.title}
              </Text>
            )}
            onPress={() =>
              descriptor.navigation.navigate(descriptor.route.name)
            }
            style={[
              styles.drawerItem,
              focused ? styles.drawerItemFocused : null,
            ]}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigatorIOS = (navigation) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          height: 100,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Image source={require("_assets/images/menu/Menu.png")} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <Icon name="shopping-cart" size={20} color="#000" />
          </View>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          headerTitle: () => (
            // <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("_assets/images/shopLogo.png")}
              style={styles.logoImageResize}
            />
            // </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="New Threads"
        component={LoginScreen}
        options={{
          title: "New Threads",
        }}
      />
      <Drawer.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: "All Product",
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="Special Occasions"
        component={RegisterScreen}
        options={{
          title: "Special Occasions",
        }}
      />
      <Drawer.Screen
        name="Best Sellers"
        component={AccountScreen}
        options={{
          title: "Best Sellers",
        }}
      />
      <Drawer.Screen
        name="Clothing"
        component={ProductScreen}
        options={{
          title: "Clothing",
        }}
      />
      <Drawer.Screen
        name="Shoes"
        component={CartScreen}
        options={{
          title: "Shoes",
        }}
      />
      <Drawer.Screen
        name="Accessories"
        component={CartScreen}
        options={{
          title: "Accessories",
        }}
      />
      <Drawer.Screen
        name="Sale"
        component={CartScreen}
        options={{
          title: "Sale",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menuHeader: {
    flex: 1,
    height: 100,
    marginBottom: 20,
    backgroundColor: "#551E18",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHeaderText: {
    color: "#fff",
    fontSize: 30,
  },
  logoImageResize: {
    width: 79,
    height: 32,
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});

export default DrawerNavigatorIOS;
