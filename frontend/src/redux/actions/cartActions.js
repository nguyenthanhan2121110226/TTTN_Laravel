import {TOGGLE_CART} from '~/redux/constants//cartConstants'


const toggleCart = payload => {
    return {
        type: TOGGLE_CART,
        payload
    }
}

export {
    toggleCart
}