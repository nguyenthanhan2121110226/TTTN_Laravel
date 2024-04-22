import { Fragment } from "react"
import { useSelector } from "react-redux"
import CartSidebar from "../CartSidebar"
import MenuSidebar from "../MenuSidebar"
import SearchSidebar from "../SearchSidebar"



function Sidebar() {
    const isShowSearch = useSelector(state => state.search.mode)
    const isShowCart = useSelector(state => state.cart.mode)
    const isShowMenu = useSelector(state => state.menu.mode)
    return (
        <Fragment>
            {
                isShowSearch && (
                    <SearchSidebar />
                )
            }
            {
                isShowCart && (
                    <CartSidebar />
                )
            }
            {
                isShowMenu && (
                    <MenuSidebar />
                )
            }
        </Fragment>
    )
}

export default Sidebar