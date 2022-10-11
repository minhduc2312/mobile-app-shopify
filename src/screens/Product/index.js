import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Notification from "_components/Notification";
import Cart from "_components/Cart";
import { ProductHome, ProductDetail } from "./pages";

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
      headerTitleAlign: 'center',
      headerLeftLabelVisible: null,
      headerRight: ({ }) => (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <Notification />
          <Cart />
        </View>
      )
    }}>
      <ProductStack.Screen name="ProductHome" component={ProductHome} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
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
