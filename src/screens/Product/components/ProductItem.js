import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions
} from "react-native";

const ProductItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image.src }} style={{ width: '100%', height: 200 }} />
            <View >
                <View>
                    <Text>Price</Text>
                    <Text>Title</Text>
                </View>
                <TouchableHighlight>
                    <Text>Add to Cart</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}
export default ProductItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: Dimensions.get('screen').width / 2 - 50,
        backgroundColor: '#333'

    }
});