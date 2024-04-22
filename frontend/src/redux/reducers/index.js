import { combineReducers } from "redux";
import cartDataReducers from "./cartDataReducers";
import cartReducers from "./cartReducers";
import categoryReducer from "./categoryReducers";
import menuReducers from "./menuReducers";
import productModalReducers from "./productModalReducers";
import profileReducers from "./profileReducers";
import searchReducers from "./searchReducers";
import themeReducers from "./themeReducers";

const reducers = combineReducers({
    theme: themeReducers,
    search: searchReducers,
    cart: cartReducers,
    productModal: productModalReducers,
    cartData: cartDataReducers,
    profile: profileReducers,
    menu: menuReducers,
    category: categoryReducer


})

export default (state, action) => reducers(state, action)