import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ImTicket } from 'react-icons/im'
import classNames from "classnames/bind"
import styles from './Profile.module.scss'
import { axiosDefault } from '~/utils/axios'
import formatCurrency from '~/utils/formatCurrency'
import formatDate from '~/utils/formatDate'
import checkVoucher from '~/utils/checkVoucher'
import Loading from './Loading'

const cx = classNames.bind(styles)

function HistoryOrders() {
  const profile = useSelector(state => state.profile.data)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axiosDefault.get("/voucher/get-user", {
      params: { userid: profile.id }
    })
      .then((res) => {
        const newData = res.data.data
        setData(newData)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? (
    <div className="w-full">
      <h1 className="text-[2rem] uppercase">Danh sách mã giảm giá</h1>
      <p className='text-[1.3rem] font-bold italic mt-5'>
        Hệ thống sẽ tự động xóa mã giảm giá khi khách hàng sử dụng hết mã giảm giá đó!
      </p>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-[2.4rem]">
        {
          data.map((item, index) => (
            <div className="flex items-center shadow-md relative" key={index}>
              <div className="w-[130px] h-[100px]">
                <div className={cx("banner-horizontal")}>
                  <span className='font-[700] text-[1.5rem] text-white'>NTTSHOP</span>
                  <span className='absolute top-0 right-0 inline-block px-[0.8rem] py-[0.1rem] bg-main-text-color text-[1.3rem] font-bold text-white'>
                    {checkVoucher(item.date_milestones) ? "Còn" : "Hết hạn"}
                  </span>
                </div>
              </div>
              <div className="flex-1 pl-4 py-[1.5rem]">
                <h2 className="font-[600] uppercase text-[1.7rem] leading-1">{item.name}</h2>
                <p className="text-[1.4rem] font-[600] opacity-90">Áp dụng cho đơn hàng: Trên <strong>{formatCurrency(item.cash_milestones)}</strong></p>
                <p className="text-[1.5rem] font-[600] opacity-90">Mức ưu đãi: Giảm <strong>{formatCurrency(item.price)}</strong></p>
                <p className="text-[1.4rem] font-[600] opacity-90">Ngày hết hạn: <strong>{formatDate(item.date_milestones)}</strong></p>
              </div>
              <div className="absolute top-0 right-0 text-[1.5rem] font-[600] flex items-center">
                x{item.quantity}
                <ImTicket className="ml-1 text-main-text-color text-[1.7rem]" />
              </div>
            </div>
          ))
        }

      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default HistoryOrders