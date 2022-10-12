import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as LinkingExpo from 'expo-linking';

import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TextInput, Linking, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { sendPushNotification } from "./sendPushNotification";
import { useStore } from "_store";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

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
  const viewRef = useRef();

  useEffect(() => {
    console.log(viewRef.current.children)
  }, [])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback ref={viewRef} containerStyle={{ justifyContent: 'center', flex: 1, }} accessible={false}>
        <ScrollView
          // style={{ height: "100%" }}
          contentContainerStyle={{
            // flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Text>Your expo push token: {expoPushToken}</Text> */}
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
          <View style={{ marginTop: 50, borderWidth: 1, padding: 5, borderRadius: 5, borderColor: '#0F52BA' }}>
            <Button
              onPress={async () => {
                await sendPushNotification(state.expoToken, {
                  title: titleNotification + " 📬",
                  body: bodyNotification.trim(),
                  data: { someData: 'goes here' },
                });
                console.log('press')
              }}
              title='Press to push a notification'
            />
          </View>


        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}
