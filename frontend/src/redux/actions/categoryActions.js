import {
    GET_CATEGORY_FAIL,
    GET_CATEGORY_PENDING,
    GET_CATEGORY_SUCCESS
} from '~/redux/constants/categoryConstants'

import { axiosDefault } from '~/utils/axios'


const getAllCategoryActions = () => async dispatch => {
    dispatch({
        type: GET_CATEGORY_PENDING
    })

    axiosDefault.get("category")
        .then((res) => {
            const newData = res.data.data
            dispatch({
                type: GET_CATEGORY_SUCCESS,
                payload: newData
            })
        })
        .catch(() => {
            dispatch({
                type: GET_CATEGORY_FAIL
            })
        })
}


export {
    getAllCategoryActions
}