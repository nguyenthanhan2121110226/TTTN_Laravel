
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function FooterThirdCol() {
    return (
        <Fragment>
            <h1 className='text-[2rem] font-[600] text-second-dark-text-color uppercase md:text-center'>
                Thương hiệu
            </h1>
            <div className='mt-5 uppercase'>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>GUUCI</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>ADIDAS</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>NIKE</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>BALENCIAGA</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>JORDAN</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>PUMA</Link>
                <Link to="/" className='text-main-dark-text-color block mt-5 hover:text-second-dark-text-color transition-colors'>CHANEL</Link>

            </div>
        </Fragment>
    )
}

export default FooterThirdCol