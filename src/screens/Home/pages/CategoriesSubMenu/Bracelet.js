import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BraceletScreen = (props) => (
  <View style={styles.container}>
    <Text>BraceletScreen</Text>
  </View>
);
export default BraceletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
