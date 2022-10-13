import { useFonts } from "expo-font";
import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CustomText(props) {
  const [fontsLoader] = useFonts({
    TenorSans: require("../../assets/fonts/TenorSans-Regular.ttf"),
  });

  if (!fontsLoader) return null;

  return <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "TenorSans",
    fontSize: 16,
  },
});
