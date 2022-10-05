import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonImage = () => (
    <SkeletonPlaceholder style={styles.container}>
        <View style={{ width: "100%", height: '100%' }}>
        </View>
    </SkeletonPlaceholder>
)

const Product = ({ title, image }) => {
    return (
        <View style={styles.container}>
            {!image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <SkeletonImage />
            )}

            <Text>clothes</Text>
        </View>
    )
}
export default Product;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: 60,
        width: 120,
        borderRadius: 10,
        shadowRadius: 100
    }
});