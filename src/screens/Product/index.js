import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { ProductHome, ProductDetail } from "./pages";

import { HeaderBackButton } from '@react-navigation/elements';
import CategoryStackScreen from "./StackSCreen/CategoryStackScreen";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';

const ProductStack = createStackNavigator();

const ProductStackScreen = ({ }) => {
  const navigation = useNavigation();
  return (
    <ProductStack.Navigator screenOptions={{
      headerLeft: ({ canGoBack }) => {
        console.log(canGoBack)
        return (
          <HeaderBackButton style={styles.button} onPress={() => {
            if (canGoBack) {
              navigation.goBack()
            } else {
              navigation.navigate('HomeDrawer')
            }
          }}>
          </HeaderBackButton>
        )
      },
      headerTitleAlign: "center"
    }}>
      <ProductStack.Screen name="ProductHome" component={ProductHome} options={{

      }}></ProductStack.Screen>
      <ProductStack.Screen name="ProductCategory" component={CategoryStackScreen} />
      <ProductStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }}></ProductStack.Screen>
    </ProductStack.Navigator>
  )
}
export default ProductStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});