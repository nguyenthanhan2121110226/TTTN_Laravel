import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import ProductCard from "~/components/ProductCard"


function ProductGrid({ data = [], loading = false }) {
  return !loading ? (
    <div className={`grid grid-cols-4 lg:grid-cols-2 gap-[24px] md:gap-[1.6rem]`}>
      {
        data.map(item => (
          <div className="w-full overflow-hidden" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))
      }
    </div>
  ) : (
    <div className={`grid grid-cols-4 lg:grid-cols-2 gap-[24px] md:gap-[1.6rem]`}>
      <div className="w-full">
        <Skeleton height={300} baseColor="#333333" highlightColor="#444444" className="shadow-md mt-5" />
      </div>
      <div className="w-full">
        <Skeleton height={300} baseColor="#333333" highlightColor="#444444" className="shadow-md mt-5" />
      </div>
      <div className="w-full">
        <Skeleton height={300} baseColor="#333333" highlightColor="#444444" className="shadow-md mt-5" />
      </div>
      <div className="w-full">
        <Skeleton height={300} baseColor="#333333" highlightColor="#444444" className="shadow-md mt-5" />
      </div>
    </div>
  )
}

export default ProductGrid