import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ProductCard.module.scss'
import Image from '~/components/Image'
import Stars from '../Stars'

import imageUrl from '~/utils/imageUrl'
import formatCurrency from '~/utils/formatCurrency'
import { routes } from '~/config'
import { toggleProductModalAction } from '~/redux/actions/productModalActions'


const cx = classNames.bind(styles)



function ProductCard({ product }) {
    const themeMode = useSelector(state => state.theme.mode)
    const dispatch = useDispatch()
    const handleBuy = (slug) => {
        dispatch(toggleProductModalAction(slug))
    }

    return (
        <div className={cx("card", themeMode)}>
            <span className="absolute top-[0] left-[1.5rem] w-[50px]">
                <Image
                    src={imageUrl(product.brand_image)}
                    className={cx("brand-logo")} />
            </span>
            <div className='relative w-full flex justify-center pt-[3.6rem]'>
                <Image src={imageUrl(product.image)} className="block" />

                {
                    product.sale > 0 && (
                        <span className={`absolute font-[600] top-[0] right-[0] px-[1rem] py-[0.3rem] inline-flex justify-center items-center text-[1.2rem] rounded-[10px] ${cx("sale-badge")}`}>
                            Sale
                        </span>
                    )
                }

            </div>
            <h1 className='text-[2rem] font-[600] text-center mt-[3rem] text-ellipsis overflow-hidden whitespace-nowrap'>
                {product.name}
            </h1>
            <div className='mt-3 flex items-center justify-center'>
                <span className={`${cx("mainprice")} text-[2rem] md:text-[1.5rem] font-[600]`}>{formatCurrency(product.pricesale)}</span>
                {
                    product.pricesale < product.price && (
                        <span className={`${cx("subprice")} text-[1.6rem] md:text-[1.3rem] opacity-80 line-through ml-5 md:ml-3`}>{formatCurrency(product.price)}</span>
                    )
                }
            </div>
            <div className='mt-3 text-center'>
                <Stars num={product.stars} />
            </div>
            <div className='mt-3 flex items-center justify-center'>
                <button
                    onClick={() => handleBuy(product.slug)}
                    className={`btn md:hidden btn-ghost ${themeMode === "dark" ? "button-dark-theme" : "button-light-theme"} text-[1.5rem] uppercase py-[0.8rem] mr-5`}>Chọn mua</button>
                <Link to={routes.products + "/" + product.slug} className={`btn btn-ghost ${themeMode === "dark" ? "button-dark-theme" : "button-light-theme"} text-[1.5rem] uppercase py-[0.8rem] mr-5 md:mr-0`}>Chi tiết</Link>
            </div>
        </div>
    )
}


ProductCard.propTypes = {
    product: PropTypes.object
}
ProductCard.defaultProps = {
    product: {
        image: "",
        name: "",
        stars: 5,
        slug: "",
        pricesale: "",
        price: "",
        brand_image: "",
        sale: ""
    }
}


export default ProductCard