import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import IconCategory from "react-native-vector-icons/MaterialIcons";

import { MenuNavigator } from "./MenuNavigator";
const DrawerContent = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Login / Register Button */}
      <TouchableOpacity
        style={styles.loginSection}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        <Text style={styles.loginText}>Login/Register</Text>
      </TouchableOpacity>
      <DrawerContentScrollView
        {...props}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Drawer.Section style={{ flex: 1, width: "100%" }}>
          {MenuNavigator.map((menu) => (
            <DrawerItem
              key={menu.title}
              icon={({ color, size }) => (
                <Image source={menu.icon} style={styles.drawerImage} />
              )}
              label={menu.title}
              style={{ color: "#333", width: "100%" }}
              onPress={() => {
                menu.navigation && props.navigation.navigate(menu.navigation);
              }}
            />
          ))}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
      >
        <Drawer.Item
          icon={({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          )}
          label={"Setting"}
        />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  loginSection: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#333",
  },
  loginText: {
    fontSize: 30,
    color: "#fff",
  },
  drawerImage: {
    width: 24,
    height: 24,
  },
});
