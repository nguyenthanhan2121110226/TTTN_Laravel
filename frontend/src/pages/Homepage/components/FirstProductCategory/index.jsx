import { Fragment, useEffect, useState } from "react"
import ProductGrid from "~/components/ProductGrid"
import TitleSection from "~/components/TitleSection"
import { axiosDefault } from '~/utils/axios'
import { params, routes } from '~/config'

function FirstProductCategory() {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axiosDefault.get("product", {
            params: {
                limit: 4,
                category: params.homepage.category1.slug,
                sortBy: "date:desc"
            }
        })
            .then((res) => {
                const data = res.data.data
                setList(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <Fragment>
            <TitleSection subTitle="Sản phẩm" title={params.homepage.category1.name} to={routes.products + "?category=" + params.homepage.category1.slug} />
            <div className="mt-8">
                <ProductGrid data={list} loading={loading} />
            </div>
        </Fragment>
    )
}

export default FirstProductCategory