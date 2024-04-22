import { useEffect, useMemo, useState } from "react"

import { AiFillFilter } from 'react-icons/ai'
import { useSearchParams } from "react-router-dom"

import BreakeCrumb from "~/components/BreakeCrumb"
import Pagination from "~/components/Pagination"
import ProductCard from "~/components/ProductCard"
import { routes } from "~/config"
import { axiosDefault } from "~/utils/axios"
import { sizes } from "~/utils/sidebar-params"


const colorsOptions = [
    { value: '0F0E0E', label: 'Màu đen' },
    { value: 'FF0000', label: 'Màu đỏ' },
    { value: '73777B', label: 'Màu xám' },
    { value: 'F73D93', label: 'Màu hồng' },
    { value: 'FFD700', label: 'Màu vàng' },
    { value: '8E3200', label: 'Màu nâu' },
    { value: '590696', label: 'Màu tím' },
    { value: 'FF5B00', label: 'Màu cam' },
    { value: '357C3C', label: 'Màu xanh lục' },
    { value: 'F9F9F9', label: 'Màu trắng' },
    { value: '242F9B', label: 'Màu xanh dương' },
]



function Search() {
    const [filter] = useSearchParams()
    const search = filter.get("q")
    const [data, setData] = useState([])
    const [order, setOrder] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [price, setPrice] = useState("")
    const [listCategory, setListCategory] = useState([])
    const [listBrand, setListBrand] = useState([])
    const [links, setLinks] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        axiosDefault.get("brand")
            .then((res) => setListBrand(res.data.data))
    }, [])

    useEffect(() => {
        axiosDefault.get("category/get-all")
            .then((res) => setListCategory(res.data))
    }, [])

    useEffect(() => {
        getAll()
    }, [order, category, brand, color, size, price])

    const getAll = () => {
        const param = {
            limit: 12,
            search: search
        }

        if (order) {
            param.sortBy = order
        }

        if (category) {
            param.category = category
        }

        if (brand) {
            param.brand = brand
        }

        if (color) {
            param.color = color
        }

        if (size) {
            param.size = size
        }

        if (price) {
            param.price = price
        }

        axiosDefault.get("/product", {
            params: param
        })
            .then((res) => {
                setData(res.data.data)
                setLinks(res.data.links)
                setTotal(res.data.total)
            })
            .catch(() => {
                throw new Error("get product fail")
            })
    }

    const breakeCrumbs = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.search,
                name: "Tìm kiếm"
            }
        ]
    }, [])

    return (
        <div className="searchpage min-h-screen pb-[4.8rem]">
            <div className="mb-5">
                <BreakeCrumb urls={breakeCrumbs} />
            </div>
            <h1 className="text-center text-[3rem] font-[600]">
                Có {total} kết quả tìm kiếm
            </h1>
            <div className="px-[60px] lg:px-[1.5rem] flex items-start font-[600] text-[1.5rem] pb-5 mt-5 border-b border-solid border-[#cbcbcb]">
                <span className="inline-flex items-center text-[2rem] mr-5">
                    <AiFillFilter className="mr-2" />
                    Lọc theo:
                </span>
                <div className="flex flex-wrap flex-1 items-center">
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="min-w-[200px] h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Danh mục ---]`}</option>
                        {
                            listCategory.map(item => (
                                <option value={item.slug} key={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select onChange={(e) => setBrand(e.target.value)} value={brand} className="min-w-[200px] h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Thương hiệu ---]`}</option>
                        {
                            listBrand.map(item => (
                                <option value={item.slug} key={item.id}>{item.name}</option>
                            ))
                        }
                    </select>
                    <select value={size} onChange={(e) => setSize(e.target.value)} className="min-w-[200px] h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Size ---]`}</option>
                        {
                            sizes.map(item => (
                                <option value={item} key={item}>{item}</option>
                            ))
                        }

                    </select>
                    <select value={color} onChange={(e) => setColor(e.target.value)} className="min-w-[200px] h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Màu sắc ---]`}</option>
                        {
                            colorsOptions.map(item => (
                                <option value={item.value} key={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
                    <select value={price} onChange={(e) => setPrice(e.target.value)} className="min-w-[200px] h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Giá tiền ---]`}</option>
                        <option value="0to500000">Dưới 500 nghìn</option>
                        <option value="500000to1000000">500 nghìn đến 1 triệu</option>
                        <option value="1000000to3000000">1 triệu đến 3 triệu</option>
                        <option value="3000000to5000000">3 triệu đến 5 triệu</option>
                        <option value="5000000to10000000">5 triệu đến 10 triệu</option>
                        <option value="10000000to15000000">10 triệu đến 15 triệu</option>
                        <option value="15000000to20000000">15 triệu đến 20 triệu</option>
                        <option value="25000000to30000000">20 triệu đến 30 triệu</option>
                        <option value="30000000to10000000000">Trên 30 triệu</option>
                    </select>
                    <select value={order} onChange={(e) => setOrder(e.target.value)} className="min-w-[200px] mt-5 lg:mt-0 h-[35px] font-[600] px-[0.5rem] mr-5 rounded-md border border-solid border-gray-600 focus:border-black">
                        <option value="">{`[--- Sắp xếp ---]`}</option>
                        <option value="date:desc">Ngày mới nhất</option>
                        <option value="date:asc">Ngày cũ nhất</option>
                        <option value="price:desc">Giá mắc nhất</option>
                        <option value="price:asc">Giá rẻ nhất</option>
                        <option value="name:asc">{`Tên từ A -> Z`}</option>
                        <option value="name:desc">{`Tên từ Z -> A`}</option>
                        <option value="sale:desc">Khuyến mãi nhiều nhất</option>
                        <option value="sale:asc">Khuyến mãi ít nhất</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-[2.4rem] px-[60px] lg:px-[1.5rem] mt-5">
                {
                    data.map(item => (
                        <div className="w-full" key={item.id}>
                            <ProductCard product={item} />
                        </div>
                    ))
                }
            </div>
            <div className="mt-5 px-[60px]">
                <Pagination links={links} onSetList={setData} perPage={12}  />
            </div>
        </div>
    )
}

export default Search