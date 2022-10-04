import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

const Product = ({ title, image }) => (
    <View style={styles.container}>
        {console.log(image)}
        <Image style={styles.image} source={{ uri: image }} />
        <Text>clothes</Text>
    </View>
)
export default Product;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
        height: '48%',
        width: Dimensions.get('screen').width / 2 - 10,
    },
    image: {
        flex: 1
    }
});