import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingPage from "~/layouts/LoadingPage"
import { axiosDefault } from "~/utils/axios"
import ProductCard from "./ProductCard"
import ProductCardMobile from "./ProductCard/Mobile"
import ProductInforTable from "./ProductInforTable"
import ProductSame from "./ProductSame"
import Review from "./Review"



function ProductDetail() {
  const { slug } = useParams()
  const [tab, setTab] = useState(0)
  const [data, setData] = useState(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {
    setLoading(true)
    axiosDefault.get(`product/show/${slug}`)
      .then((res) => {
        setData(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return !loading ? (
    !!data ? (
      <div className="product-detail relative">
        <div className="xl:h-[calc(100vh_-_90px)] xl:pt-[1.6rem] pb-[1.6rem] xl:px-[12rem] lg:px-[1.5rem] relative z-10">
          <ProductCard product={data} />
          <ProductCardMobile product={data} />
        </div>
        <section className="mt-[6rem] px-[2.4rem] relative z-20">
          <div className="flex items-center border-b-[2px] border-solid border-second-dark-bg-color w-full overflow-x-auto">
            <button
              onClick={() => setTab(0)}
              className={`btn btn-ghost h-auto hover:bg-main-dark-text-color hover:text-main-dark-bg-color
           px-[2rem] py-[1rem] rounded-xl uppercase font-[600] text-[1.3rem]
           ${tab === 0 ? "bg-main-dark-text-color text-main-dark-bg-color" : "bg-second-dark-bg-color text-main-dark-text-color"}
           `}>Thông tin sản phẩm</button>
            <button
              onClick={() => setTab(1)}
              className={`btn btn-ghost h-auto hover:bg-main-dark-text-color hover:text-main-dark-bg-color
           ml-[2.4rem] px-[2rem] py-[1rem] rounded-xl uppercase font-[600] text-[1.3rem]
           ${tab === 1 ? "bg-main-dark-text-color text-main-dark-bg-color" : "bg-second-dark-bg-color text-main-dark-text-color"}
           `}>Chi tiết sản phẩm</button>
            <button
              onClick={() => setTab(2)}
              className={`btn btn-ghost h-auto hover:bg-main-dark-text-color hover:text-main-dark-bg-color
           ml-[2.4rem] px-[2rem] py-[1rem] rounded-xl uppercase font-[600] text-[1.3rem]
           ${tab === 2 ? "bg-main-dark-text-color text-main-dark-bg-color" : "bg-second-dark-bg-color text-main-dark-text-color"}
           `}>Đánh giá sản phẩm</button>
            <button
              onClick={() => setTab(3)}
              className={`btn btn-ghost h-auto hover:bg-main-dark-text-color hover:text-main-dark-bg-color
           ml-[2.4rem] px-[2rem] py-[1rem] rounded-xl uppercase font-[600] text-[1.3rem]
           ${tab === 3 ? "bg-main-dark-text-color text-main-dark-bg-color" : "bg-second-dark-bg-color text-main-dark-text-color"}
           `}>Sản phẩm tương tự</button>
          </div>
        </section>
        <section className="mt-[6rem] mb-[12rem] px-[2.4rem] relative z-20">
          {
            tab === 0 && (
              <ProductInforTable product={data} />
            )
          }
          {
            tab === 1 && (
              <div className="leading-[1.2] text-[1.5rem]" dangerouslySetInnerHTML={{__html: data.detail}} />
            )
          }
          {
            tab === 2 && (
              <Review productId={data.id} stars={data.stars} />
            )
          }
          {
            tab === 3 && (
              <ProductSame brandSlug={data.brands.slug} productId={data.id} />
            )
          }
        </section>
      </div>
    ) : (
      <div className="h-[calc(100vh_-_90px)] pt-[1.6rem] pb-[1.6rem] px-[12rem] flex justify-center items-center">
        <p className="font-[600] text-[1.5rem]">Xin lỗi! không có sản phẩm này trong giỏ hàng</p>
      </div>
    )

  ) : (
    <LoadingPage />
  )
}

export default ProductDetail