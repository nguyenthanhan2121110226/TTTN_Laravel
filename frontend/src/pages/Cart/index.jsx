import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames/bind"
import BreakeCrumb from "~/components/BreakeCrumb"
import styles from './Cart.module.scss'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'


import { CARTEMTY, SHOES } from "~/assets/images"
import Image from "~/components/Image"
import { Link } from "react-router-dom"
import { routes, routes as routesConfig } from '~/config'
import imageUrl from "~/utils/imageUrl"
import formatCurrency from "~/utils/formatCurrency"
import {
    decreaseItemToCartActions,
    deleteItemFromCartAction,
    increaseItemToCartActions,
    clearItemCartAction
} from "~/redux/actions/cartDataActions"

const cx = classNames.bind(styles)

function Cart() {
    const cartData = useSelector(state => state.cartData.data)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
    const handleClearCart = () => {
        dispatch(clearItemCartAction())
    }
    const total = useMemo(() => {
        const payment = cartData.reduce((acc, currVal) => {
          return acc + (currVal.quantityCart * currVal.price)
        }, 0)
    
        return payment
      }, [cartData])


      const breakeCrums = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.cart,
                name: "Giỏ hàng"
            }
        ]
      }, [])

    return (
        <div className="cart">
            <BreakeCrumb urls={breakeCrums} />
            <div className="px-[6rem] lg:px-[1.5rem]">
                <div className="grid grid-cols-4 gap-[2.4rem] my-5">
                    <div className="w-full col-span-3 lg:col-span-4">
                        <h1 className="uppercase font-[600] text-[2.4rem]">Giỏ hàng ({cartData.length})</h1>
                        <div className="w-full">
                            {
                                cartData.length === 0 && (
                                    <div className="h-[400px] flex flex-col justify-center items-center">
                                        <div className="w-[20%]">
                                            <Image src={CARTEMTY} className="w-full object-cover" />
                                        </div>
                                        <p className="text-[1.5rem] font-[600] opacity-80 mt-3">Không có gì trong giỏ hàng!</p>
                                    </div>
                                )
                            }

                            {
                                cartData.map((cart, index) => (
                                    <div className="p-[2.4rem] border-[1px] border-solid relative border-[#ededed] mb-6" key={index}>
                                        <div className="flex items-center">
                                            <div className="w-[120px] lg:w-[80px] mr-10">
                                                <Image src={imageUrl(cart.color.image)} className="object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <Link to={routes.products + "/" + cart.slug} className="text-[2rem] lg:text-[1.7rem] font-[600]">{cart.name}</Link>
                                                <div className="text-[1.4rem] flex items-center font-[600]">
                                                    <span>{cart.size.size}</span>
                                                    <span className="mx-3">/</span>
                                                    <span className="w-[20px] h-[20px] border-[2px] border-solid border-[#cbcbcb]" style={{ backgroundColor: `#${cart.color.value}` }} />
                                                </div>
                                                <div className="font-[600] flex items-center text-[1.6rem] mt-3">
                                                    <span className="opacity-90">Giá tiền:</span>
                                                    <span className="opacity-100 ml-3">{formatCurrency(cart.price)}</span>
                                                </div>
                                                <div className="flex text-[1.5rem] font-[600] mt-3">
                                                    <button
                                                        onClick={() => handleBtnDecrease(cart)}
                                                        disabled={cart.quantityCart <= 1}
                                                        className="h-[28px] disabled:bg-gray-500 disabled:text-white w-[28px] inline-flex justify-center items-center border-[1px] border-solid border-main-dark-bg-color bg-main-dark-bg-color text-main-dark-text-color">
                                                        <AiOutlineMinus />
                                                    </button>
                                                    <input type="text"
                                                        disabled
                                                        value={cart.quantityCart}
                                                        className="h-[28px] w-[56px] text-center border-[1px] border-solid border-main-dark-bg-color" />
                                                    <button
                                                        onClick={() => handleBtnIncrease(cart)}
                                                        disabled={cart.quantityCart >= 10}
                                                        className="h-[28px] disabled:bg-gray-500 disabled:text-white w-[28px] inline-flex justify-center items-center border-[1px] border-solid border-main-dark-bg-color bg-main-dark-bg-color text-main-dark-text-color">
                                                        <AiOutlinePlus />
                                                    </button>
                                                </div>
                                                <div className="font-[600] flex items-center text-[1.8rem] mt-3">
                                                    <span className="opacity-90 whitespace-nowrap">Tổng tiền:</span>
                                                    <span className="opacity-100 ml-3">{formatCurrency(cart.price * cart.quantityCart)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleBtnDelete(cart)}
                                            className="absolute top-0 left-0 btn-square btn button-light-theme text-[2rem]">
                                            <FaTimes />
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full lg:col-span-4">
                        <h1 className="uppercase font-[600] text-[2.4rem]">Tổng thanh toán</h1>
                        <h1 className="text-second-dark-text-color bg-main-dark-bg-color text-center py-[1rem] font-[600] text-[2.2rem]">
                            {formatCurrency(total)}
                        </h1>
                        <div className="flex items-center justify-between mt-5">
                            <Link to={routesConfig.products} className="btn button-dark-theme text-[1.5rem] py-[1.3rem]">Tiếp tực mua hàng</Link>
                            <button 
                            onClick={() => handleClearCart()}
                            className="btn button-dark-theme text-[1.5rem] py-[1.3rem]">Xóa tất cả</button>
                        </div>
                        <Link to={routesConfig.payment} className="btn button-light-theme py-[1.3rem] w-full mt-5 text-[1.5rem]">
                            Tiến hành thanh toán
                        </Link>
                        <p className="italic text-[1.5rem] mt-5">
                            Vận chuyển, thuế và chiết khấu sẽ được tính khi thanh toán.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart