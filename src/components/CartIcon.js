import React, { useState } from "react";
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

const Cart = (props) => {
    const [state] = useStore();
    const { cart } = state;
    const navigation = useNavigation();
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