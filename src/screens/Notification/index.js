import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Notification = (props) => (
  <View style={styles.container}>
    <Text>Notification</Text>
  </View>
);
export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
