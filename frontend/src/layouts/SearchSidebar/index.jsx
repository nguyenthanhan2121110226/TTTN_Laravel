import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import classNames from "classnames/bind"
import styles from './SearchSidebar.module.scss'
import { toggleSearch } from "~/redux/actions/searchActions"
import Image from "~/components/Image"
import { axiosDefault } from "~/utils/axios"
import imageUrl from "~/utils/imageUrl"
import formatCurrency from "~/utils/formatCurrency"
import { routes } from "~/config"

const cx = classNames.bind(styles)

function SearchSidebar() {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "overlay"
        }
    }, [])

    useEffect(() => {
        if (search) {
            axiosDefault.get("product", {
                params: { search: search }
            })
                .then((res) => {
                    setProducts(res.data.data)
                })
        } else {
            setProducts([])
        }
    }, [search])

    const handleCloseSearch = () => {
        dispatch(toggleSearch(false))
    }

    const handleChange = (e) => {
        const param = e.target.value
        if (param.startsWith(" ")) {
            return
        }
        setSearch(param)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        const url = routes.search + "?q=" + search.trim()
        navigate(url)
        handleCloseSearch()
    }

    return (
        <div className={`fixed top-0 right-0 bottom-0 bg-[#00000050] overflow-hidden left-0 z-[100]`} onClick={() => handleCloseSearch()}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[350px] lg:w-[300px] px-[1rem] py-[2rem] text-main-dark-text-color bg-main-dark-bg-color absolute top-0 right-0 bottom-0 ${cx("container")}`}
            >
                <div className="w-full h-full overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder="Nhập tên sản phẩm..."
                            className="py-[1rem] text-[1.5rem] outline-none px-[1rem] mr-2 rounded-md flex-1 bg-second-dark-bg-color" />
                        <button
                            type="submit"
                            className="btn button-dark-theme-important py-[1.2rem] ml-2 text-[1.5rem]"
                        >
                            tìm kiếm
                        </button>
                    </form>
                    {
                        products.length === 0 && (
                            <div className="p-[1.6rem] font-[600] text-[1.5rem] opacity-80">
                                {search && products.length === 0 && "Không tìm thấy sản phẩm nào!"}
                                {!search && "Vui lòng nhập tên sản phẩm để tìm kiếm!"}
                            </div>
                        )
                    }
                    <div className="h-full mt-5 overflow-y-auto p-[1rem]">

                        {
                            products.map(product => (
                                <Link to={routes.products + "/" + product.slug} className="flex items-center mb-5" key={product.id}>
                                    <div className="w-[80px] h-[80px] mr-5 relative rounded-lg bg-second-dark-text-color border-[1px] border-solid border-[#cdcdcd] justify-between items-center flex">
                                        <Image src={imageUrl(product.image)} className="object-contain h-full" />
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <div className="flex-1">
                                            <h3 className="font-[600] text-[1.5rem]">{product.name}</h3>
                                            <span className="font-[600] text-[1.4rem]">{product.brand_name}</span>
                                        </div>
                                        <span className="whitespace-nowrap pr-5 font-[600] text-[1.5rem] ml-4">{formatCurrency(product.pricesale)}</span>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSidebar