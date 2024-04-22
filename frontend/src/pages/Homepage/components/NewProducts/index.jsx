import { Fragment, useEffect, useState } from "react"
import ProductGrid from "~/components/ProductGrid"
import TitleSection from "~/components/TitleSection"
import { routes } from "~/config"
import { axiosDefault } from "~/utils/axios"

function NewProducts() {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axiosDefault.get("product", {
      params: {
        limit: 4,
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
      <TitleSection subTitle="Sản phẩm" title="mới nhất" to={routes.products + "?sortBy=date:desc"} />
      <div className="mt-8">
        <ProductGrid data={list} loading={loading} />
      </div>
    </Fragment>
  )
}

export default NewProducts