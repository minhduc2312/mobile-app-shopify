import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, Platform } from "react-native";
import {
  DrawerNavigatorIOS,
  DrawerNavigatorAndroid,
  BottomTabNavigation,
} from "_navigation";
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
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
  },
});
