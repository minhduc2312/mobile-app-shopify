import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { HomeScreen, WishListScreen, NotificationScreen, MoreScreen } from '../screens'



const Tab = createBottomTabNavigator();

const BottomTabNavigation = (props) => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInActiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: { width: 5, height: 3 },
                shadowOpacity: 0.5,
                elevation: 5,
            }
        }}
    >
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={24} />
                ),

            }}
        />
        <Tab.Screen name="WishList" component={WishListScreen}
            options={{
                tabBarLabel: 'WishList',
                tabBarIcon: ({ color }) => (
                    <Icon name="heart" color={color} size={24} />

                ),
            }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen}
            options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ color }) => (
                    <Icon name="bell" color={color} size={24} />

                ),
            }}
        />
        <Tab.Screen name="More" component={MoreScreen}
            options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color }) => (
                    <Icon name="ellipsis-h" color={color} size={24} />

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