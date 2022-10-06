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

const ProductStack = createStackNavigator();

const ProductStackScreen = ({ navigation }) => (
  <ProductStack.Navigator screenOptions={{
    headerLeft: ({ canGoBack, onPress }) => {
      return canGoBack ? <HeaderBackButton style={styles.button} onPress={onPress}>
      </HeaderBackButton> : undefined
    },
  }}>
    <ProductStack.Screen name="ProductHome" component={ProductHome} options={{
      headerLeft: () => (
        <HeaderBackButton style={styles.button} onPress={() => navigation.jumpTo('HomeDrawer')}>
        </HeaderBackButton>
      )
    }}></ProductStack.Screen>
    <ProductStack.Screen name="ProductCategory" component={CategoryStackScreen} />
    <ProductStack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }}></ProductStack.Screen>
  </ProductStack.Navigator>
)
export default ProductStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});