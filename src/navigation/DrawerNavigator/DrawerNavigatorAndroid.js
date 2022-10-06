
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

import BottomTabNavigator from "../MainTabScreen";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const MenuNavigator = [
  {
    title: "All Products",
    navigate: "Products"
  },
  {
    title: "Categories",
    submenu: [
      {
        title: "Shoes",
        navigation: "Category/Shoes"

      },
      {
        title: "Clothing",
        navigation: "Category/Clothing"
      }
    ],
  },
  {
    title: "Men",
    navigation: "Men",
    submenu: [
      {
        title: "Shoes",
        navigation: "Men/Shoes"

      },
      {
        title: "Clothing",
        navigation: "Men/Clothing"
      }
    ]
  },
  {
    title: "Women",
    navigation: "Women",
    submenu: [
      {
        title: "Shoes",
        navigation: "Women/Shoes"

      },
      {
        title: "Clothing",
        navigation: "Women/Clothing"
      }
    ]
  }
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
