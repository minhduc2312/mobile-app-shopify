import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreen from "../../screens/Home/index";
import HomeDetailsScreen from "../../screens/Home/pages/HomeDetails.js";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      ></Stack.Screen>
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetailsScreen}
        options={(props) => {
          return {
            headerTitleAlign: "center",
            headerShown: false,
            title: route.params?.title,
            headerLeft: ({ canGoBack, onPress }) => {
              return (
                <TouchableOpacity onPress={onPress}>
                  <Icon name="arrow-back" />
                </TouchableOpacity>
              );
            },
          };
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
