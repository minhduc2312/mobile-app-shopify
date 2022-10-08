import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ProductHome, ProductDetail } from "./pages";

import { HeaderBackButton } from "@react-navigation/elements";
import CategoryStackScreen from "./StackSCreen/CategoryStackScreen";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

const ProductStack = createStackNavigator();

const ProductStackScreen = ({ }) => {
  const navigation = useNavigation();
  return (
    <ProductStack.Navigator screenOptions={{
      headerLeft: ({ canGoBack }) => {
        return (
          <HeaderBackButton style={styles.button} onPress={() =>
            canGoBack ? navigation.goBack() : navigation.navigate('MainStack')
          }>
          </HeaderBackButton>
        )
      },
      headerTitleAlign: "center",
      headerTitle: () => (
        <Image source={require('_assets/images/shopLogo.png')} style={{ height: '80%' }} resizeMode="contain" />
      ),

    }}>
      <ProductStack.Screen name="ProductHome" component={ProductHome} options={{
      }} />
      <ProductStack.Screen name="ProductCategory" component={CategoryStackScreen} />
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
