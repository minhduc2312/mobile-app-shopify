import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Drawer } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MenuNavigator } from "./MenuNavigator";
const DrawerContent = (props) => (
    <View style={styles.container}>
        <DrawerContentScrollView {...props} style={{ width: "100%" }}>
            <Drawer.Section style={{ flex: 1, width: "100%" }}>
                {MenuNavigator.map((menu) => (
                    <DrawerItem
                        key={menu.title}
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
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
    </View>
)
export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});