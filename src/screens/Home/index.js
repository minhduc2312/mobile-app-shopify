import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BannerSection from "_screens/Home/components/BannerSection";
import axios from "_plugins/axios";

const Stack = createStackNavigator();

const Home = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/admin/api/2022-10/products.json').then(res => {
            setProducts(res.data.products)
            console.log(res.data.products);
        })
    }, [])

    return (
        <View style={styles.container}>
            <BannerSection source={products[0]?.image.src}></BannerSection>
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    image: {
        width: screen.width,
        height: screen.height
    }
});
