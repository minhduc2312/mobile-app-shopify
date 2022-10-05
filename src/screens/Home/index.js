import { StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BannerSection from "_screens/Home/components/BannerSection";
import axios from "_plugins/axios";

import HomePage from "./pages/HomePage";
import HomeDetails from "./pages/HomeDetails";

const Stack = createStackNavigator();

const screen = Dimensions.get("screen");
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screen.width,
    height: screen.height,
  },
});
