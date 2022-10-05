import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const ProductHome = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ProductDetail');
            }}
        ><Text>ProductDetail</Text></TouchableOpacity>
    </View>
)
export default ProductHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});