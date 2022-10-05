import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ProductDetail = (props) => (
    <View style={styles.container}>
        <Text>ProductDetail</Text>
    </View>
)
export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});