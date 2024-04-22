

import { Link } from 'react-router-dom'
import { BANNER } from '~/assets/images'
import Image from '~/components/Image'
import { routes } from '~/config'

function Banner() {
  return (
    <div to="" className='block w-full relative'>
      <Image src={BANNER} className="object-cover lg:h-[150px] " />
      <div className='absolute left-0 top-0 w-full h-full bg-[#00000090]'>
        <div className='absolute right-[5%] w-[40%] lg:w-[75%] top-1/2 -translate-y-1/2'>
          <h2 className='text-center uppercase text-[2rem] lg:text-[1.5rem] font-[600]'>Mã giảm giá hằng tháng! Giày nhập khẩu chính hãng!
            Còn chần chờ gì nữa! Hãy nhanh tay đặt hàng!
          </h2>
          <div className='flex justify-center mt-8 lg:mt-4'>
            <Link to={routes.products} className='btn button-dark-theme p-[1.5rem] lg:p-[0.7rem] lg:text-[1.5rem] text-[2rem] '>Khám Phá</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner