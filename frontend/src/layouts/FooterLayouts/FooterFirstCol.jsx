import { Fragment } from "react"
import { Link } from "react-router-dom"
import classNames from 'classnames/bind'
import styles from './FooterLayouts.module.scss'

import { AiFillPhone, AiFillLinkedin } from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

import { LOGO } from "~/assets/images"
import Image from "~/components/Image"


const cx = classNames.bind(styles)



function FooterFirstCol() {
    return (
        <Fragment>
            <div className="w-[60%]">
                <Image src={LOGO} className="brightness-0 invert-[1]" />
            </div>
            <ul className="w-full text-main-dark-text-color text-[1.6rem]">
                <li className="flex items-center">
                    <AiFillPhone className='text-[2rem]' />
                    <span className='ml-3'>+84 383608951</span>
                </li>
                <li className="flex items-center mt-5">
                    <IoMdMail className='text-[2rem]' />
                    <span className='ml-3'>ntt.shop.3006@gmail.com</span>
                </li>
                <li className="flex items-center mt-5">
                    <MdLocationOn className='text-[2rem]' />
                    <span className='ml-3'>Quận 9, Thành phố Hồ Chí Minh</span>
                </li>
            </ul>
            <div className='flex items-center mt-10'>
                <Link to="" className={`${cx("social-item")} btn btn-square button-dark-theme`}>
                    <FaFacebookF className='text-[1.5rem]' />
                </Link>
                <Link to="" className={`${cx("social-item")} btn btn-square button-dark-theme`}>
                    <SiZalo className='text-[1.5rem]' />
                </Link>
                <Link to="" className={`${cx("social-item")} btn btn-square button-dark-theme`}>
                    <FaTwitter className='text-[1.5rem]' />
                </Link>
                <Link to="" className={`${cx("social-item")} btn btn-square button-dark-theme`}>
                    <AiFillLinkedin className='text-[1.5rem]' />
                </Link>
            </div>
        </Fragment>
    )
}

export default FooterFirstCol