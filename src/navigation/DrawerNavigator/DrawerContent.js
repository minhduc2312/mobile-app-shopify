import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Drawer } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import IconCategory from 'react-native-vector-icons/MaterialIcons';

import { MenuNavigator } from "./MenuNavigator";
const DrawerContent = (props) => (
    <View style={styles.container}>
        <View style={styles.loginSection}>
            <Text style={styles.loginText}>Login/Register</Text>
        </View>
        <DrawerContentScrollView {...props} style={{ width: "100%", flex: 1 }}>
            <Drawer.Section style={{ flex: 1, width: "100%" }}>
                {MenuNavigator.map((menu) => (
                    <DrawerItem
                        key={menu.title}
                        icon={({ color, size }) => (
                            <Icon
                                name={menu.icon}
                                color={color}
                                size={size}
                            />
                        )}
                        label={menu.title}
                        style={{ color: '#333', width: "100%" }}
                        onPress={() => {
                            menu.navigation && props.navigation.navigate(menu.navigation)
                        }}
                    />
                ))}
            </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section style={{ flex: 1, width: '100%', justifyContent: "flex-end", }}>
            <Drawer.Item icon={({ color, size }) => (
                <Icon
                    name='settings-outline'
                    color={color}
                    size={size}
                />
            )}
                label={"Setting"}
            />
        </Drawer.Section>

    </View>
)
export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSection: {
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#333'
    },
    loginText: {
        fontSize: 30,
        color: '#fff'
    }
});
