import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ClothingScreen = (props) => (
    <View style={styles.container}>
        <Text>ClothingScreen</Text>
    </View>
)
export default ClothingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});