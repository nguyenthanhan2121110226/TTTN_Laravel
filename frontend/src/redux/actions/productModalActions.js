import {TOGGLE_PRODUCT_MODAL} from '~/redux/constants/productModalConstants'

const toggleProductModalAction = payload => {
    return {
        type: TOGGLE_PRODUCT_MODAL,
        payload
    }
}

export {
    toggleProductModalAction
}