import {TOGGLE_PRODUCT_MODAL} from '~/redux/constants/productModalConstants'


const initialState = {
    slug: null
}

const productModalReducers = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_PRODUCT_MODAL: {
            return {
                ...state,
                slug: action.payload
            }
        }
        default:
            return state;
    }
}


export default productModalReducers