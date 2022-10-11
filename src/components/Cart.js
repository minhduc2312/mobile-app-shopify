import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import BadgeIcon from "./BadgeIcon";
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useStore } from "_store";

const Cart = (props) => {
    const [state] = useStore();
    const { cart } = state;

    return (
        <TouchableOpacity>
            <BadgeIcon Icon={() => <CartIcon name="cart-outline" size={26} />}
                badge={cart.length} color='#fff'
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