import {
    CLEAR_ITEM_CART,
    ADD_ITEM_TO_CART,
    DELETE_ITEM_FROM_CART,
    DECRESE_ITEM_TO_CART,
    INCREASE_ITEM_TO_CART
} from '~/redux/constants/cartDataConstant'

const addItemToCartAction = payload => {
    return {
        type: ADD_ITEM_TO_CART,
        payload
    }
}

const increaseItemToCartActions = payload => {
    return {
        type: INCREASE_ITEM_TO_CART,
        payload
    }
}

const decreaseItemToCartActions = payload => {
    return {
        type: DECRESE_ITEM_TO_CART,
        payload
    }
}

const deleteItemFromCartAction = payload => {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload
    }
}

const clearItemCartAction = () => {
    return{
        type: CLEAR_ITEM_CART
    }
}

export {
    addItemToCartAction,
    increaseItemToCartActions,
    decreaseItemToCartActions,
    deleteItemFromCartAction,
    clearItemCartAction
}