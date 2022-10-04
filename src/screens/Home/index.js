import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BannerSection from "./components/BannerSection";
import axios from "_plugins/axios";
import Product from "./components/Product";

const Stack = createStackNavigator();

const getRandom = (max) => (
    Math.floor(Math.random() * max)
)

const Home = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/admin/api/2022-10/products.json').then(res => {
            setProducts(res.data.products)
        })
    }, [])

    return (
        <View style={styles.container}>
            <BannerSection source={products[getRandom(products.length)]?.image.src}></BannerSection>
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',

            }}>
                {Array.from(Array(4)).map(() => (
                    <Product image={products[getRandom(products.length)]?.image.src}></Product>
                ))}
            </View>
        </View>
    );
}
const screen = Dimensions.get('screen')
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomePage" component={Home} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: screen.width,
        height: screen.height
    }
});
