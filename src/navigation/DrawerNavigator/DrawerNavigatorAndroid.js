
import React, { useRef, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import BottomTabNavigator from "../BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Home",
    navigation: "HomeScreen"
  },
  {
    id: "bd7azzzzea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "All Product",
    navigation: "ProductHome"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "New Threads",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Special Occasions",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f-bd96112-145571e29d72",
    title: "Best Sellers",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e292322",
    title: "Clothing",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f-bd96-1231e29d72",
    title: "Shoes",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f-11bd9612571e29d72",
    title: "Accessories",
    navigation: ""
  },
  {
    id: "58694a0f-3da1-471f1296-145571e29d72",
    title: "Sale",
    navigation: ""
  },


];

const MenuItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);


const DrawerNavigatorAndroid = () => {
  const drawer = useRef(null);
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => {
    const renderMenuItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#ba9490" : "#fff";
      const color = item.id === selectedId ? '#fff' : '#333';

      return (
        <MenuItem
          item={item}
          onPress={() => {
            navigation.navigate("HomeScreen", {
              screen: "HomeDetails"
            })
            drawer.current.closeDrawer();
            setSelectedId(item.id)
          }}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
    return (
      <View style={[styles.navigationContainer]}>
        <TouchableOpacity onPress={() => alert("go to register page")}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuHeaderText}>Login / Register</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          style={styles.flatList}
        />
      </View>
    );
  }
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
  paragraph: {
    padding: 16,
    fontSize: 15,
  },
  buttonOpenDrawer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 30,
  },
  navigationContainer: {
    backgroundColor: '#551E18',
    marginTop: 30
  },
  menuHeader: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuHeaderText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
  flatList: {
  }

});

export default DrawerNavigatorAndroid;
