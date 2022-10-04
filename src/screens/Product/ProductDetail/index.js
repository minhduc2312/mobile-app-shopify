import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProductDetail = (props) => (
  <View style={styles.container}>
    <Text>Product Detail</Text>
  </View>
);

const ProductDetailStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Product Detail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ProductDetailStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
