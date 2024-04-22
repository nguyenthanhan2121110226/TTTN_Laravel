import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { LOGO } from "~/assets/images"
import BreakeCrumb from "~/components/BreakeCrumb"
import Image from "~/components/Image"
import { usePayment } from '~/hooks/usePayment'
import {routes} from '~/config'
import Address from './Address'
import { Link } from 'react-router-dom'
function Form() {
    const {
        fullname,
        setFullName,
        phone,
        setPhone,
        note,
        setNote,
        methodPayment,
        setMethodPayment
    } = usePayment()

    const breakeCrumbs = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.payment,
                name: "Thanh toán"
            },
        ]
    }, [])

    return (
        <div className="w-full">
            <Link to={routes.home} className="w-[120px] block">
                <Image src={LOGO} />
            </Link>
            <div className="mt-5">
                <BreakeCrumb urls={breakeCrumbs} />
            </div>
            <div className="mt-8">
                <h2 className="text-[2rem] font-[600] uppercase">Thông tin người nhận hàng:</h2>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-[2.4rem]">
                    <div className="w-full">
                        <div className="mt-5">
                            <label htmlFor="name" className="flex items-center font-[600] text-[1.5rem]">
                                <span className="mr-5">Họ và tên: </span>
                                <div className='flex flex-1 justify-end'>
                                    <input type="text"
                                        value={fullname}
                                        onChange={(e) => setFullName(e.target.value)}
                                        name="name"
                                        className="h-[40px] lg:w-full border-[1px] border-solid border-[#cdcdcd] px-3"
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="phone" className="flex items-center font-[600] text-[1.5rem]">
                                <span className="mr-5">Số điện thoại: </span>
                                <div className='flex flex-1 justify-end'>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-[250px] lg:w-full h-[40px] border-[1px] border-solid border-[#cdcdcd] px-3"
                                    />
                                </div>
                            </label>
                        </div>
                        <h3 className="font-[600] mt-5 text-[1.5rem]">
                            Địa chỉ giao hàng:
                        </h3>
                        <Address

                        />
                    </div>
                    <div className="w-full pr-4">
                        <div className="mt-5">
                            <label htmlFor="name" className="font-[600] text-[1.5rem]">
                                <span className="mr-5">Ghi chú: </span>
                                <textarea
                                    rows={5}
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="block w-full border-[1px] border-solid border-[#cdcdcd] px-3"
                                />
                            </label>
                        </div>
                        <div className="mt-5">
                            <div className="font-[600] text-[1.5rem]">
                                <span className="mr-5">Phương thức thanh toán: </span>
                                <label className="flex mt-5 items-center">
                                    <input type="radio" name="payment"
                                    value="cash"
                                    onChange={e => setMethodPayment(e.target.value)}
                                    checked={methodPayment === "cash"}
                                    className="radio" />
                                    <span className="ml-4 font-[400]">Thanh toán khi nhận hàng</span>
                                </label>
                                <label className="flex mt-5 items-center">
                                    <input type="radio" name="payment"
                                    value="momo"
                                    onChange={e => setMethodPayment(e.target.value)}
                                    checked={methodPayment === "momo"}
                                    className="radio" />
                                    <span className="ml-4 font-[400]">Thanh toán bằng ví momo</span>
                                </label>
                                <label className="flex mt-5 items-center">
                                    <input type="radio" name="payment"
                                    value="atm"
                                    onChange={e => setMethodPayment(e.target.value)}
                                    checked={methodPayment === "atm"}
                                    className="radio" />
                                    <span className="ml-4 font-[400]">Thanh toán bằng thẻ ATM</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form