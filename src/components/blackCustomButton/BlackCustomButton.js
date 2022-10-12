import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import CustomText from "_components/customText/CustomText.js";

export default function BlackCustomButton(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={[styles.button, props.style]} onPress={onPress}>
      <CustomText style={styles.text}>{title}</CustomText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
