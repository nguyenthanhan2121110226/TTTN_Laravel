import { Fragment } from "react"
import { useSelector } from "react-redux"
import Image from "~/components/Image"

import formatCurrency from '~/utils/formatCurrency'
import imageUrl from "~/utils/imageUrl"



function ListOrder() {
    const cartData = useSelector(state => state.cartData.data)
    return (
        <Fragment>
            <h2 className="text-[2rem] font-[600] uppercase mt-[20px]">Thông tin đơn hàng:</h2>
            {
                cartData.length === 0 && (
                    <p className="text-[1.5rem] mt-5 italic">Giỏ hàng của bạn đang trống!</p>
                )
            }
            <div className="mt-5 max-h-[265px] overflow-y-auto p-[1rem]">
                {
                    cartData.map((item, index) => (
                        <div className="flex items-center mb-5" key={index}>
                            <div className="w-[80px] h-[80px] mr-5 relative rounded-lg bg-second-dark-text-color border-[1px] border-solid border-[#cdcdcd] justify-between items-center flex">
                                <Image src={imageUrl(item.color.image)} className="object-contain h-full" />
                                <span className='absolute text-[1.3rem] top-0 left-0 w-[20px] rounded-full -translate-x-1/2 -translate-y-1/2 h-[20px] inline-flex justify-center bg-main-dark-bg-color text-second-light-bg-color items-center'>
                                    {item.quantityCart}
                                </span>
                            </div>
                            <div className="flex-1 flex items-center">
                                <div className="flex-1">
                                    <h3 className="font-[600] text-[1.5rem]">{item.name}</h3>
                                    <div className="flex items-center text-[1.5rem]">
                                        <span>{item.size.size}</span>
                                        <span className="mx-3">/</span>
                                        <span className="border-[2px] border-solid border-[#cdcdcd] w-[20px] h-[20px]" style={{backgroundColor: `#${item.color.value}`}} />
                                    </div>
                                </div>
                                <span className="whitespace-nowrap pr-5 font-[600] text-[1.7rem]">{formatCurrency(item.price)}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default ListOrder