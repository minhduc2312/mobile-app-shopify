import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Dimensions
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import axios from "_plugins/axios";
import ProductItem from "../components/ProductItem";


const SkeletonProductItem = () => (
    <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item marginStart={5} marginTop={5} flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item width={150} height={100} />
            <SkeletonPlaceholder.Item marginLeft={20} justifyContent='space-around' height={100}>
                <SkeletonPlaceholder.Item width={160} height={20} />
                <SkeletonPlaceholder.Item marginTop={6} width={120} height={20} />
                <SkeletonPlaceholder.Item marginTop={6} width={160} height={20} />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
)


const ProductHome = ({ navigation }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/admin/api/2022-10/products.json').then(res => {
            const products = res.data.products
            setTimeout(() => {
            }, 1000);
            setProducts(products);

        });
        return () => {

        }
    }, [])

    return (
        products.length ? (
            <View style={styles.container}>
                <FlatList
                    contentInsetAdjustmentBehavior="automatic"
                    contentContainerStyle={{
                        width: Dimensions.get('screen').width
                    }}
                    data={products.splice(5)}
                    renderItem={({ item }) => (
                        <ProductItem item={item} navigation={navigation} />
                    )}
                    keyExtractor={item => item.id}
                    initialNumToRender={6}
                />
            </View>
        ) : (
            Array.from(Array(6)).map((_, index) => (
                <SkeletonProductItem key={index} />
            ))

        )

    )
}
export default ProductHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});