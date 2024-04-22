import { Fragment, useCallback, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import BreakeCrumb from "~/components/BreakeCrumb"
import { endpoints, routes } from "~/config";
import { axiosDefault } from "~/utils/axios";
import ProductGrid from "./ProductGrid";
import Sidebar from "./Sidebar"



function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [showSideBar, setShowSizeBar] = useState(false)
    const category = searchParams.get("category")
    const size = searchParams.get("size")
    const color = searchParams.get("color")
    const price = searchParams.get("price")
    const sortBy = searchParams.get("sortBy")
    const brand = searchParams.get("brand")
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        getAll()
    }, [category, size, color, price, sortBy, brand])


    const getAll = () => {
        const param = {
            limit: 12,
        }

        if (sortBy) {
            param.sortBy = sortBy
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

        setLoading(true)

        axiosDefault.get("/product", {
            params: param
        })
            .then((res) => {
                setData(res.data)
            })
            .catch(() => {
                throw new Error("get product fail")
            })
            .finally(() => setLoading(false))
    }

    const breakeCrums = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.products,
                name: "Sản phẩm"
            },
        ]
    }, [])

    const handleToggleSidebar = (status) => {
        if (window.innerWidth > endpoints.lg) return
        setShowSizeBar(status)
    }


    return (
        <div className="products mb-[6rem]">
            <div className="mb-[2.4rem]">
                <BreakeCrumb urls={breakeCrums} />
            </div>
            <div className="grid grid-cols-5 lg:grid-cols-4 gap-[2.4rem] px-[6rem] md:px-[1.5rem]">
                <Fragment>
                    <div onClick={() => handleToggleSidebar(false)} className={`xl:hidden ${showSideBar ? "lg:block" : "lg:hidden"} lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-screen z-[100] bg-[#00000090]`} />
                    <div className={`w-full lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:overflow-y-auto lg:w-[300px] lg:bg-white lg:z-[101] xl:block ${showSideBar ? "lg:block" : "lg:hidden"}`}>
                        <Sidebar
                            searchParams={searchParams}
                            setSearchParams={setSearchParams}
                        />
                    </div>
                </Fragment>
                <div className="col-span-4">
                    <ProductGrid
                        loading={loading}
                        data={data}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        onSidebar={handleToggleSidebar}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products