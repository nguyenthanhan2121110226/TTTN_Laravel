import {TOGGLE_MENU} from '~/redux/constants/menuConstants'


const initialState = {
    mode: false
}

const menuReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }

}

export default menuReducers