import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WishList = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("HomeScreen");
      }}
    >
      <Text>Hello WishList</Text>
    </TouchableOpacity>
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
