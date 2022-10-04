import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";


const HomeDetailsScreen = (props) => (
    <SafeAreaView style={styles.container}>
        <Text>HomeDetailScreen</Text>
    </SafeAreaView>
)
export default HomeDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});