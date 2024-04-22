import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { darkThemeActions } from "~/redux/actions/themeActions"
import ProductModal from "~/layouts/ProductModal"
import './DefaultLayout.scss'


function DefaultLayout({ route, children }) {
    const themeMode = useSelector(state => state.theme.mode)
    const slugProduct = useSelector(state => state.productModal.slug)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(darkThemeActions(route))
    }, [location])

    return (
        <div className={`wrapper theme-${themeMode}`}>
            <div className="main-content">
                {children}
            </div>
            {
                !!slugProduct && (
                    <ProductModal />
                )
            }
            <ToastContainer />
        </div>
    )

}

export default DefaultLayout