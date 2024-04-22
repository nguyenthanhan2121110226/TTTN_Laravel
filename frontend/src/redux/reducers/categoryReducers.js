import {
    GET_CATEGORY_FAIL,
    GET_CATEGORY_PENDING,
    GET_CATEGORY_SUCCESS
} from '~/redux/constants/categoryConstants'


const initialState = {
    pending: false,
    success: false,
    data: []
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_PENDING: {

            return {
                pending: true,
                success: false,
                data: []
            }
        }

        case GET_CATEGORY_SUCCESS: {

            return {
                pending: false,
                success: true,
                data: action.payload
            }
        }

        case GET_CATEGORY_FAIL: {

            return {
                pending: false,
                success: false,
                data: []
            }
        }

        default:
            return state;
    }
}


export default categoryReducer