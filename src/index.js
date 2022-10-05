import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Platform } from "react-native";
import { useFonts, userFonts } from "expo-font";

import {
    DrawerNavigatorIOS,
    DrawerNavigatorAndroid,
} from "_navigation";

export default function App() {
  const [fontsLoader] = useFonts({
    TenorSans: require("_assets/fonts/TenorSans-Regular.ttf"),
  });
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      {/* <BottomTabNavigation /> */}
      {Platform.OS === "ios" ? (
        <DrawerNavigatorIOS />
      ) : (
        <DrawerNavigatorAndroid />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "TenorSans",
  },
});
