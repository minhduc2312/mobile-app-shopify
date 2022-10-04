import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WishList = (props) => (
  <View style={styles.container}>
    <Text>WishList</Text>
  </View>
);
export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
