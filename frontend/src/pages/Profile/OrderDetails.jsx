import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { MdCancel, MdPaid } from 'react-icons/md'
import { BiShow } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineEventNote } from 'react-icons/md'
import { FaWarehouse, FaTruck } from 'react-icons/fa'
import moment from 'moment'
import { axiosContent, axiosDefault } from "~/utils/axios"
import Loading from "./Loading"
import { getOrderStatusName, getPaymentMethodName, getPaymentStatusName } from "~/utils/orderStatus"
import Image from "~/components/Image"
import imageUrl from "~/utils/imageUrl"
import formatCurrency from "~/utils/formatCurrency"
import { routes } from "~/config"
import Spin from "~/layouts/LoadingPage/Spin"


const selectNameOrdertStatus = (status) => {
    const paymentStatusNames = [
        {
            status: 4,
            name: "đã bị hủy thành công"
        },
        {
            status: 1,
            name: "đã giao thành công"
        },
        {
            status: 2,
            name: "đang được vận chuyển"
        },
        {
            status: 3,
            name: "đang chờ xử lý"
        },
    ]
    const result = paymentStatusNames.find(item => item.status == status)

    return result.name
}



function OrderDetails() {

    const { id } = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [histories, setHistories] = useState([])
    const [reason, setReason] = useState("")
    const [loadingStt, setLoadingStt] = useState(false)

    useEffect(() => {
        getDetail()
       
    }, [])

    useEffect(() => {
        getHistories()
    }, [])

    const getDetail = () => {
        setLoading(true)
        axiosDefault.get(`order-detail/${id}`, {
            params: {
                orderid: id
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .finally(() => setLoading(false))
    }



    const getHistories = () => {
        axiosContent.get(`order-status-history/${id}`)
            .then((res) => {
                setHistories(res.data)
            })
    }

    const total = useMemo(() => {
        return data?.products.reduce((acc, item) => {
            return acc + (item.product_price * item.product_quantity)
        }, 0)
    }, [data])

    const handleCancel = () => {
        if (data.status != 3) return
        if(!reason && reason.length === 0) {
            toast.error("Hãy chọn 1 lý do hủy đơn hàng", {
                theme: "dark",
                position: "top-center"
            })
            return
        }
        setLoadingStt(true)
        axiosContent.post(`order/status/${id}`, { status: 4, reason: reason })
            .then(() => {
                toast.success("Đã hủy đơn hàng thành công!", {
                    theme: "dark",
                    position: "top-center"
                })
                getDetail()
                getHistories()
            })
            .catch(() => {
                toast.error("Đã hủy đơn hàng thất bại!", {
                    theme: "dark",
                    position: "top-center"
                })
            })
            .finally(() => setLoadingStt(false))
    }


    return !loading ? (
        data && (
            <div className="w-full">
                <h1 className="text-[2rem] uppercase">Chi tiết đơn hàng</h1>
                <div className="mt-5">
                    <h3 className="text-[1.5rem] font-[600]">Trạng thái đơn hàng</h3>
                    <ul className="flex justify-between items-center mt-5">
                        <li className="w-full">
                            <div className="flex items-center">
                                <div className="tooltip tooltip-bottom" data-tip="Bị hủy">
                                    <span className={`w-[60px] lg:w-[35px] flex justify-center items-center text-[3rem] lg:text-[2rem] shadow-sm rounded-full h-[60px] lg:h-[35px] text-white ${data.status === 4 ? "bg-red-400" : "bg-[#bcbcbc]"}`}>
                                        <MdCancel />
                                    </span>
                                </div>
                                <div className={`h-[5px] ${data.status === 4 ? "bg-[#555]" : "bg-[#bbbb]"} flex-1 flex justify-between items-center`}>
                                    <span className={`w-[10px] h-[10px] ${data.status === 4 ? "bg-[#555]" : "bg-[#bbbb]"} rounded-full`} />
                                    <span className={`w-[10px] h-[10px] ${data.status === 4 ? "bg-[#555]" : "bg-[#bbbb]"} rounded-full`} />
                                </div>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center">
                                <div className="tooltip tooltip-bottom" data-tip="Đang xử lý">
                                    <span className={`w-[60px] lg:w-[35px] flex justify-center items-center text-[3rem] lg:text-[2rem] shadow-sm rounded-full h-[60px] lg:h-[35px] text-white ${data.status === 3 || data.status === 2 || data.status === 1 ? "bg-yellow-400" : "bg-[#bcbcbc]"}`}>
                                        <FaWarehouse />
                                    </span>
                                </div>

                                <div className={`h-[5px] ${data.status === 2 || data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} flex-1 flex justify-between items-center`}>
                                    <span className={`w-[10px] h-[10px] ${data.status === 2 || data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} rounded-full`} />
                                    <span className={`w-[10px] h-[10px] ${data.status === 2 || data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} rounded-full`} />
                                </div>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center">
                                <div className="tooltip tooltip-bottom" data-tip="Đang vận chuyển">
                                    <span className={`w-[60px] lg:w-[35px] flex justify-center items-center text-[3rem] lg:text-[2rem] shadow-sm rounded-full h-[60px] lg:h-[35px] text-white ${data.status === 2 || data.status === 1 ? "bg-blue-400" : "bg-[#bcbcbc]"}`}>
                                        <FaTruck />
                                    </span>
                                </div>
                                <div className={`h-[5px] ${data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} flex-1 flex justify-between items-center`}>
                                    <span className={`w-[10px] h-[10px] ${data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} rounded-full`} />
                                    <span className={`w-[10px] h-[10px] ${data.status === 1 ? "bg-blue-700" : "bg-[#bbbb]"} rounded-full`} />
                                </div>
                            </div>
                        </li>

                        <li className="w-auto">
                            <div className="tooltip tooltip-bottom" data-tip="Đẫ giao hàng">
                                <span className={`w-[60px] lg:w-[35px] flex justify-center items-center text-[3rem] lg:text-[2rem] shadow-sm rounded-full h-[60px] lg:h-[35px] text-white ${data.status === 1 ? "bg-green-400" : "bg-[#bcbcbc]"}`}>
                                    <MdPaid />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h3 className="text-[1.5rem] font-[600] mb-3">Thông tin đơn hàng</h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="1.5rem">Mã đơn hàng</th>
                                    <th className="1.5rem">Tên người nhận</th>
                                    <th className="1.5rem">Số điện thoại</th>
                                    <th className="1.5rem">Email</th>
                                    <th className="1.5rem">Địa chỉ</th>
                                    <th className="1.5rem">Phương thức thanh toán</th>
                                    <th className="1.5rem">Trạng thái thanh toán</th>
                                    <th className="1.5rem">Trạng thái đơn hàng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="1.5rem">#{data.id}</td>
                                    <td className="1.5rem">{data.reciver_name}</td>
                                    <td className="1.5rem">{data.reciver_phone}</td>
                                    <td className="1.5rem">{data.reciver_email}</td>
                                    <td className="1.5rem">{data.address}</td>
                                    <td className="1.5rem">
                                        <div className="badge text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]">
                                            {getPaymentMethodName(data.payment_method)}
                                        </div>
                                    </td>
                                    <td className="1.5rem">
                                        <div className={`badge 
                      ${data.payment_status === 1 ? "badge-success" : ""}
                      ${data.payment_status === 0 ? "badge-warning" : ""}
                        text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]`}>
                                            {getPaymentStatusName(data.payment_status)}
                                        </div>
                                    </td>
                                    <td className="1.5rem">
                                        <div className={`badge 
                      ${data.status === 1 ? "badge-success" : ""} 
                      ${data.status === 2 ? "badge-primary" : ""} 
                      ${data.status === 3 ? "badge-accent" : ""} 
                      ${data.status === 4 ? "badge-warning" : ""}
                       text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]`}>
                                            {getOrderStatusName(data.status)}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <h3 className="text-[1.5rem] font-[600] mb-3">Chi tiết đơn hàng</h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th />
                                    <th className="1.5rem">Hình ảnh</th>
                                    <th className="1.5rem">Tên sản phẩm</th>
                                    <th className="1.5rem">Kích thước</th>
                                    <th className="1.5rem">Màu sắc</th>
                                    <th className="1.5rem">Giá tiền</th>
                                    <th className="1.5rem">Số lượng</th>
                                    <th className="1.5rem">Tổng tiền</th>
                                    <th className="1.5rem">Xem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.products.map((item, index) => (
                                        <tr key={index}>
                                            <td className="1.5rem font-[600]">{index + 1}</td>
                                            <td className="1.5rem">
                                                <Image src={imageUrl(item.product_image)} className="w-[80px] object-contain" />
                                            </td>
                                            <td className="1.5rem">{item.product_name}</td>
                                            <td className="1.5rem">{item.product_size}</td>
                                            <td className="1.5rem">
                                                <span
                                                    className="w-[30px] block h-[30px] rounded-full border-[2px] border-solid border-gray-400"
                                                    style={{ backgroundColor: `#${item.product_color}` }}

                                                />
                                            </td>
                                            <td className="1.5rem">{formatCurrency(item.product_price)}</td>
                                            <td className="1.5rem">{item.product_quantity}</td>
                                            <td className="1.5rem">{formatCurrency(item.product_quantity * item.product_price)}</td>
                                            <td className="1.5rem">
                                                <Link to={routes.products + "/" + item.product_slug}
                                                    className="btn button-dark-theme btn-square text-[1.5rem]"
                                                >
                                                    <BiShow />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-3 lg:grid-cols-1 gap-[3.4rem]">
                        <div className="w-full">
                            <h3 className="text-[1.5rem] font-[600] mb-3">Tổng thanh toán:</h3>
                            <div className="w-full">
                                <div className="flex items-center">
                                    <div className="flex-1 justify-start items-center">
                                        <span className="text-[1.5rem] font-[600] inline-block">Tạm tính: </span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[1.5rem] font-[600]">{formatCurrency(total ?? 0)}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-1 justify-start items-center">
                                        <span className="text-[1.5rem] font-[600] inline-block">Phí vận chuyển: </span>
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <AiOutlinePlus className="inline-block mr-3" />
                                        <span className="text-[1.5rem] font-[600]">{formatCurrency(data.shipping)}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-1 justify-start items-center">
                                        <span className="text-[1.5rem] font-[600] inline-block">Phí voucher: </span>
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <AiOutlineMinus className="inline-block mr-3" />
                                        <span className="text-[1.5rem] font-[600]">{formatCurrency(data.voucher)}</span>
                                    </div>
                                </div>
                                <div className="h-[1px] bg-[#dcdcdc] my-5"></div>
                                <div className="flex items-center">
                                    <div className="flex-1 justify-start items-center">
                                        <span className="text-[1.8rem] font-[600] inline-block">Thành tiền: </span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[1.8rem] font-[600]">{formatCurrency(data.amount)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="text-[1.5rem] font-[600] mb-3">Ghi chú trước khi giao hàng: </h3>
                            <p className="italic text-[1.5rem] flex items-center">
                                <MdOutlineEventNote className="mr-3 inline-block" />
                                {data.note}</p>
                            <div className="mt-[2.4rem]">

                                {/* The button to open modal */}
                                <label htmlFor="my-modal-3" className="btn text-[1.5rem] h-auto py-[0.7rem] modal-button">Hủy đơn hàng</label>
                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal z-[99]">
                                    <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-[2rem] uppercase font-bold">Lý do hủy đơn hàng</h3>
                                        <div className="mt-[1rem]">
                                            <label htmlFor="reason-1" className="flex items-center mb-[1.6rem]">
                                                <input type="radio" id="reason-1" value="Giao hàng chậm" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Giao hàng chậm</span>
                                            </label>
                                            <label htmlFor="reason-2" className="flex items-center mb-[1.6rem]">
                                                <input type="radio" id="reason-2" value="Đặt hàng nhầm" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Đặt hàng nhầm</span>
                                            </label>
                                            <label htmlFor="reason-3" className="flex items-center mb-[1.6rem]">
                                                <input type="radio" id="reason-3" value="Dịch vụ không tốt" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Dịch vụ không tốt</span>
                                            </label>
                                            <label htmlFor="reason-4" className="flex items-center mb-[1.6rem]">
                                                <input type="radio" id="reason-4" value="Không có sự tư vấn" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Không có sự tư vấn</span>
                                            </label>
                                            <label htmlFor="reason-5" className="flex items-center mb-[1.6rem]">
                                                <input type="radio" id="reason-5" value="Sản phẩm không phù hợp túi tiền" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Sản phẩm không phù hợp túi tiền</span>
                                            </label>
                                            <label htmlFor="reason-6" className="flex items-center">
                                                <input type="radio" id="reason-6" value="Lý do khác" name="radio-1" onChange={e => setReason(e.target.value)} className="radio" />
                                                <span className="text-[1.4rem] ml-2 flex-1">Lý do khác</span>
                                            </label>
                                        </div>
                                        <div className="flex justify-center mt-[1rem]">
                                            <button className="btn btn-outline btn-error text-[2rem] font-bold h-auto px-[1.2rem] py-[0.8rem]
                                disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed"
                                                disabled={data.status != 3}
                                                onClick={() => handleCancel()}
                                            >
                                                Hủy
                                            </button>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="w-full">
                            <h3 className="text-[1.5rem] font-[600] mb-3">Theo dõi đơn hàng:</h3>
                            <div className="w-full">
                                {
                                    histories.map(item => (
                                        <div key={item.id} className="w-full p-[1.6rem] mb-5"
                                            style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}
                                        >
                                            <p className="text-[1.4rem]">Đơn hàng của bạn <strong>{selectNameOrdertStatus(item.status)}</strong> vào lúc: <strong>{moment(item.created_at).utc().format("h:mm a DD/MM/YYYY")}</strong></p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>
                {
                    loadingStt && (
                        <Spin />
                    )
                }

            </div>
        )
    ) : (
        <Loading />
    )
}

export default OrderDetails