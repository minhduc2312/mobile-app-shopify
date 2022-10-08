import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ProductHome, ProductDetail } from "./pages";

const ProductStack = createStackNavigator();

const ProductStackScreen = ({ }) => {
  return (
    <ProductStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ProductStack.Screen name="ProductHome" component={ProductHome} options={{
      }} />
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
