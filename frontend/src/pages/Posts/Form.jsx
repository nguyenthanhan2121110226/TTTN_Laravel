import { Fragment, useEffect, useRef, useState } from "react"
import { FaTimes } from 'react-icons/fa'
import { axiosDefault } from "~/utils/axios"
import { toast } from "react-toastify"


function Form({ postId, replyItem, onSetReply, onReset = () => { } }) {
    const [width, setWidth] = useState()
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
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
        if (fullname.length < 5) {
            toast.error("Họ tên phải lớn hơn 5 ký tự", {
                theme: "dark",
                position: "top-center"
            })
            flag = false
        }
        if (email.length < 5) {
            toast.error("Email phải lớn hơn 5 ký tự", {
                theme: "dark",
                position: "top-center"
            })
            flag = false
        }
        if (message.length < 5) {
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
        if (!handleValidate()) return
        const data = {
            postId: postId,
            fullname: fullname,
            email: email,
            message: message,
            parentId: replyItem ? replyItem.id : null
        }

        axiosDefault.post("comment/create", data)
            .then(() => {
                setFullname("")
                setEmail("")
                setMessage("")
                toast.success("Thêm bình luận thành công!", {
                    theme: "dark",
                    position: "top-center"
                })
                onReset()
            })
            .catch(() => {
                toast.error("Thêm bình luận thất bại!", {
                    theme: "dark",
                    position: "top-center"
                })
            })
    }

    return (
        <Fragment>
            <div className="flex items-center my-[3rem]">
                <h1 className="font-[600] text-[2rem] capitalize">Vui lòng nhập bình luận của bạn ở đây:</h1>
            </div>
            <form onSubmit={handleAddMessage} className="grid grid-cols-2 gap-[2.4rem]">
                <div className="w-full lg:col-span-2">
                    <input
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                        type="text"
                        className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-main-light-bg-color  font-[600]"
                        placeholder="Nhập họ tên..."
                    />
                </div>
                <div className="w-full lg:col-span-2">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-main-light-bg-color font-[600]"
                        placeholder="Nhập email..."

                    />
                </div>
                <div className="col-span-2 relative">
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Nhập nội dung"
                        style={{ textIndent: width ? width + 10 + "px" : "0px" }}
                        className="bg-main-light-bg-color p-[1rem]  caret-main-text-color rounded-2xl w-full font-[600]" rows="5">
                    </textarea>
                    {
                        replyItem && (
                            <span
                                ref={badgeRef}
                                className="absolute select-none -translate-y-[20%] top-[1rem] left-[1rem] z-10 px-[1rem] py-[0.5rem] text-second-dark-text-color flex items-center bg-second-light-text-color rounded-2xl">
                                {replyItem.fullname}
                                <FaTimes className="text-[1.5rem] ml-3" onClick={() => onSetReply(null)} />
                            </span>
                        )
                    }
                </div>
                <div className="w-full">
                    <button type="submit" className="btn button-light-theme-important px-[2rem] py-[1rem] text-[2rem]">Gửi đánh giá</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Form