import { FETCH_PRODUCTS, SET_LOADING, REMOVE_FROM_CART, ADD_TO_CART, ADD_NOTIFICATION, REMOVE_NOTIFICATION, EMPTY_CART, ADD_QUANTITY, SUB_QUANTITY, SET_EXPO_PUSH_TOKEN } from "./constant";

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload
})
export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})
export const addToCart = (id, quantity = 1) => ({
    type: ADD_TO_CART,
    id,
    quantity
})
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

export const addQuantity = (id, quantity = 1) => ({
    type: ADD_QUANTITY,
    id,
    quantity
})
export const subQuantity = (id) => ({
    type: SUB_QUANTITY,
    id
})

export const emptyCart = () => ({
    type: EMPTY_CART
})

export const addNotification = (payload) => ({
    type: ADD_NOTIFICATION,
    payload
})
export const removeNotification = (payload) => ({
    type: REMOVE_NOTIFICATION,
    payload
})
export const setExpoPushToken = (payload) => ({
    type: SET_EXPO_PUSH_TOKEN,
    payload
})