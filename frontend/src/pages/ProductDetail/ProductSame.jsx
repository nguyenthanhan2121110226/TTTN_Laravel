import { useEffect, useState } from "react"
import ProductCard from "~/components/ProductCard"
import { axiosDefault } from "~/utils/axios"



function ProductSame({ brandSlug, productId }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosDefault.get("product", {
            params: {
                limit: 4,
                brand: brandSlug,
                diffrent: productId,
                sortBy: "date:desc"
            }
        })
            .then((res) => {
                setProducts(res.data.data)
            })
    }, [])

    return products.length > 0 ? (
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-[2.4rem]">
            {
                products.map(product => (
                    <div className="w-full" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))
            }
        </div>
    ) : (
        <p className="p-5 text-[1.5rem] font-[600]">Không có sản phẩm tương tự nào!</p>
    )
}

export default ProductSame