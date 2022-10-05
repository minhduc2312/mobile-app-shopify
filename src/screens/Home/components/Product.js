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
    <SkeletonPlaceholder >
        <View style={{
            width: 180,
            height: 200,
            // paddingHorizontal: 5,
            marginLeft: 10,
            borderRadius: 10,
            shadowRadius: 100
        }}>
        </View>
    </SkeletonPlaceholder>
)

const Product = ({ title, image }) => {
    return (
        <View style={styles.container}>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <SkeletonImage />
            )}
            {/* <SkeletonImage /> */}
            <Text>{title}</Text>
        </View>
    )
}
export default Product;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        alignItems: 'center',
        width: 180,
        height: 200,
        paddingHorizontal: 5
    },
    image: {
        width: '100%',
        height: "100%",
        borderRadius: 10,
        shadowRadius: 100
    }
});