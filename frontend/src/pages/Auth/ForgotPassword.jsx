import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiAtSign } from 'react-icons/fi'
import { routes } from "~/config"
import Spin from "~/layouts/LoadingPage/Spin"
import { toast } from "react-toastify"
import { axiosDefault } from "~/utils/axios"



function ForgotPassword() {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const validateEmail = (text) => {
        let check = true
        const emailRegexp = new RegExp(
            /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
        )
        if (!emailRegexp.test(text)) {
            if (!text || text.length === 0) {
                toast.error("Trường email không được để trống!", {
                    theme: "dark"
                })
            } else {
                toast.error("Trường email không đúng định dạng! vd: abcdef@gmail.com", {
                    theme: "dark"
                })
            }
            check = false
        }

        return check
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(email)) return
        setLoading(true)
        axiosDefault.post("auth/forgot-password", { email: email })
            .then(() => {
                toast.success("Vui lòng kiểm tra trong hộp thoại email để xác thực tài khoản!", {
                    theme: "dark",
                    position: "top-center"
                })
            })
            .catch((error) => {
                if (error.response.status === 400 && error.response.data.errCode === 1) {
                    toast.error("Không tìm thấy email trong hệ thống!", {
                        theme: "dark",
                        position: "top-center"
                    })
                } else {
                    toast.error("Không thành công!", {
                        theme: "dark",
                        position: "top-center"
                    })
                }
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <div className="w-screen h-[calc(100vh_-_90px)] justify-center items-center flex">
            <div className="w-[400px] sm:w-[90%] p-[2.4rem] rounded-xl shadow-md min-h-[200px] bg-[#00000050]">
                <h1 className="uppercase text-center text-[2rem] font-[600]">Quên mật khẩu</h1>
                <form onSubmit={handleSubmit} className="mt-7">
                    <label htmlFor="email">
                        <h1 className="text-[1.5rem] font-[600]">Email:</h1>
                        <div className="flex items-center">
                            <span className="w-[40px] h-[40px] bg-second-dark-bg-color flex justify-center items-center">
                                <FiAtSign />
                            </span>
                            <input type="text"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="flex-1 h-[40px] bg-main-light-text-color px-3 text-[1.5rem]"
                                placeholder="Nhập email..."
                                required
                            />
                        </div>
                    </label>
                    <div className="flex items-center justify-center mt-5">
                        <button type='submit' className='btn button-dark-theme-important py-[1rem] text-[1.5rem]'>Xác nhận</button>
                    </div>
                </form>
                <Link to={routes.signIn} className="text-main-text-color relative z-[2] transition-all font-[400] hover:font-[600] mt-8 hover:underline text-[1.5rem] block text-center">Quay lại trang đăng nhập!</Link>
            </div>
            {
                loading && (<Spin />)
            }
        </div>
    )
}

export default ForgotPassword