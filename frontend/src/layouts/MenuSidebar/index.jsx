import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {AiFillCaretDown} from 'react-icons/ai'
import classNames from "classnames/bind"
import styles from './MenuSidebar.module.scss'
import { menuActions } from "~/redux/actions/menuActions"
import { routes } from "~/config"

const cx = classNames.bind(styles)

function MenuSidebar() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.data)


    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    const handleCloseMenu = () => {
        dispatch(menuActions(false))
    }

    return (
        <div className={`fixed top-0 right-0 bottom-0 bg-[#00000050] overflow-hidden left-0 z-[100]`} onClick={() => handleCloseMenu()}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[350px] lg:w-[300px] px-[1rem] py-[2rem] text-main-dark-text-color bg-main-dark-bg-color absolute top-0 right-0 bottom-0 ${cx("container")}`}
            >
                <div className="w-full py-[2.4rem]">
                    <Link className="text-[2rem] block p-[1rem] font-[600] text-main-light-bg-color"
                        onClick={() => handleCloseMenu()}
                        to={routes.home}>
                        Trang chủ
                    </Link>
                    <div>
                        <div className="collapse">
                            <input type="checkbox" />
                            <div className="collapse-title text-[2rem] p-[1rem] font-[600] text-main-light-bg-color flex justify-between items-center">
                                <span>Sản phẩm</span>
                                <span><AiFillCaretDown /></span>
                            </div>
                            <div className="collapse-content pl-[2.4rem]">
                                <Link
                                    className="text-[2rem] block p-[1rem] pt-0 font-[600] text-main-light-bg-color"
                                    onClick={() => handleCloseMenu()}
                                    to={routes.products}
                                >Tất cả sản phẩm</Link>
                                {
                                    [...categories.filter(item => item.parent_id === null)].map(cat => (
                                        <Link
                                            key={cat.id}
                                            className="text-[2rem] block p-[1rem] pt-0 font-[600] text-main-light-bg-color"
                                            onClick={() => handleCloseMenu()}
                                            to={routes.products + `?category=${cat.slug}`}
                                        >
                                            {cat.name}
                                        </Link>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    <Link className="text-[2rem] block p-[1rem] pt-0 font-[600] text-main-light-bg-color"
                        onClick={() => handleCloseMenu()}
                        to={routes.posts}>
                        Tin tức
                    </Link>
                    <Link className="text-[2rem] block p-[1rem] font-[600] text-main-light-bg-color"
                        onClick={() => handleCloseMenu()}
                        to={routes.about}>
                        Giới thiệu
                    </Link>
                    <Link className="text-[2rem] block p-[1rem] font-[600] text-main-light-bg-color"
                        onClick={() => handleCloseMenu()}
                        to={routes.contact}>
                        Liên hệ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuSidebar