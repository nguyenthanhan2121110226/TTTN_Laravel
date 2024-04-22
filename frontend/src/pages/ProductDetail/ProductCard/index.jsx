import PropTypes from 'prop-types'
import classNames from "classnames/bind"
import Image from "~/components/Image"
import styles from './ProductCardDetail.module.scss'
import imageUrl from '~/utils/imageUrl'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import formatCurrency from '~/utils/formatCurrency'
import { addItemToCartAction } from '~/redux/actions/cartDataActions'
import { toggleCart } from '~/redux/actions/cartActions'



const cx = classNames.bind(styles)

function ProductCard({ product }) {
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

  return (
    <div className={`${cx("card")} h-full bg-black flex lg:hidden`}>
      <div className="flex-[4] mr-[1.6rem] h-full rounded-r-[50%]" style={{ backgroundColor: "#" + selectColor.value }}>
        <div className="w-full h-full flex items-center justify-center">
          <Image src={imageUrl(selectColor.image)} className={`${cx("image-preview")}`} />
        </div>
      </div>
      <div className="flex-[5] ml-[1.6rem] flex items-center h-full">
        <div className="w-full">
          <h1 className="text-[4rem] font-[600] uppercase">{product.brands.name}</h1>
          <h1 className={cx("name")}>{product.name}</h1>
          <div className="flex items-center mt-5">
            <span className="text-[3rem] font-[600] text-main-light-bg-color">{formatCurrency(product.pricesale)}</span>
            {
              product.price > product.pricesale && (
                <span className="text-[2rem] opacity-80 line-through ml-[50px]">{formatCurrency(product.price)}</span>
              )
            }
          </div>
          <div className="flex items-center mt-5">
            <span className="uppercase text-[2rem] font-[400] mr-[2.4rem]">Màu sắc:</span>
            <div className="flex items-center">
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
          <div className="flex items-center mt-7">
            <span className="uppercase text-[2rem] font-[400] mr-[2.4rem]">Kích thước:</span>
            <div className="flex items-center">
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
          <div className="mt-12">
            <button 
            onClick={() => handleAddToCart()}
            className="btn button-dark-theme text-[2.2rem] font-[600] py-[1.5rem] px-[2rem]">Thêm Vào Giỏ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

ProductCard.defaultProps = {
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


export default ProductCard