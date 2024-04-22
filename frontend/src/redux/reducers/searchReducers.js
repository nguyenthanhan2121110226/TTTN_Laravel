import {TOGGLE_SEARCH} from '~/redux/constants/searchConstants'


const initialState = {
    mode: false
}

const searchReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_SEARCH:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }

}

export default searchReducers