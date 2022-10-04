import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BannerSection from "_screens/Home/components/BannerSection";

const Stack = createStackNavigator();

const Home = (props) => (
  <View style={styles.container}>
    <BannerSection></BannerSection>
  </View>
);
const screen = Dimensions.get("screen");
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: screen.width,
    height: screen.height,
  },
});
