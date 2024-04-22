import { useState } from "react"
import { toast } from "react-toastify"
import Spin from "~/layouts/LoadingPage/Spin"
import { axiosDefault } from "~/utils/axios"



function Form() {

    const [email, setEmail] = useState("")
    const [fullname, setFullName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)


    const handleValidate = () => {

        if (fullname.fullname < 5) {
            toast.error("Họ tên phải lớn hơn 5 ký tự", {
                position: "top-center",
                theme: "dark"
            })
            return false
        }
        if (email.length === 0) {
            toast.error("Email không được để trống", {
                position: "top-center",
                theme: "dark"
            })
            return false
        }
        if (subject.length < 10) {
            toast.error("Tiêu đề phải lớn hơn 10 ký tự", {
                position: "top-center",
                theme: "dark"
            })
            return false
        }
        if (message.length < 10) {
            toast.error("Nội dung phải lớn hơn 10 ký tự", {
                position: "top-center",
                theme: "dark"
            })
            return false
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!handleValidate()) return

        const data = {
            fullname: fullname,
            email: email,
            subject: subject,
            message: message,
            status: 2
        }
        setLoading(true)

        axiosDefault.post("contact/create", data)
            .then(() => {
                setEmail("")
                setFullName("")
                setMessage("")
                setSubject("")
                toast.success("Câu trả lời đã được ghi nhận! Chúng tôi sẽ phản hồi trong thời gian sớm nhất! Vui lòng để ý Email của bạn", {
                    theme: "dark",
                    position: "top-center"
                })
            })
            .catch(() => {
                toast.error("Gửi thất bại", {
                    theme: "dark",
                    position: "top-center"
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <form onSubmit={handleSubmit} className="text-[1.5rem] font-600 grid grid-cols-2 gap-[2.4rem]">
            <div className="w-full lg:col-span-2">
                <input type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-main-light-bg-color"
                    placeholder="Họ và tên"
                />
            </div>
            <div className="w-full lg:col-span-2">
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-main-light-bg-color"
                    placeholder="Email"
                />
            </div>
            <div className="w-full col-span-2">
                <input type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-[40px] rounded-2xl w-full px-[1rem] caret-main-text-color bg-main-light-bg-color"
                    placeholder="Tiêu đề"
                />
            </div>
            <div className="w-full col-span-2">
                <textarea
                    placeholder="Nội dung"
                    rows="5"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full rounded-2xl px-[1rem] caret-main-text-color bg-main-light-bg-color"
                />
            </div>
            <div className="w-full col-span-2 flex justify-center">
                {
                    loading ? (
                        <Spin />
                    ) : (
                        <button type="submit" className="btn button-light-theme-important px-[2rem] py-[1rem] text-[2rem]">Gửi</button>
                    )
                }
            </div>
        </form>
    )
}

export default Form