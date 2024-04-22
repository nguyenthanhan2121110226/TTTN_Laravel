import axios from 'axios'
import {
    GET_PROFILE_FAIL,
    GET_PROFILE_PENDING,
    GET_PROFILE_SUCCESS,
    ADD_PROFILE,
    LOGOUT_PROFILE
} from '~/redux/constants/profileConstants'
import { axiosDefault } from '~/utils/axios'


const getProfileActions = () => async dispatch => {
    if (!localStorage.getItem("auth")) {
        dispatch({
            type: GET_PROFILE_FAIL,
        })
        return
    }

    dispatch({ type: GET_PROFILE_PENDING })
    const objAuth = JSON.parse(localStorage.getItem("auth"))
    const typeLogin = objAuth.type
    const token = objAuth.token
    switch (typeLogin) {
        case "df": {
            axiosDefault.get("auth/user-profile", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    dispatch({
                        type: GET_PROFILE_SUCCESS,
                        data: {
                            id: res.data.id,
                            date: res.data.date,
                            address: res.data.address,
                            phone: res.data.phone,
                            fullname: res.data.fullname,
                            email: res.data.email,
                            avatar: res.data.avatar
                        }
                    })
                })
                .catch(() => {
                    dispatch({
                        type: GET_PROFILE_FAIL,
                    })
                })
            break;
        }

        case "fb": {
            axios.get(`https://graph.facebook.com/v13.0/me?fields=email&access_token=${token}`)
                .then((res) => {
                    const data = {
                        email: res.data.email,
                        type: "fb"
                    }

                    return axiosDefault.post("auth/login-social", data)
                })
                .then((res) => {
                    dispatch({
                        type: GET_PROFILE_SUCCESS,
                        data: {
                            id: res.data.id,
                            date: res.data.date,
                            address: res.data.address,
                            phone: res.data.phone,
                            fullname: res.data.fullname,
                            email: res.data.email,
                            avatar: res.data.avatar
                        }
                    })
                })
                .catch(() => {
                    dispatch({
                        type: GET_PROFILE_FAIL,
                    })
                })
            break;
        }
        case "gg": {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
                .then((res) => {
                    const data = {
                        email: res.data.email,
                        type: "gg"
                    }
                    return axiosDefault.post("auth/login-social", data)
                })
                .then((res) => {
                    dispatch({
                        type: GET_PROFILE_SUCCESS,
                        data: {
                            id: res.data.id,
                            date: res.data.date,
                            address: res.data.address,
                            phone: res.data.phone,
                            fullname: res.data.fullname,
                            email: res.data.email,
                            avatar: res.data.avatar
                        }
                    })
                })
                .catch(() => {
                    dispatch({
                        type: GET_PROFILE_FAIL,
                    })
                })
            break;
        }
        default:
            dispatch({
                type: GET_PROFILE_FAIL,
            })
            break;
    }
}

const logoutActions = () => {
    return {
        type: LOGOUT_PROFILE
    }
}

const addProfileActions = (payload) => {
    return {
        type: ADD_PROFILE,
        data: {
            id: payload.id ?? null,
            date: payload.date ?? null,
            address: payload.address ?? null,
            phone: payload.phone ?? null,
            fullname: payload.fullname,
            email: payload.email,
            avatar: payload.avatar
        }
    }
}


export {
    getProfileActions,
    addProfileActions,
    logoutActions
}