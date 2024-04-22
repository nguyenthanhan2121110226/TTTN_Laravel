import { Fragment, useEffect, useRef, useState } from "react"
import { FaTimes } from 'react-icons/fa'
import classNames from "classnames/bind"
import styles from './Review.module.scss'
import { axiosDefault } from "~/utils/axios"
import { toast } from "react-toastify"

const cx = classNames.bind(styles)

function Form({ onReset = () => {} ,replyItem, onSetReply, productId }) {
    const [width, setWidth] = useState()
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [star, setStar] = useState(5)
    const badgeRef = useRef()

    useEffect(() => {
        onSetReply(replyItem)
    }, [replyItem])

    useEffect(() => {
        if (badgeRef.current) {
            const newWidth = badgeRef.current?.getBoundingClientRect()
            setWidth(newWidth.width)
        } else {
            setWidth(0)
        }
    }, [replyItem])

    const handleValidate = () => {
        let flag = true
        if(fullname.length < 5){
            toast.error("Họ tên phải lớn hơn 5 ký tự", {
                theme: "dark",
                position: "top-center"
            })
            flag = false
        }
        if(email.length < 5){
            toast.error("Email phải lớn hơn 5 ký tự", {
                theme: "dark",
                position: "top-center"
            })
            flag = false
        }
        if(message.length < 5){
            toast.error("Nội dung phải lớn hơn 5 ký tự", {
                theme: "dark",
                position: "top-center"
            })
            flag = false
        }
        return flag
    }

    const handleAddMessage = (e) => {
        e.preventDefault()
        if(!handleValidate()) return
        const data = {
            productId: productId,
            fullname: fullname,
            email: email,
            message: message,
            stars: replyItem ? null : star,
            parentId: replyItem ? replyItem.id : null
        }

        axiosDefault.post("review/create", data)
        .then(() => {
            setFullname("")
            setEmail("")
            setMessage("")
            setStar(5)
            toast.success("Thêm đánh giá thành công!", {
                theme: "dark",
                position: "top-center"
            })
            onReset()
        })
        .catch(() => {
            toast.error("Thêm đánh giá thất bại!", {
                theme: "dark",
                position: "top-center"
            })
        })
    }

    return (
        <Fragment>
            <div className="flex items-center my-[3rem]">
                <h1 className="font-[600] text-[2rem] capitalize">Vui lòng điền đánh giá của bạn ở đây:</h1>
                <div className="ml-10">
                    <div className="rating rating-lg">
                        <input type="radio" value={1} onChange={e => setStar(e.target.value)} name="rating-8" className={`${cx("star-form")} mask mask-star-2 bg-main-text-color`} checked={1 == star} />
                        <input type="radio" value={2} onChange={e => setStar(e.target.value)} name="rating-8" className={`${cx("star-form")} mask mask-star-2 bg-main-text-color`} checked={2 == star} />
                        <input type="radio" value={3} onChange={e => setStar(e.target.value)} name="rating-8" className={`${cx("star-form")} mask mask-star-2 bg-main-text-color`} checked={3 == star} />
                        <input type="radio" value={4} onChange={e => setStar(e.target.value)} name="rating-8" className={`${cx("star-form")} mask mask-star-2 bg-main-text-color`} checked={4 == star} />
                        <input type="radio" value={5} onChange={e => setStar(e.target.value)} name="rating-8" className={`${cx("star-form")} mask mask-star-2 bg-main-text-color`} checked={5 == star} />
                    </div>
                </div>
            </div>
            <form onSubmit={handleAddMessage} className="grid grid-cols-2 gap-[2.4rem]">
                <div className="w-full lg:col-span-2">
                    <input
                        type="text"
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                        className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-second-dark-bg-color text-main-light-bg-color font-[600]"
                        placeholder="Nhập họ tên..."
                    />
                </div>
                <div className="w-full lg:col-span-2">
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-second-dark-bg-color text-main-light-bg-color font-[600]"
                        placeholder="Nhập email..."

                    />
                </div>
                <div className="col-span-2 relative">
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Nhập nội dung"
                        style={{ textIndent: width ? width + 10 + "px" : "0px" }}
                        className="bg-second-dark-bg-color p-[1rem]  caret-main-text-color rounded-2xl w-full text-main-light-bg-color font-[600]" rows="5">
                    </textarea>
                    {
                        replyItem && (
                            <span
                                ref={badgeRef}
                                className="absolute select-none -translate-y-[20%] top-[1rem] left-[1rem] z-10 px-[1rem] py-[0.5rem] text-main-dark-bg-color flex items-center bg-main-dark-text-color rounded-2xl">
                                {replyItem.fullname}
                                <FaTimes className="text-[1.5rem] ml-3" onClick={() => onSetReply(null)} />
                            </span>
                        )
                    }

                </div>
                <div className="w-full">
                    <button type="submit" className="btn button-dark-theme-important px-[2rem] py-[1rem] text-[2rem] whitespace-nowrap bg-main-dark-text-color">Gửi đánh giá</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Form