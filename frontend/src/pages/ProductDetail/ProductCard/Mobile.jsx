import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import styles from './ProductCardDetail.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import Image from '~/components/Image'
import { toggleCart } from '~/redux/actions/cartActions'
import { addItemToCartAction } from '~/redux/actions/cartDataActions'
import imageUrl from '~/utils/imageUrl'
import formatCurrency from '~/utils/formatCurrency'

const cx = classNames.bind(styles)

function Mobile({ product }) {

    const [selectSize, setSelectSize] = useState(product.sizes[0])
    const [selectColor, setSelectColor] = useState(product.colors[0])
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if (!product) return
        if (product.quantity === 0) {
            toast.error("Xin lỗi! Sản phẩm này đã hết hàng trong kho!", {
                position: "top-center",
                theme: "dark"
            })
            return
        }

        const payload = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            color: selectColor,
            size: selectSize,
            price: product.pricesale
        }
        dispatch(addItemToCartAction(payload))
        dispatch(toggleCart(true))
    }


    const handleNext = () => {
        const index = product.colors.findIndex(item => item.id === selectColor.id)
        console.log(index);
        if(index === -1) return
        if(index < product.colors.length - 1) {
            setSelectColor(product.colors[index + 1])
        }else{
            setSelectColor(product.colors[0])
        }
    }

    const handlePrev = () => {
        const index = product.colors.findIndex(item => item.id === selectColor.id)
        if(index === -1) return
        if(index > 0) {
            setSelectColor(product.colors[index - 1])
        }else{
            const length = product.colors.length
            setSelectColor(product.colors[length - 1])
        }
    }

    return (
        <div className="w-full hidden lg:block">
            <div className='w-full'>
                <Image src={imageUrl(selectColor.image)} />
            </div>
            <div className='flex justify-center items-center my-5'>
                <button onClick={() => handlePrev()} className='text-[3rem] active:scale-[1.3] transition-transform text-white'><GrFormPreviousLink /></button>
                <span className='px-[1.5rem] py-[0.5rem] rounded-2xl mx-[1.6rem] bg-main-dark-text-color text-main-dark-bg-color'>{selectColor.name}</span>
                <button 
                onClick={() => handleNext()}
                className='text-[3rem] active:scale-[1.3] transition-transform text-white'><GrFormNextLink /></button>
            </div>
            <div className='w-full'>
                <span className='text-[2rem] font-[600]'>{product.brands.name}</span>
                <h2 className='text-[3rem] font-[600]'>{product.name}</h2>
                <div className="flex items-center mt-5">
                    <span className='mr-5 text-[2rem] font-[600]'>{formatCurrency(product.pricesale)}</span>
                    <span className='text-[1.7rem] line-through'>{formatCurrency(product.price)}</span>
                </div>
                <div className='mt-5 flex items-center'>
                    <span className='text-[2rem] mr-8'>Màu sắc:</span>
                    <div className="flex items-center flex-wrap">
                        {
                            product.colors.map(item => (
                                <span key={item.id} className={`${cx("color-btn")} w-[30px] h-[30px] rounded-full cursor-pointer select-none p-[0.3rem]`}>
                                    <span className="w-full h-full rounded-full inline-block" style={{
                                        backgroundColor: "#" + item.value,
                                        border: `5px solid #${selectColor.id === item.id ? item.value : "ccc"}`
                                    }}
                                        onClick={() => setSelectColor(item)}
                                    />
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-5 flex items-center'>
                    <span className='text-[2rem] mr-8 whitespace-nowrap'>Kích thước:</span>
                    <div className="flex items-center flex-wrap">
                        {
                            product.sizes.map(item => (
                                <span
                                    onClick={() => setSelectSize(item)}
                                    className={`${cx("btn-size", { "active": item.id === selectSize.id })} text-[2rem] font-[600] opacity-80`} key={item.id}>
                                    {item.size}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                    <button
                        onClick={() => handleAddToCart()}
                        className="btn button-dark-theme text-[2.2rem] font-[600] py-[1.5rem] px-[2rem]">
                        Thêm Vào Giỏ
                    </button>
                </div>
            </div>
        </div>
    )
}


Mobile.propTypes = {
    product: PropTypes.object.isRequired
}

Mobile.defaultProps = {
    product: {
        image: "",
        name: "",
        price: 0,
        pricesale: 0,
        brands: {},
        categories: [],
        colors: [],
        sizes: []
    }
}

export default Mobile