

import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch } from '~/redux/actions/searchActions'
import { toggleCart } from '~/redux/actions/cartActions'
import Image from '~/components/Image'
import imageUrl from '~/utils/imageUrl'
import { routes } from '~/config'
import { menuActions } from '~/redux/actions/menuActions'

function UserItems({ mode }) {
    const cartData = useSelector(state => state.cartData.data)
    const profile = useSelector(state => state.profile.data)


    const dispatch = useDispatch()

    const handleShowSearch = () => {
        dispatch(toggleSearch(true))
    }
    const handleShowCart = () => {
        dispatch(toggleCart(true))
    }
    const handleShowMenu = () => {
        dispatch(menuActions(true))
    }

    return (
        <ul className='flex items-center'>
            <li className="header-user-item flex items-center">
                {
                    !!profile ? (
                        <div className="tooltip tooltip-bottom text-[1.5rem]" data-tip={profile.fullname}>
                            <Link to={routes.profileStringRoute} className={`w-[25px] h-[25px] block rounded-full border-[2px] border-solid overflow-hidden ${mode === "dark" ? "border-white hover:border-white" : "border-black hover:border-black"}  transition-colors`}>
                                    <Image src={imageUrl(profile.avatar)} className="object-contain h-full"/>
                            </Link>
                        </div>
                    ) : (
                        <div className="tooltip tooltip-bottom text-[1.5rem]" data-tip="Đăng nhập">
                            <Link to="/dang-nhap" className={`text-[2.2rem] user-btn ${mode === "dark" ? "hover:text-second-dark-text-color" : "hover:text-main-light-text-color"} transition-colors`}><BiUser /></Link>
                        </div>
                    )
                }

            </li>
            <li className="header-user-item flex items-center relative">
                <div className="tooltip tooltip-bottom inline-flex items-center text-[1.5rem]" data-tip="Giỏ hàng">
                    <button
                        onClick={() => handleShowCart()}
                        className={`text-[2.2rem] relative user-btn ${mode === "dark" ? "hover:text-second-dark-text-color" : "hover:text-main-light-text-color"} transition-colors`}>
                        <span>
                            <BsHandbag />
                        </span>
                        <span className='absolute inline-flex justify-center items-center text-[1rem] top-0 right-0 translate-x-1/2 -translate-y-1/2 font-[600] w-[2rem] h-[2rem] bg-black rounded-full text-white'>
                            {cartData.length}
                        </span>
                    </button>

                </div>
            </li>
            <li className="header-user-item flex items-center">
                <div className="tooltip tooltip-bottom inline-flex items-center text-[1.5rem]" data-tip="Tìm kiếm">
                    <button
                        onClick={() => handleShowSearch()}
                        className={`text-[2.2rem] user-btn ${mode === "dark" ? "hover:text-second-dark-text-color" : "hover:text-main-light-text-color"} transition-colors`}>
                        <AiOutlineSearch />
                    </button>
                </div>
            </li>
            <li className="header-user-item items-center hidden lg:flex">
                <div className="tooltip tooltip-bottom inline-flex items-center text-[1.5rem]" data-tip="Menu">
                    <button
                        onClick={() => handleShowMenu()}
                        className={`text-[2.2rem] user-btn ${mode === "dark" ? "hover:text-second-dark-text-color" : "hover:text-main-light-text-color"} transition-colors`}>
                        <FaBars />
                    </button>
                </div>
            </li>
        </ul>
    )
}

export default UserItems