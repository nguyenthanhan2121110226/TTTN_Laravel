import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-4 lg:grid-cols-2 gap-[2.4rem]">
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
            <div className="shadow-md">
                <Skeleton height={300} borderRadius={10} highlightColor="#ffffff" baseColor="#eeeeee" duration={0.5} />
            </div>
        </div>
    )
}

export default ProductGridSkeleton