import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames/bind"
import styles from './ProductModal.module.scss'

import { FaTimes } from 'react-icons/fa'
import { BsFillBagPlusFill } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { toggleProductModalAction } from "~/redux/actions/productModalActions"
import { axiosDefault } from "~/utils/axios"
import formatCurrency from "~/utils/formatCurrency"
import imageUrl from '~/utils/imageUrl'
import Image from '~/components/Image'
import { toast } from "react-toastify"
import { addItemToCartAction } from "~/redux/actions/cartDataActions"
import { toggleCart } from "~/redux/actions/cartActions"

const cx = classNames.bind(styles)

function ProductModal() {
    const slug = useSelector(state => state.productModal.slug)
    const [data, setData] = useState(null)
    const [selectSize, setSelectSize] = useState(null)
    const [selectColor, setSelectColor] = useState(null)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        axiosDefault.get(`product/show/${slug}`)
            .then((res) => {
                setData(res.data)
                setSelectColor(res.data.colors[0])
                setSelectSize(res.data.sizes[0])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    const handleClose = () => {
        dispatch(toggleProductModalAction(null))
    }

    const handleAddToCart = () => {
        if (!data) return
        if (data.quantity === 0) {
            toast.error("Xin lỗi! Sản phẩm này đã hết hàng trong kho!", {
                position: "top-center",
                theme: "dark"
            })
            return
        }

        const payload = {
            id: data.id,
            name: data.name,
            slug: data.slug,
            color: selectColor,
            size: selectSize,
            price: data.pricesale
        }
        dispatch(addItemToCartAction(payload))
        dispatch(toggleCart(true))
        dispatch(toggleProductModalAction(null))

    }

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#00000090] z-[300] flex justify-center items-center'>
            <div className="w-[700px] p-[2.4rem] bg-white rounded-md shadow-md">
                <div className='text-right'>
                    <button
                        onClick={() => handleClose()}
                        className='w-[30px] h-[30px] text-[#999] text-[2rem] hover:text-[#333] transition-colors'>
                        <FaTimes />
                    </button>
                </div>
                <Fragment>
                    {
                        !loading ? (
                            !!data ? (
                                <div className="flex h-[400px] overflow-y-auto">
                                    <div className="flex-[1] mr-5">
                                        <div className='flex items-center'>
                                            <BsFillBagPlusFill className="text-main-text-color mr-5 text-[3rem]" />
                                            <span className='text-[2rem] text-[#333] font-[600] uppercase underline'>Lựa chọn mua hàng</span>
                                        </div>
                                        <div className='flex items-center text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-1 '>Tên sản phẩm: </span>
                                            <strong>{data.name}</strong>
                                        </div>
                                        <div className='flex items-center text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-1 '>Giá gốc: </span>
                                            <strong>{formatCurrency(data.price)}</strong>
                                        </div>
                                        <div className='flex items-center text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-1 '>Khuyến mãi: </span>
                                            <strong>{Math.round(data.sale)}%</strong>
                                        </div>
                                        <div className='flex items-center text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-1 '>Hãng: </span>
                                            <strong>{data.brands.name}</strong>
                                        </div>
                                        <div className='flex text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-2 '>Danh mục: </span>
                                            <div className='flex-[1]'>
                                                {
                                                    data.categories.map((item, index, arrs) => {
                                                        return (
                                                            <strong key={index} className='text-[1.5rem] inline-block mr-2'>
                                                                {item.name + (arrs.length != index + 1 ? ", " : "")}
                                                            </strong>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>


                                        <div className="flex justify-center items-center mt-10">
                                            <button
                                                onClick={() => handleAddToCart()}
                                                className="btn button-light-theme text-[1.5rem] py-[1rem]">Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                    <div className="flex-[1] ml-5">
                                        <div className='text-[#555] text-[1.5rem] font-[600]'>
                                            <span className='mr-1'>Lựa chọn màu sắc: </span>
                                            <table className="min-w-full border text-center">
                                                <thead className="border-b">
                                                    <tr>
                                                        <th scope="col" className="text-[1.5rem] font-medium text-gray-900 px-6 py-1 border-r" />
                                                        <th scope="col" className="text-[1.5rem] whitespace-nowrap font-medium text-gray-900 px-6 py-1 border-r">
                                                            Màu sắc
                                                        </th>
                                                        <th scope="col" className="text-[1.5rem] font-medium text-gray-900 px-6 py-1 border-r">
                                                            Hình ảnh
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='max-h-[70px] overflow-y-scroll'>
                                                    {
                                                        data.colors.map((item, index) => {
                                                            return (
                                                                <tr className="border-b" key={index}>
                                                                    <td className="px-6 py-1 whitespace-nowrap text-[1.5rem] font-medium text-gray-900 border-r">
                                                                        <input
                                                                            className="form-check-input appearance-none rounded-full h-6 w-6 border-[1px] border-solid border-gray-600 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                                                            type="radio"
                                                                            checked={selectColor?.id == item.id}
                                                                            value={item.id}
                                                                            onChange={() => setSelectColor(item)}

                                                                        />
                                                                    </td>
                                                                    <td className="text-[1.5rem] text-gray-900 font-light px-6 py-1 whitespace-nowrap border-r">
                                                                        <span className='w-[30px] h-[30px] inline-block rounded-full border-[1px] border-[#ccc] border-solid' style={{ backgroundColor: `#${item.value}` }} />
                                                                    </td>
                                                                    <td className="text-[1.5rem] w-[200px] text-gray-900 font-light px-6 py-1 whitespace-nowrap border-r">
                                                                        <Image src={imageUrl(item.image)} className='object-cover w-[80px]' />
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='text-[#555] text-[1.5rem] font-[600] mt-[0.8rem]'>
                                            <span className='mr-1'>Lựa chọn kích thước: </span>
                                            <div className='flex flex-wrap items-center'>
                                                {
                                                    data.sizes.map((item, index) => {
                                                        return (
                                                            <div className="inline-flex items-center mr-6" key={index}>
                                                                <input className="form-check-input appearance-none rounded-full h-6 w-6 border-[1px] border-solid border-gray-600 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                                    name='size'
                                                                    value={item.id}
                                                                    checked={item.id == selectSize?.id}
                                                                    onChange={() => setSelectSize(item)}
                                                                    type="radio" />
                                                                <label className="form-check-label text-[1.5rem] text-[#333] font-[600] inline-block" htmlFor="flexRadioDefault1">
                                                                    {item.size}
                                                                </label>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center mt-5'>
                                            <span className='inline-flex items-center h-[40px] border-[2px] border-solid border-black px-3 text-[2rem] uppercase text-white bg-black'>Giá tiền</span>
                                            <span className='inline-flex items-center h-[40px] border-[2px] border-solid border-black px-3 text-[2rem] text-black font-[600] uppercase'>{formatCurrency(data.pricesale)}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-[400px]">
                                    <p className="font-[600] text-[1.5rem] p-[2.4rem]">Không tìm thấy sản phẩm!</p>
                                </div>
                            )
                        ) : (
                            <div className=" flex justify-center items-center h-[400px]">
                                <span className={cx("spin-loading")}>
                                    <AiOutlineLoading3Quarters />
                                </span>
                            </div>
                        )
                    }

                </Fragment>
            </div>
        </div>
    )
}

export default ProductModal