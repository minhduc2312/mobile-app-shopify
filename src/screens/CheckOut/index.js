import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Image, View, Text } from "react-native";
import { CheckOutScreen, PlaceOrderScreen, PaymentScreen, ReviewScreen } from "./pages";
import Notification from "../../components/Notification";
import CartIcon from "../../components/CartIcon";

const CheckOutStack = createStackNavigator();

const CheckOutStackScreen = ({}) => {
  return (
    <CheckOutStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Image source={require("_assets/images/shopLogo.png")} style={{ height: "80%" }} resizeMode="contain" />,
        headerStyle: {
          borderBottomWidth: 0,
        },
        headerTitleAlign: "center",
        headerLeftLabelVisible: null,
        headerRight: ({}) => (
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Notification />
            <CartIcon />
          </View>
        ),
      }}
    >
      <CheckOutStack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      <CheckOutStack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
      <CheckOutStack.Screen name="PaymentScreen" component={PaymentScreen} />
      <CheckOutStack.Screen name="ReviewScreen" component={ReviewScreen} />
    </CheckOutStack.Navigator>
  );
};
export default CheckOutStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
