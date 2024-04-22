import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Stars from "~/components/Stars"
import { axiosDefault } from "~/utils/axios"


const handleTotalPercent = (num, total) => {
    return Math.round(num * 100 / total) ?? 0
}


function Statistics({stars = 5, productId}) {

    const [data, setData] = useState(null)

    useEffect(() => {
        axiosDefault.get(`review/get-sum-stars/${productId}`)
        .then((res) => {
            setData(res.data)
        })
    }, [])

    return data && (
        <Fragment>
            <h1 className="font-[600] text-[2rem] capitalize">Các đánh giá</h1>
            <div className="flex items-center justify-between">
                <Stars num={stars} />
                <span className="text-[2rem] font-[600]">{stars}/5</span>
            </div>
            <div className="w-full">
                <div className="flex items-center">
                    <span className="text-[1.5rem] font-[600] mr-5 whitespace-nowrap">5 sao</span>
                    <progress className="progress block h-[1rem] progress-warning flex-1" value={handleTotalPercent(data.five, data.total)} max={100} />
                </div>
                <div className="flex items-center">
                    <span className="text-[1.5rem] font-[600] mr-5 whitespace-nowrap">4 sao</span>
                    <progress className="progress block h-[1rem] progress-warning flex-1" value={handleTotalPercent(data.four, data.total)} max={100} />
                </div>
                <div className="flex items-center">
                    <span className="text-[1.5rem] font-[600] mr-5 whitespace-nowrap">3 sao</span>
                    <progress className="progress block h-[1rem] progress-warning flex-1" value={handleTotalPercent(data.three, data.total)} max={100} />
                </div>
                <div className="flex items-center">
                    <span className="text-[1.5rem] font-[600] mr-5 whitespace-nowrap">2 sao</span>
                    <progress className="progress block h-[1rem] progress-warning flex-1" value={handleTotalPercent(data.two, data.total)} max={100} />
                </div>
                <div className="flex items-center">
                    <span className="text-[1.5rem] font-[600] mr-5 whitespace-nowrap">1 sao</span>
                    <progress className="progress block h-[1rem] progress-warning flex-1" value={handleTotalPercent(data.one, data.total)} max={100} />
                </div>
            </div>
            <Link to="/" className="italic text-[1.3rem] hover:font-[600]">Chúng tôi tính sao như thế nào?</Link>
        </Fragment>
    )
}

export default Statistics