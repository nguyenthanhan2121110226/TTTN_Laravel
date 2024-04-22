

import  { Fragment } from 'react'
import { Link } from 'react-router-dom'

function FooterSecondCol() {
  return (
    <Fragment>
        <h1 className='text-[2rem] font-[600] text-second-dark-text-color uppercase md:text-center'>
            Cửa hàng
        </h1>
        <div className='mt-5'>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Trang chủ</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Sản phẩm</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Tin tức</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Giới thiệu</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Liên hệ</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Chính sách bảo hành</Link>
            <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>Hướng dẫn chọn size</Link>

        </div>
    </Fragment>
  )
}

export default FooterSecondCol