import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import {
    DrawerNavigatorIOS,
    DrawerNavigatorAndroid,
} from "_navigation";
export default function App() {
    return (
        <NavigationContainer style={styles.container}>
            <StatusBar />
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
