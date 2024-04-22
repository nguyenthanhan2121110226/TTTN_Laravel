import classNames from "classnames/bind"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { HOTPRODUCT } from "~/assets/images"
import Image from "~/components/Image"
import { routes } from "~/config"
import { axiosDefault } from "~/utils/axios"
import formatCurrency from "~/utils/formatCurrency"
import styles from './BestProduct.module.scss'

const cx = classNames.bind(styles)
function BestProduct() {

    const [data, setData] = useState()

    useEffect(() => {
        axiosDefault.get("product/hot-deal", {
            params: {
                type: "single",
            }
        })
            .then((res) => {
                setData(res.data)
            })
    }, [])

    return (
        <div className="p-[4.8rem] md:p-[2.4rem] bg-second-dark-bg-color relative">
            <h1 className="text-main-dark-text-color text-right uppercase text-[4rem] md:text-[2rem] font-[700]">Bán chạy nhất</h1>
            <div className="text-right">
                <h1 className={`${cx("name-product")} max-w-[60%] md:max-w-[90%] inline-block text-[10rem] md:text-[5rem] text-ellipsis overflow-hidden whitespace-nowrap font-[600]`}>
                    {data?.name}
                </h1>
            </div>
            <div className="text-right">
                <span className={`${cx("price-product")} text-[4rem] md:text-[2rem] font-[600]`}>{formatCurrency(data?.pricesale)}</span>
            </div>
            <div className="text-right mt-[4rem] md:mt-[2rem]">
                <Link to={routes.products + "/" + data?.slug} className="btn button-dark-theme text-[2rem] md:text-[1.5rem] px-[2rem] md:px-[1rem] md:py-[0.5rem] py-[1.5rem]">Mua ngay</Link>
            </div>
            <div className="absolute bottom-[0] translate-y-[30%] left-[4rem] w-[60%] md:w-[50%]">
                <Image src={HOTPRODUCT} />
            </div>
        </div>
    )
}

export default BestProduct