import { Fragment } from "react"
import { Link } from "react-router-dom"




function FooterLastCol() {
    return (
        <Fragment>
            <h1 className='text-[2rem] font-[600] text-second-dark-text-color uppercase md:text-center'>
                Thẻ
            </h1>
            <div className="w-full">
                <Link to="" className={`mt-3 mr-2 inline-block px-[1rem] py-[0.3rem]
                text-[1.3rem] rounded-2xl font-[600] bg-main-dark-text-color
                 text-main-light-text-color`}>Giày 2022</Link>
                <Link to="" className={`mt-3 mr-2 inline-block px-[1rem] py-[0.3rem]
                text-[1.3rem] rounded-2xl font-[600] bg-main-dark-text-color
                 text-main-light-text-color`}>Giày đẹp siêu cấp</Link>
                <Link to="" className={`mt-3 mr-2 inline-block px-[1rem] py-[0.3rem]
                text-[1.3rem] rounded-2xl font-[600] bg-main-dark-text-color
                 text-main-light-text-color`}>Giày thương hiệu</Link>
                <Link to="" className={`mt-3 mr-2 inline-block px-[1rem] py-[0.3rem]
                text-[1.3rem] rounded-2xl font-[600] bg-main-dark-text-color
                 text-main-light-text-color`}>Giàu rẻ nhất</Link>
                <Link to="" className={`mt-3 mr-2 inline-block px-[1rem] py-[0.3rem]
                text-[1.3rem] rounded-2xl font-[600] bg-main-dark-text-color
                 text-main-light-text-color`}>Giày cổ điển</Link>
            </div>
            <div className="mt-14">
                <div className="flex items-center">
                    <input type="text" className="h-[40px] flex-1 px-2 font-[600]" placeholder="Nhập email của bạn..." />
                    <button className="px-[1rem] h-[40px] bg-black text-white font-[600] text-[1.5rem] whitespace-nowrap">ĐĂNG KÝ</button>
                </div>
            </div>
        </Fragment>
    )
}

export default FooterLastCol