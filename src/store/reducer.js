import { ADD_TO_CART, ADD_NOTIFICATION, FETCH_PRODUCTS, REMOVE_FROM_CART, REMOVE_NOTIFICATION, SET_LOADING, ADD_QUANTITY, SUB_QUANTITY, EMPTY_CART } from "./constant";

const initState = {
    products: [],
    cart: [],
    notification: [],
    loading: false,
}

function reducer(state, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, {
                    id: action.id,
                    quantity: 1
                }]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id != action.id)
            }
        case ADD_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id == action.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case SUB_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id == action.id ? { ...item, quantity: item.quantity - 1 } : item)
            }
        case EMPTY_CART:
            return {
                ...state,
                cart: []
            };
        case ADD_NOTIFICATION:
            return {
                ...state,
                notification: state.notification.push(action.payload)
            }
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                notification: state.notification.filter(item => item.id != payload.id)
            }
        default:
            throw new Error("Invalid action")

    }
}
export { initState };
export default reducer;