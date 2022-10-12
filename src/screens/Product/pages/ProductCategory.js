import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const ProductCategory = ({ navigation, route }) => (
    <View style={styles.container}>
        <Text>{route.params.title || navigation.name}</Text>
    </View>
)
export default ProductCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});