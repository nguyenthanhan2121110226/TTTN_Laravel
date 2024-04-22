import { routes } from "~/config";
const initialState = {
    mode: "light"
}


const themeReducers = (state = initialState, action) => {
    switch (action.type) {
        case routes.home: {
            return {
                ...state,
                mode: "dark"
            }
        }

        case routes.signIn: {
            return {
                ...state,
                mode: "dark"
            }
        }

        case routes.signUp: {
            return {
                ...state,
                mode: "dark"
            }
        }
        case routes.productDetail: {
            return {
                ...state,
                mode: "dark"
            }
        }
        case routes.about: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.cart: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.payment: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.posts: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.postDetail: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.products: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.contact: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.profile: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.search: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.notFound: {
            return {
                ...state,
                mode: "light"

            }
        }
        case routes.forgotPassword: {
            return {
                ...state,
                mode: "dark"

            }
        }
        case routes.forgotPasswordToken: {
            return {
                ...state,
                mode: "dark"

            }
        }
        default:
            return state

    }
}

export default themeReducers