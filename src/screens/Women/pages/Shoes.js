import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ShoesScreen = (props) => (
    <View style={styles.container}>
        <Text>ShoesScreen</Text>
    </View>
)
export default ShoesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});