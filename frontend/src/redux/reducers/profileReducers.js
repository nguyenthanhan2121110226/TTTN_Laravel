import {
    ADD_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_PENDING,
    GET_PROFILE_SUCCESS,
    LOGOUT_PROFILE
} from '~/redux/constants/profileConstants'


const initialState = {
    data: null,
    pending: true,
    success: false
}

const profileReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_PENDING: {
            return {
                data: null,
                pending: true,
                success: false
            }
        }
        case GET_PROFILE_SUCCESS: {
            return {
                data: action.data,
                pending: false,
                success: true
            }
        }
        case GET_PROFILE_FAIL: {
            localStorage.removeItem("auth")
            return {
                data: null,
                pending: false,
                success: false
            }
        }
        case ADD_PROFILE: {
            return {
                data: action.data,
                pending: false,
                success: true
            }
        }
        case LOGOUT_PROFILE: {
            localStorage.removeItem("auth")
            return {
                data: null,
                pending: false,
                success: false
            }
        }
        default:
            return state;
    }
}


export default profileReducers