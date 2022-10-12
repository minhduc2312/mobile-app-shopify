import { FETCH_PRODUCTS, SET_LOADING, REMOVE_FROM_CART, ADD_TO_CART, ADD_NOTIFICATION, REMOVE_NOTIFICATION, EMPTY_CART, ADD_QUANTITY, SUB_QUANTITY } from "./constant";

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload
})
export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    id
})
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

export const addQuantity = (id) => ({
    type: ADD_QUANTITY,
    id
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