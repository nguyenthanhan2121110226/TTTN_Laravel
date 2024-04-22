import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { BiShow } from 'react-icons/bi'
import styles from './Profile.module.scss'
import Pagination from "~/components/Pagination"
import { axiosDefault } from "~/utils/axios"
import formatCurrency from "~/utils/formatCurrency"
import { getOrderStatusName, getPaymentMethodName, getPaymentStatusName } from "~/utils/orderStatus"
import { routes } from '~/config'

const cx = classNames.bind(styles)

function Orders() {
  const profile = useSelector(state => state.profile.data)
  const [data, setData] = useState([])
  const [links, setLinks] = useState([])
  const [order, setOrder] = useState("date:desc")
  const [status, setStatus] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const [price, setPrice] = useState("")


  useEffect(() => {
    getAll()
  }, [order, status, paymentMethod, paymentStatus, price])


  const getAll = () => {

    const param = {
      limit: 7,
      userid: profile.id,
    }
    if (order) {
      param.sortBy = order
    }
    if (status) {
      param.status = status
    }
    if (paymentMethod) {
      param.paymentMethod = paymentMethod
    }
    if (paymentStatus) {
      param.paymentStatus = paymentStatus
    }
    if (price) {
      param.price = price
    }

    axiosDefault.get("order", {
      params: param
    })
      .then((res) => {
        setData(res.data.data)
        setLinks(res.data.links)
      })
  }

  return (
    <div className="w-full">
      <h1 className="text-[2rem] uppercase">Tất cả đơn hàng</h1>
      <div className="mt-5 flex">
        <span className="text-[1.5rem] font-[600] whitespace-nowrap">Lọc theo: </span>
        <div className="ml-3 flex items-center flex-wrap">
          <select onChange={(e) => setOrder(e.target.value)} value={order} className="h-[30px] w-[200px] text-[1.5rem] font-[600]  px-2 border-[1px] border-solid border-[#cbcbcb] mr-5">
            <option value="">{`[--- Sắp xếp ---]`}</option>
            <option value="date:desc">Ngày mới nhất</option>
            <option value="date:asc">Ngày cũ nhất</option>
          </select>
          <select onChange={(e) => setStatus(e.target.value)} value={status} className="h-[30px] w-[200px] text-[1.5rem] font-[600]  px-2 border-[1px] border-solid border-[#cbcbcb] mr-5">
            <option value="">{`[--- Trạng thái đơn hàng ---]`}</option>
            <option value="4">Bị hủy</option>
            <option value="3">Đang xử lý</option>
            <option value="2">Đang vận chuyển</option>
            <option value="1">Đã giao hàng</option>
          </select>
          <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod} className="h-[30px] w-[200px] text-[1.5rem] font-[600]  px-2 border-[1px] border-solid border-[#cbcbcb] mr-5">
            <option value="">{`[--- Phương thức thanh toán ---]`}</option>
            <option value="cash">Tiền mặt</option>
            <option value="momo">Momo</option>
            <option value="atm">ATM</option>
          </select>
          <select onChange={(e) => setPrice(e.target.value)} value={price} className="h-[30px] w-[200px] text-[1.5rem] font-[600]  px-2 border-[1px] border-solid border-[#cbcbcb] mr-5">
            <option value="">{`[--- Mức giá ---]`}</option>
            <option value="0to5000000">Dưới 5 triệu</option>
            <option value="5000000to10000000">Từ 5 triệu đến 10 triệu</option>
            <option value="10000000to13000000">Từ 10 triệu đến 13 triệu</option>
            <option value="13000000to17000000">Từ 13 triệu đến 17 triệu</option>
            <option value="17000000to12000000">Từ 17 triệu đến 22 triệu</option>
            <option value="22000000to25000000">Từ 22 triệu đến 25 triệu</option>
            <option value="25000000to50000000">Từ 25 triệu đến 50 triệu</option>
            <option value="50000000to75000000">Từ 20 triệu đến 75 triệu</option>
            <option value="75000000to100000000">Từ 75 triệu đến 100 triệu</option>
            <option value="100000000to150000000">Từ 100 triệu đến 150 triệu</option>
            <option value="150000000to1000000000">Trên 150 triệu</option>
          </select>
          <select onChange={(e) => setPaymentStatus(e.target.value)} value={paymentStatus} className="h-[30px] w-[200px] mt-3 lg:mt-0 text-[1.5rem] font-[600]  px-2 border-[1px] border-solid border-[#cbcbcb] mr-5">
            <option value="">{`[--- Trạng thái thanh toán ---]`}</option>
            <option value="0">Chưa thanh toán</option>
            <option value="1">Đã thanh toán</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto w-full">
          {
            data.length === 0 && <p className="text-[1.5rem] italic p-5">Bạn không có đơn hàng nào!</p>
          }
          {
            data.length > 0 && (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th />
                    <th className="1.5rem">
                      Xem
                    </th>
                    <th className="1.5rem">Mã đơn hàng</th>
                    <th className="1.5rem">Tên người nhận</th>
                    <th className="1.5rem">Số điện thoại</th>
                    <th className="1.5rem">Địa chỉ</th>
                    <th className="1.5rem">Phí ship</th>
                    <th className="1.5rem">Phí giảm voucher</th>
                    <th className="1.5rem">Phương thức thanh toán</th>
                    <th className="1.5rem">Trạng thái thanh toán</th>
                    <th className="1.5rem">Trạng thái đơn hàng</th>
                    <th className="1.5rem">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item, index) => (
                      <tr key={index}>
                        <th className="1.5rem">{index + 1}</th>
                        <td>
                          <Link to={routes.profileStringRoute + routes.orders + "/" + item.id}
                            className="btn button-dark-theme btn-square text-[1.5rem]"
                          >
                            <BiShow />
                          </Link>
                        </td>
                        <td className="1.5rem">#{item.id}</td>
                        <td className="1.5rem">{item.reciver_name}</td>
                        <td className="1.5rem">{item.reciver_phone}</td>
                        <td className="1.5rem">{item.address}</td>
                        <td className="1.5rem">{formatCurrency(item.shipping)}</td>
                        <td className="1.5rem">{formatCurrency(item.voucher)}</td>
                        <td className="1.5rem">
                          <div className="badge text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]">
                            {getPaymentMethodName(item.payment_method)}
                          </div>
                        </td>
                        <td className="1.5rem">
                          <div className={`badge 
                      ${item.payment_status === 1 ? "badge-success" : ""}
                      ${item.payment_status === 0 ? "badge-warning" : ""}
                        text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]`}>
                            {getPaymentStatusName(item.payment_status)}
                          </div>
                        </td>
                        <td className="1.5rem">
                          <div className={`badge 
                      ${item.status === 1 ? "badge-success" : ""} 
                      ${item.status === 2 ? "badge-primary" : ""} 
                      ${item.status === 3 ? "badge-accent" : ""} 
                      ${item.status === 4 ? "badge-warning" : ""}
                       text-[1.5rem] py-[0.5rem] px-[1.5rem] h-auto font-[600]`}>
                            {getOrderStatusName(item.status)}
                          </div>
                        </td>
                        <td className="1.5rem">{formatCurrency(item.amount)}</td>

                      </tr>
                    ))
                  }

                </tbody>
              </table>
            )
          }

        </div>

      </div>
      <Pagination links={links} onSetList={setData} perPage={7} />
    </div>
  )
}

export default Orders