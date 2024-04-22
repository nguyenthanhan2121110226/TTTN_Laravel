import {TOGGLE_SEARCH} from '~/redux/constants/searchConstants'


const toggleSearch = payload => {
    return {
        type: TOGGLE_SEARCH,
        payload
    }
}

export {
    toggleSearch
}