import * as Notifications from 'expo-notifications';

import React, { useState } from 'react';
import { Text, View, Button, Platform, TextInput, Linking, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { sendPushNotification } from "./sendPushNotification";
import { useStore } from "_store";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [titleNotification, onChangeTitleNotification] = useState('FireGroup')
  const [bodyNotification, onChangeBodyNotification] = useState('Hello everyone!!!')
  const [state] = useStore();


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback containerStyle={{ justifyContent: 'center', flex: 1, }} accessible={false}>
        <ScrollView
          // style={{ height: "100%" }}
          contentContainerStyle={{
            // flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Text>Your expo push token: {expoPushToken}</Text> */}
          <Text style={{ marginBottom: 50, fontSize: 18, fontWeight: '600' }}>Demo Notification</Text>

          <View style={{ alignItems: 'center', justifyContent: 'center', width: '75%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", width: '100%' }}>
              <Text>Title:</Text>
              <TextInput
                onChangeText={onChangeTitleNotification}
                value={titleNotification}
                style={{ marginLeft: 10, borderWidth: 1, borderColor: '#c4c4c4', padding: 5, width: 200, borderRadius: 4 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: 10, width: '100%' }}>
              <Text>Content:</Text>
              <TextInput
                multiline
                onChangeText={onChangeBodyNotification}
                value={bodyNotification}
                style={{ marginLeft: 10, borderWidth: 1, borderColor: '#c4c4c4', padding: 5, width: 200, borderRadius: 4 }}
              />
            </View>
          </View>
          <TouchableOpacity style={{ marginTop: 50, borderRadius: 5, borderColor: '#0F52BA', backgroundColor: '#0F52BA', padding: 15, paddingHorizontal: 20 }}
            onPress={async () => {
              await sendPushNotification(state.expoToken, {
                title: titleNotification + " 📬",
                body: bodyNotification.trim(),
                data: { someData: 'goes here' },
              })
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
              Press to push a notification
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
