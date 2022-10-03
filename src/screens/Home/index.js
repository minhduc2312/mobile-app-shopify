import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";


const Home = ({ navigation, onclick }) => (
    <View style={styles.container}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeDetails')}>
            <Text>
                Details
            </Text>
        </TouchableOpacity>
    </View>
)
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});