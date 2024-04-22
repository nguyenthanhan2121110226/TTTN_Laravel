import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Header.css'
import { LOGO } from '~/assets/images'
import Image from '~/components/Image'
import { routes as routesConfig } from '~/config'
import Sidebar from './Sidebar'
import UserItems from './UserItems'



function HeaderLayouts() {
    const themeMode = useSelector(state => state.theme.mode)
    const [shrink, setShrink] = useState(false)



    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 90)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])



    return (
        <Fragment>
            <header className={`text-txt-hp-color h-[90px] fixed left-0 top-0 right-0 w-full 
         flex items-center justify-between md:px-[1.5rem] px-[60px] header theme-${themeMode} ${shrink ? "shrink" : ""}`}>
                <Link to={"/"} className={`inline-block w-[100px] logo`}>
                    <Image src={LOGO} alt="logo.png" />
                </Link>
                <ul className='flex pointer-events-auto main__menu text-[1.5rem] lg:hidden'>
                    <li><NavLink className={({isActive}) => `header-navbar-item capitalize text-txt-hp-color main__menu--link ${isActive ? "is-active" : ""}`} to={routesConfig.home}>Trang chủ</NavLink></li>
                    <li><NavLink className={({isActive}) => `header-navbar-item capitalize text-txt-hp-color main__menu--link ${isActive ? "is-active" : ""}`} to={routesConfig.products}>Sản phẩm</NavLink></li>
                    <li><NavLink className={({isActive}) => `header-navbar-item capitalize text-txt-hp-color main__menu--link ${isActive ? "is-active" : ""}`} to={routesConfig.posts}>Tin tức</NavLink></li>
                    <li><NavLink className={({isActive}) => `header-navbar-item capitalize text-txt-hp-color main__menu--link ${isActive ? "is-active" : ""}`} to={routesConfig.about}>Giới thiệu</NavLink></li>
                    <li><NavLink className={({isActive}) => `header-navbar-item capitalize text-txt-hp-color main__menu--link ${isActive ? "is-active" : ""}`} to={routesConfig.contact}>Liên hệ</NavLink></li>
                </ul>
                <UserItems mode={themeMode}/>
            </header>
            <Sidebar />
        </Fragment>

    )
}

export default HeaderLayouts