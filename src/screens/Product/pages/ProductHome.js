import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    FlatList
} from "react-native";
import axios from "_plugins/axios";
import ProductItem from "../components/ProductItem";

const ProductHome = ({ navigation }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/admin/api/2022-10/products.json').then(res => {
            const products = res.data.products
            setProducts(products);
        });

        return () => {

        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{
                    flexDirection: 'row',
                }}
                data={products.splice(5)}
                renderItem={ProductItem}
                keyExtractor={item => item.id}
            />
        </View>
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