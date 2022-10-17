import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "_plugins/axios";
import { addQuantity } from "_store";
import { addToCart } from "_store";

export const handleAddToCart = async (state, dispatch, id, quantity = 1) => {
    const inCart = state?.cart?.some((item) => item.id === id);

    inCart ? dispatch(addQuantity(id, quantity)) : dispatch(addToCart(id, quantity));

    // console.log(addtoCart)
};