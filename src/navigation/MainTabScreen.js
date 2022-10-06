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

import Icon from "react-native-vector-icons/Ionicons";
import IconBell from "react-native-vector-icons/Fontisto";
import {
  HomeStackScreen,
  WishListScreen,
  NotificationScreen,
  MoreScreen,
} from "../screens";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const isShowHeader = Platform.OS === "android";

const BottomTabNavigation = ({ onPress }) => (
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
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, focused }) => <Icon name={focused ? "home" : 'home-outline'} color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="WishList"
      component={WishListScreen}
      options={{
        tabBarLabel: "WishList",
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? "heart" : 'heart-outline'} color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        tabBarLabel: "Notification",
        tabBarBadge: 3,
        tabBarIcon: ({ color, focused }) => <IconBell name={focused ? 'bell-alt' : 'bell'} color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="More"
      component={MoreScreen}
      options={{
        tabBarLabel: "More",
        tabBarIcon: ({ color, focused }) => (
          <Icon name={focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline"} color={color} size={32} />
        ),
      }}
    />
  </Tab.Navigator>
);
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
