import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import {
  HomeScreen,
  WishListScreen,
  NotificationScreen,
  MoreScreen,
} from "../screens";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const isShowHeader = Platform.OS === "android";

const BottomTabNavigation = ({ onPress }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        headerShown: isShowHeader,
        tabBarInActiveTintColor: "grey",
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowOpacity: 0.5,
          elevation: 5,
        },
        headerLeft: (props) => (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require("../assets/images/menu/Menu.png")} />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <Icon name="ellipsis-h" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingLeft: 10,
  },
});
