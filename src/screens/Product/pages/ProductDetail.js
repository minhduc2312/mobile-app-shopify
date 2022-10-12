import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native";

const ProductDetail = ({ route, navigation }) => {
    if (!route.params.id)
        return (
            <View>
                Product not found
            </View>
        )

    const [selectedItem, setSelectedItem] = useState(0)
    const product = route.params
    // console.log(navigation);
    useEffect(() => {
        navigation.setOptions({ title: product?.title })

    }, [])
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageSection}>
                <Image source={{ uri: product?.image.src }} style={styles.image} />
                {/* {product?.images.map((image, index) => (
                <Image key={index} source={{ uri: image.src }} />
            ))} */}
                {/* <Text>{product?.image.src}</Text> */}
                <View style={styles.subImageSection} >
                    {product?.images.map((image, index) => (
                        <Image key={index} source={{ uri: image.src }} style={styles.subImage} />
                    ))}
                </View>
            </View>
            <View style={styles.detailText}>
                <Text style={[styles.detailText, { fontWeight: 'bold' }]}>{product.title}</Text>
                <Text style={[styles.detailText]}>{product.body_html.slice(3, -4)}</Text>
                <Text style={styles.detailText}>Color: {product.variants[selectedItem].title}</Text>
                <Text style={styles.detailText}>Price {product.variants[selectedItem].price}</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width,
    },
    imageSection: {
        width: '100%'
    },
    image: {
        width: '100%',
        height: 300,
    },
    subImageSection: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,

    },
    subImage: {
        width: 100,
        height: '100%',
        marginRight: 10
    },
    detailText: {
        fontSize: 18,
        width: '100%'
    }
});