import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { WishListScreen, NotificationScreen, MoreScreen } from '../screens'
import HomeStack from "../screens/Home/HomeStack";
const Tab = createBottomTabNavigator();

const BottomTabNavigation = (props) => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInActiveTintColor: 'grey',
            headerTitleAlign: 'center',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: { width: 5, height: 3 },
                shadowOpacity: 0.5,
                elevation: 5,
            }
        }}
    >
        <Tab.Screen name="Home2" component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Icon name={focused ? "home" : "home-outline"} color={color} size={24} />
                ),

            }}
        />
        <Tab.Screen name="WishList" component={WishListScreen}
            options={{
                tabBarLabel: 'WishList',
                tabBarIcon: ({ color, focused }) => (
                    <Icon name={focused ? "heart" : "heart-outline"} color={color} size={24} />
                ),
            }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen}
            options={{
                tabBarBadge: 3,
                tabBarLabel: 'Notification',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? "bell" : "bell-outline"} color={color} size={24} />

                ),
            }}
        />
        <Tab.Screen name="More" component={MoreScreen}
            options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color, focused }) => (
                    <Icon name={focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline"} color={color} size={24} />
                ),
            }}
        />
    </Tab.Navigator>
)
export default BottomTabNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});