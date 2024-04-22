
import classNames from "classnames/bind"
import styles from './ButtonScrollTop.module.scss'
import Scroll from 'react-scroll'

import { AiOutlineArrowUp } from 'react-icons/ai'
import { useEffect, useState } from "react"

const cx = classNames.bind(styles)

function ButtonScrollTop() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 180)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        Scroll.animateScroll.scrollToTop()
    }

    return (
        <button 
        onClick={() => handleScrollToTop()}
        className={`${cx("button", {"show": show})} bg-main-light-text-color inline-flex justify-center items-center z-[200]`}>
            <AiOutlineArrowUp className="text-main-text-color text-[2.5rem]" />
        </button>
    )
}

export default ButtonScrollTop