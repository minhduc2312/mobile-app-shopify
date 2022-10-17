import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as LinkingExpo from 'expo-linking';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TextInput, Linking } from 'react-native';
import { useStore } from "_store";
import { setExpoPushToken } from "_store";
import { getDataFromFireBase } from "_utils";
import { setDataFireBase } from "_utils";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: true,
    }),
});

const RegisterNotification = (props) => {
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const [state, dispatch] = useStore()
    const lastNotificationResponse = Notifications.useLastNotificationResponse();
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => dispatch(setExpoPushToken(token)));
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });
        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(async (response) => {
            });

        // const subscription = Notifications.addPushTokenListener(registerForPushNotificationsAsync);
        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
            // subscription.remove();
        };
    }, []);
    return (
        <View>
        </View>
    )
}


async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        setDataFireBase("user-information", token)
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}

export default RegisterNotification;