import {TOGGLE_CART} from '~/redux/constants/cartConstants'


const initialState = {
    mode: false
}

const cartReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_CART:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }

}

export default cartReducers