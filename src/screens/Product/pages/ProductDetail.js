import React, { useEffect, useMemo, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import axios from "_plugins/axios";

const convertHTMLtoString = (string) => {
    return string.replace(/<[^>]+>/g, '');

}

const SkeletonProductDetail = () => (
    <SkeletonPlaceholder>
        <View style={[styles.imageSection, { width: Dimensions.get('window').width, marginHorizontal: 10 }]}>
        </View>
        <View style={{ width: 100, height: 100, marginTop: 5, margin: 10 }}></View>
        <View style={{ width: Dimensions.get('window').width, height: 20, margin: 10 }}></View>
        <View style={{ width: Dimensions.get('window').width, height: 20, margin: 10 }}></View>
        <View style={{ width: Dimensions.get('window').width, height: 20, margin: 10 }}></View>
    </SkeletonPlaceholder>
)

const ProductDetail = ({ route, navigation }) => {
    const [productItem, setProductItem] = useState(route.params?.product || undefined)
    const [selectedItem, setSelectedItem] = useState(0)
    const [isNotFound, setIsNotFound] = useState(false);
    const id = useMemo(() => route.params.id, [route.params.id]);
    useEffect(() => {
        !productItem && axios.get(`admin/api/2022-10/products/${id}.json`).then(res => {
            setProductItem(() => res.data.product)
        }).catch(() => setIsNotFound(true))
    }, [id]);
    return isNotFound ? (
        <View>
            <Text>Product not found</Text>
        </View>
    ) : (
        <ScrollView contentContainerStyle={[styles.container, styles.backgroundColor]} style={styles.backgroundColor}>
            {productItem ? (
                <View style={{ width: '100%' }}>
                    <View style={styles.imageSection}>
                        <Image source={{ uri: productItem.images[selectedItem].src }} style={styles.image} />

                    </View>
                    <ScrollView style={[styles.subImageSection]} horizontal={true} showsHorizontalScrollIndicator={false}
                    >
                        {productItem.images.map((image, index) => (
                            <Image key={index} source={{ uri: image.src }} style={[styles.subImage]} />
                        ))}
                    </ScrollView>
                    <View style={styles.detailText}>
                        <Text style={[styles.detailText, { fontWeight: 'bold', fontSize: 24, backgroundColor: '#fff', marginTop: 10 }]}>{productItem?.title}</Text>
                        <Text style={[styles.detailText, { color: "#555555" }]}>{convertHTMLtoString(productItem?.body_html)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30 }}>
                        <View>
                            <Text style={[styles.detailText, { color: "#DD8560" }]}>Price {productItem?.variants[selectedItem].price}</Text>
                            <Text style={[styles.detailText, { color: "#555555" }]}>Color: {productItem?.variants[selectedItem].title}</Text>
                        </View>

                        <TouchableOpacity style={{ padding: 10, paddingHorizontal: 20, backgroundColor: '#333', }}><Text style={{ color: '#fff', fontSize: 18, fontWeight: '600', alignItems: 'center' }}>Add to Cart</Text></TouchableOpacity>
                    </View>
                </View>
            ) : (<>
                <SkeletonProductDetail />
            </>

            )}

        </ScrollView>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width,
    },
    imageSection: {
        width: '100%',
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5

    },
    subImageSection: {
        height: 100,
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        marginTop: 5,

    },
    subImage: {
        width: 100,
        height: '100%',
        marginRight: 5
    },
    description: {
        width: '100%'
    },
    detailText: {
        fontSize: 18,
        backgroundColor: 'transparent',
        width: '100%',
        marginBottom: 5
    }
});