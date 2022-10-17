import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, StatusBar, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import * as Linking from 'expo-linking';
import DrawerContent from "_navigation/DrawerNavigator/DrawerContent";
import MainTabScreen from "./navigation/MainTabScreen";


import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoginScreen, ProductScreen, RegisterScreen } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import CheckOutScreen from "./screens/CheckOut";
import BraceletScreen from "./screens/Home/pages/CategoriesSubMenu/Bracelet";
import EarringScreen from "_screens/Home/pages/CategoriesSubMenu/Earring";
import NecklaceScreen from "_screens/Home/pages/CategoriesSubMenu/Necklace";

import Notification from "_components/Notification";
import { emptyCart, useStore } from "./store";
import CartIcon from '_components/CartIcon'
import { useEffect } from "react";
import RegisterNotification from "_screens/Notification/RegisterNotification";

import { getCheckoutItem } from "./helper/getCheckoutItem";
import { handleAddToCart } from "./helper/handleAddToCart";
import axios from "_plugins/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

//Drawer to show main screen
const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    initialRouteName="HomeDrawer"
    screenOptions={{
      headerShown: false,
      headerTitle: () => <Image source={require("_assets/images/shopLogo.png")} style={{ height: "80%" }} resizeMode="contain" />,
      headerTitleAlign: "center",
      headerRight: ({ }) => (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Notification />
          <CartIcon />
        </View>
      )
    }}
  >
    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} options={{ headerShown: true }} />
  </Drawer.Navigator>
);

export default function App() {
  const [state, dispatch] = useStore();
  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Product: {
          screens: {
            ProductHome: "product",
            ProductDetail: "product/:id"
          }
        },
      }
    }
  }

  useEffect(() => {
    const getCartItems = async () => {
      //get variants item in checkout 
      const checkout = await getCheckoutItem();
      checkout.line_items.map(item => {
        handleAddToCart(state, dispatch, item.variant_id, item.quantity) //add item to cart local
      })
    }
    getCartItems()
    return () => {
      dispatch(emptyCart())
    }
  }, [])
  useEffect(() => {

    const updateCart = async () => {
      const checkoutToken = await AsyncStorage.getItem('OMDP:checkout_token')

      const data = {
        checkout: {
          line_items: [
            ...state.cart.map(item => {
              return {
                variant_id: item.id,
                quantity: item.quantity
              }
            })
          ]
        }
      }
      axios.put(`/admin/api/2022-10/checkouts/${checkoutToken}.json`, JSON.stringify(data))
    }
    updateCart();


  }, [state.cart])
  return (
    <NavigationContainer style={styles.container}
      linking={linking}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
      <RegisterNotification />
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack.Navigator
          style={{ flex: 1 }}
          screenOptions={{
            headerTitleAlign: "center",

            headerTitle: () => <Image source={require("_assets/images/shopLogo.png")} style={{ height: "80%" }} resizeMode="contain" />,
            headerRight: ({ }) => (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <Notification />
                <CartIcon />
              </View>
            )
          }}
        >
          <MainStack.Screen name="MainScreen" component={MainDrawer} options={{ headerShown: false, title: "Home" }} />
          <MainStack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
          {/* <MainStack.Screen name="PlaceOrder" component={PlaceOrderScreen} options={{ headerShown: false }} /> */}
          <MainStack.Screen name="Bracelet" component={BraceletScreen} />
          <MainStack.Screen name="Earring" component={EarringScreen} />
          <MainStack.Screen name="Necklace" component={NecklaceScreen} />
          <MainStack.Screen name="Others" component={CheckOutScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
          <MainStack.Screen name="CheckOutScreen" component={CheckOutScreen} options={{ headerShown: false }} />
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