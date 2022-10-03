import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


const HomeDetailsScreen = (props) => (
    <View style={styles.container}>
        <Text>HomeDetailScreen</Text>
    </View>
)
export default HomeDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});