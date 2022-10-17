import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import IconBadge from "./BadgeIcon";
import IconCart from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStore } from "_store";
import { useNavigation } from "@react-navigation/native";

import { getCheckoutItem } from "../helper/getCheckoutItem";

const Cart = (props) => {
    const [state] = useStore();
    const { cart } = state;
    const navigation = useNavigation();

    useEffect(() => {

        // getCheckoutItem()

        //     const query = `
        //     mutation CreateCart {
        //     cartCreate {
        //       cart {
        //         checkoutUrl
        //         id
        //       }
        //     }
        //   }
        // `
        //     axios.post('https://testing-mobile-app.myshopify.com/api/2022-10/graphql.json', { query, variables: {} }, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'X-Shopify-Storefront-Access-Token': '35195b06d7611b4c13478a93c55a4e92',
        //         }
        //     }
        //     ).then(res => console.log(res.data.data.cartCreate.cart)).catch((err) => console.log(err))
        //     return () => {

        //     }
    }, [])
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', {
            screen: 'CartScreen'
        })}>
            <IconBadge Icon={() => <IconCart name="cart-outline" size={26} />}
                badge={cart.reduce((prev, next) => {
                    return prev + next.quantity
                }, 0)} color='#fff'
            />
        </TouchableOpacity>
    )
}
export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});