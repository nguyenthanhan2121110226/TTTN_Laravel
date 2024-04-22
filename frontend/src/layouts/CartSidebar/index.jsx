import { useEffect, Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from './CartSidebar.module.scss'

import { FaTrash, FaMinus } from 'react-icons/fa'
import { BsPlusLg } from 'react-icons/bs'


import { toggleCart } from "~/redux/actions/cartActions"
import Image from "~/components/Image"
import { CARTEMTY } from "~/assets/images"
import { routes } from "~/config"
import imageUrl from '~/utils/imageUrl'
import formatCurrency from '~/utils/formatCurrency'
import {
    increaseItemToCartActions,
    decreaseItemToCartActions,
    deleteItemFromCartAction
} from '~/redux/actions/cartDataActions'

const cx = classNames.bind(styles)

function CartSidebar() {
    const cartData = useSelector(state => state.cartData.data)

    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    const handleCart = () => {
        dispatch(toggleCart(false))
    }

    const handleBtnIncrease = (obj) => {
        const payload = {
            id: obj.id,
            colorId: obj.color.id,
            sizeId: obj.size.id
        }
        dispatch(increaseItemToCartActions(payload))
    }

    const handleBtnDecrease = (obj) => {
        const payload = {
            id: obj.id,
            colorId: obj.color.id,
            sizeId: obj.size.id
        }
        dispatch(decreaseItemToCartActions(payload))
    }

    const handleBtnDelete = (obj) => {
        const payload = {
            id: obj.id,
            colorId: obj.color.id,
            sizeId: obj.size.id
        }
        dispatch(deleteItemFromCartAction(payload))
    }

    return (
        <div className={`fixed top-0 right-0 bottom-0 bg-[#00000050] overflow-hidden left-0 z-[100]`} onClick={() => handleCart()}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[350px] lg:w-[300px] px-[1rem] py-[2rem] text-main-dark-text-color bg-main-dark-bg-color absolute top-0 right-0 bottom-0 ${cx("container")}`}
            >
                <div className="w-full h-full overflow-hidden">
                    <h1 className="text-[2rem] font-[600]">Giỏ hàng ({cartData.length})</h1>
                    <Link
                        onClick={() => dispatch(toggleCart(false))}
                        to={routes.cart}
                        className="w-full my-3 btn button-light-theme text-[1.5rem] py-[1rem]">
                        Đi tới giỏ hàng
                    </Link>
                    <div className="h-full overflow-y-auto p-[1rem] pb-[6.6rem]">




                        {
                            cartData.length === 0 ? (
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <div className="w-[50%]">
                                        <Image src={CARTEMTY} className="object-cover brightness-0 invert" />
                                    </div>
                                    <div className="text-[1.5rem] opacity-70">Không có sản phẩm nào trong giỏ hàng</div>
                                </div>
                            ) : (
                                <Fragment>
                                    {
                                        cartData.map((cart, index) => (
                                            <div className="flex items-center mb-5" key={index}>
                                                <div className="mr-5">
                                                    <Image src={imageUrl(cart.color.image)} className="object-cover w-[80px]" />
                                                </div>
                                                <div className="flex-1 flex items-center">
                                                    <div className="flex-[1]">
                                                        <h3 className="font-[600] text-[1.5rem]">{cart.name}</h3>
                                                        <div className="flex items-center text-[1.5rem]">
                                                            <span>{cart.size.size}</span>
                                                            <span className="mx-3">/</span>
                                                            <span
                                                                className="border-[2px] border-solid border-[#cdcdcd] w-[20px] h-[20px]"
                                                                style={{ backgroundColor: `#${cart.color.value}` }}
                                                            />
                                                        </div>
                                                        <h3 className="whitespace-nowrap pr-5 font-[600] text-[1.7rem]">{formatCurrency(cart.price * cart.quantityCart)}</h3>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center">
                                                            <button
                                                                disabled={cart.quantityCart <= 1}
                                                                onClick={() => handleBtnDecrease(cart)}
                                                                className="w-[25px] lg:w-[15px] lg:h-[15px] h-[25px] disabled:bg-gray-500 disabled:text-white inline-flex justify-center items-center bg-second-dark-bg-color text-second-dark-text-color">
                                                                <FaMinus />
                                                            </button>
                                                            <input
                                                                disabled
                                                                type="text" value={cart.quantityCart} className="w-[40px] lg:w-[20px] bg-main-dark-text-color text-main-light-text-color text-[1.5rem] font-[600] border-none text-center h-[25px] lg:h-[15px] outline-none" />
                                                            <button
                                                                disabled={cart.quantityCart >= 10}
                                                                onClick={() => handleBtnIncrease(cart)}
                                                                className="w-[25px] lg:w-[15px] lg:h-[15px] h-[25px] disabled:bg-gray-500 disabled:text-white inline-flex justify-center items-center bg-second-dark-bg-color text-second-dark-text-color">
                                                                <BsPlusLg />
                                                            </button>
                                                        </div>
                                                        <div className="flex justify-center mt-3">
                                                            <button
                                                                onClick={() => handleBtnDelete(cart)}
                                                                className="btn button-dark-theme text-[1.2rem] font-[600]">
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }

                                </Fragment>

                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSidebar