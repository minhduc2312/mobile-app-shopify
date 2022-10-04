
import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { BottomTabNavigator } from "_navigation";
const DrawerNavigatorAndroid = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>

    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <BottomTabNavigator
        onPress={() => {
          drawer.current.openDrawer();
        }}
      />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
  },
  buttonOpenDrawer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 30,
  },
});

export default DrawerNavigatorAndroid;
