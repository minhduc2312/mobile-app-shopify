import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Account = (props) => (
  <View style={styles.container}>
    <Text>Account</Text>
  </View>
);

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountPage" component={Account} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
