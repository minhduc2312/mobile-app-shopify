import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Notification from "_components/Notification";
import CartIcon from "_components/CartIcon";
import { ProductHome, ProductDetail } from "./pages";
import CartScreen from '../Cart'

const ProductStack = createStackNavigator();

const ProductStackScreen = ({ }) => {
  return (
    <ProductStack.Navigator screenOptions={{
      headerShown: true,
      headerTitle: () => (
        <Image
          source={require("_assets/images/shopLogo.png")}
          style={{ height: "80%" }}
          resizeMode="contain"
        />
      ),
      headerStyle: {
        borderBottomWidth: 0
      },
      headerTitleAlign: 'center',
      headerLeftLabelVisible: null,
      headerRight: ({ }) => (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Notification />
          <CartIcon />
        </View>
      )
    }}>
      <ProductStack.Screen name="ProductHome" component={ProductHome} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
      <ProductStack.Screen name="CartScreen" component={CartScreen} />
    </ProductStack.Navigator>
  );
};
export default ProductStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
