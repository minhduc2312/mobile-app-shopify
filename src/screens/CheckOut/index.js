import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ChechOut = (props) => (
  <View style={styles.container}>
    <Text>ChechOut</Text>
  </View>
);

const ChechOutStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChechOut" component={ChechOut} />
    </Stack.Navigator>
  );
};

export default ChechOutStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
