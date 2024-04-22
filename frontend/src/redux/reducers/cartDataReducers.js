import {
    CLEAR_ITEM_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    DECRESE_ITEM_TO_CART,
    INCREASE_ITEM_TO_CART
} from '~/redux/constants/cartDataConstant'


const updateCartLocalStorage = (array) => {
    const json = JSON.stringify(array)
    localStorage.setItem("cart", json)
}

const initialState = {
    data: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}

const cartDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const index = state.data.findIndex(item => item.id === action.payload.id &&
                item.size.id === action.payload.size.id &&
                item.color.id === action.payload.color.id)
            if (index != -1) {
                state.data[index].quantityCart = state.data[index].quantityCart + 1
                updateCartLocalStorage([...state.data])
                return {
                    ...state,
                    data: [...state.data]
                }
            } else {

                updateCartLocalStorage([{ ...action.payload, quantityCart: 1 }, ...state.data])
                return {
                    ...state,
                    data: [{ ...action.payload, quantityCart: 1 }, ...state.data]
                }
            }
        }

        case INCREASE_ITEM_TO_CART: {
            const index = state.data.findIndex(item => item.id == action.payload.id &&
                item.color.id == action.payload.colorId &&
                item.size.id == action.payload.sizeId)
            if (index != -1) {
                state.data[index].quantityCart = state.data[index].quantityCart + 1
                updateCartLocalStorage([...state.data])
                return {
                    ...state,
                    data: [...state.data]
                }
            }
            else {
                updateCartLocalStorage([...state.data, { ...action.payload, quantityCart: 1 }])
                return {
                    ...state,
                    data: [...state.data, { ...action.payload, quantityCart: 1 }]
                }
            }
        }

        case DECRESE_ITEM_TO_CART: {
            const index = state.data.findIndex(item => item.id == action.payload.id &&
                item.color.id == action.payload.colorId &&
                item.size.id == action.payload.sizeId)
            if (index != -1) {
                state.data[index].quantityCart = state.data[index].quantityCart - 1
                updateCartLocalStorage([...state.data])
                return {
                    ...state,
                    data: [...state.data]
                }
            }
        }

        case DELETE_ITEM_FROM_CART: {
            state.data.forEach((element, index) => {
                if (element.id === action.payload.id &&
                    element.size.id === action.payload.sizeId &&
                    element.color.id === action.payload.colorId) {
                    state.data.splice(index, 1)
                }
            });
            updateCartLocalStorage([...state.data])
            if (state.data.length === 0) {
                localStorage.removeItem("cart")
            }
            return {
                ...state,
                data: [...state.data]
            }
        }

        case CLEAR_ITEM_CART: {
            localStorage.removeItem("cart")
            return {
                ...state,
                data: []
            }
        }

        default:
            return state;
    }
}

export default cartDataReducers