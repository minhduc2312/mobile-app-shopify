import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, TextInput } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const [titleNotification, onChangeTitleNotification] = useState("FireGroup");
  const [bodyNotification, onChangeBodyNotification] =
    useState("Hello everyone!!!");
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // console.log(response.notification.request.content.data);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Title:</Text>
          <TextInput
            onChangeText={onChangeTitleNotification}
            value={titleNotification}
            style={{
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#c4c4c4",
              padding: 5,
              width: 200,
            }}
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Text>Body:</Text>
          <TextInput
            onChangeText={onChangeBodyNotification}
            value={bodyNotification}
            style={{
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#c4c4c4",
              padding: 5,
              width: 200,
            }}
          />
        </View>
      </View>
      <Button
        title="Press to push a notification"
        onPress={async () => {
          await schedulePushNotification(titleNotification, bodyNotification);
        }}
      />
    </View>
  );
}

async function schedulePushNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title + "📬",
      body: body,
      data: { data: "goes here" },
    },
    trigger: null,
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
