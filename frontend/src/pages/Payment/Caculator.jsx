import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useState, useEffect, useMemo } from "react"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { routes as routesConfig } from '~/config'
import { axiosDefault } from '~/utils/axios'
import formatCurrency from '~/utils/formatCurrency'
import { usePayment } from '~/hooks/usePayment'
import { toast } from 'react-toastify'
import Spin from '~/layouts/LoadingPage/Spin'
import Modal from './Modal'
import { clearItemCartAction } from '~/redux/actions/cartDataActions'
import checkVoucher from '~/utils/checkVoucher'


const errorsFields = [
    {
        field: "reciverName",
        text: "họ tên"
    },
    {
        field: "reciverPhone",
        text: "điện thoại"
    },
    {
        field: "province",
        text: "tỉnh/thành phố"
    },
    {
        field: "district",
        text: "quận"
    },
    {
        field: "ward",
        text: "xã"
    },
    {
        field: "note",
        text: "ghi chú"
    },
    {
        field: "cart",
        text: "giỏ hàng"
    }
]


function Caculator() {
    const profile = useSelector(state => state.profile.data)
    const cartData = useSelector(state => state.cartData.data)
    const [voucher, setVoucher] = useState("")
    const [vouchers, setVouchers] = useState([])
    const [shipping, setShipping] = useState(40000)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const {
        fullname,
        phone,
        note,
        methodPayment,
        province,
        district,
        ward,
    } = usePayment()
    const dispatch = useDispatch()

    useEffect(() => {

        axiosDefault.get("voucher/get-user", {
            params: {
                userid: profile.id
            }
        })
            .then((res) => {
                setVouchers(res.data.data)
            })
    }, [])

    const temporayry = useMemo(() => {
        return cartData.reduce((acc, element) => {
            return acc + (element.price * element.quantityCart)
        }, 0)
    }, [])

    const handleChangeVoucher = (e) => {
        if (e.target.value) {



            const selectVoucher = vouchers.find(item => item.id == e.target.value)

            if (!checkVoucher(selectVoucher.date_milestones)) {
                toast.error(`Voucher này đã hết hạn sử dụng!`, {
                    theme: "dark",
                    position: "top-center"
                })
                return
            }

            if (temporayry < selectVoucher.cash_milestones) {
                toast.error(`Voucher này không áp dụng được cho đơn hàng dưới ${formatCurrency(selectVoucher.cash_milestones)}!`, {
                    theme: "dark",
                    position: "top-center"
                })
                return
            }

            setVoucher({ id: selectVoucher.id, price: selectVoucher.price })

        } else {
            setVoucher("")
        }
    }


    const handlePayment = () => {
        const data = {
            userId: profile.id,
            userEmail: profile.email,
            reciverName: fullname,
            reciverPhone: phone,
            note: note,
            address: `${ward.name}, ${district.name}, ${province.name}`,
            amount: temporayry + shipping - (voucher.price ?? 0),
            voucher: voucher.price ?? 0,
            shipping: shipping,
            paymentMethod: methodPayment,
            paymentStatus: 0,
            cart: cartData,
            voucherId: voucher.id ?? null,
        }
        const copyData = {
            ...data,
            province: province.name ?? null,
            district: district.name ?? null,
            ward: ward.name ?? null
        }

        delete copyData.voucher
        delete copyData.voucherId
        delete copyData.shipping
        delete copyData.paymentStatus


        let check = true

        for (const key in copyData) {
            if (!copyData[key] || copyData[key].length === 0) {
                const error = errorsFields.find(item => item.field === key)
                toast.error(`Trường ${error?.text} không được để trống!`, {
                    theme: "dark",
                    position: "top-center"
                })
                check = false
                return
            }
        }

        if (!check) return

        setLoading(true)
        axiosDefault.post("order/create", data)
            .then((res) => {
                if (res.errCode === 0) {
                    toast.success("Đã gửi email thành công! vui lòng kiểm tra hộp thoại", {
                        theme: "dark",
                        position: "top-center"
                    })
                } else {
                    toast.warning("Hệ thống gửi email không thành công!", {
                        theme: "dark",
                        position: "top-center"
                    })
                }
                dispatch(clearItemCartAction())
                setSuccess(true)
            })
            .catch(() => {
                toast.error("Thanh toán thất bại! Vui lòng kiểm tra và thử lại!", {
                    theme: "dark",
                    position: "top-center"
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }




    return (
        <Fragment>
            <div className="mt-5">
                <label htmlFor="name" className="font-[600] text-[1.5rem]">
                    <span className="mr-5 block">Chọn voucher của bạn: </span>
                    <select onChange={handleChangeVoucher} value={voucher.id ?? ""} className="w-full h-[40px] border-[1px] border-solid border-[#cdcdcd] px-3">
                        <option value="">{`[--- Chọn voucher ---]`}</option>
                        {
                            vouchers.map(item => (
                                <option value={item.id} key={item.id}>{item.name} x({item.quantity})</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <div className="flex mt-5 justify-between items-center text-[1.8rem] font-[600] opacity-70">
                <span>Tạm tính: </span>
                <span>{formatCurrency(temporayry)} </span>
            </div>
            <div className="flex mt-5 justify-between items-center text-[1.8rem] font-[600] opacity-70">
                <span>Phí ship: </span>
                <div className="flex items-center">
                    <AiOutlinePlus className='mr-3' />
                    <span>{formatCurrency(shipping)} </span>
                </div>
            </div>
            <div className="flex mt-5 justify-between items-center text-[1.8rem] font-[600] opacity-70">
                <span>Vouchers: </span>
                <div className="flex items-center">
                    <AiOutlineMinus className='mr-3' />
                    <span>{voucher.price ? formatCurrency(voucher.price) : 0 + "đ"} </span>
                </div>
            </div>
            <div className="h-[1px] bg-[#cdcdcd] my-5" />
            <div className="flex mt-5 justify-between items-center text-[2.2rem] font-[600]">
                <span>Tổng tiền: </span>
                <span>{formatCurrency(temporayry + shipping - (voucher.price ?? 0))}</span>
            </div>
            <div className="flex items-center mt-5 justify-between">
                <Link to={routesConfig.cart} className='btn button-dark-theme text-[1.5rem] p-[1rem]'>Quay lại giỏ hàng</Link>
                <button
                    onClick={() => handlePayment()}
                    className='btn button-light-theme text-[1.5rem] p-[1rem]'>Thanh toán</button>
            </div>
            {
                loading && <Spin />
            }
            {
                success && <Modal />
            }
        </Fragment>
    )
}

export default Caculator