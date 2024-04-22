import {TOGGLE_MENU} from '~/redux/constants/menuConstants'


const menuActions = payload => {
    return {
        type: TOGGLE_MENU,
        payload
    }
}

export {
    menuActions
}