import React from "react";
import { View, Text, StyleSheet } from "react-native";

const More = (props) => (
  <View style={styles.container}>
    <Text>More</Text>
  </View>
);
export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
