import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

import { FiAtSign } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiShow, BiHide } from 'react-icons/bi'
import { routes } from '~/config'
import { validateSignUp } from '~/utils/handleValidateAuth'
import { axiosDefault } from '~/utils/axios'
import { toast } from 'react-toastify'

function SignUp() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPw, setSowPw] = useState("password")
    const [showCfPw, setSowCfPw] = useState("password")
    const location = useLocation()

    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateSignUp(fullname, email, password, confirmPassword)) return
        const data = {
            fullname, email, password,
            password_confirmation: confirmPassword
        }
        axiosDefault.post("auth/register", data)
            .then(() => {
                toast.success("Bạn đã đăng ký thành công! Vui lòng đăng nhập", {
                    theme: "dark",
                    position: "top-center"
                })
                navigate("/dang-nhap", {
                    state: location.pathname
                })

            })
            .catch((error) => {
                if (error.response.status === 400 && error.response.data.email) {
                    toast.error("Email đã tồn tại! Vui lòng nhập email khác!", {
                        theme: "dark",
                        position: "top-center"
                    })
                } else {
                    toast.error("Bạn đã đăng ký không thành công! Vui lòng thử lại", {
                        theme: "dark",
                        position: "top-center"
                    })
                }

            })
    }

    if (localStorage.getItem("auth")) {
        return (
          <div className="w-screen h-screen overflow-hidden z-30">
            <Navigate to={-1} />
          </div>
        )
      }


    return (
        <div className="w-screen h-[calc(100vh_-_90px)] justify-center items-center flex">
            <div className="w-[400px] sm:w-[90%] p-[2.4rem] rounded-xl shadow-md min-h-[200px] bg-[#00000050]">
                <h1 className="uppercase text-center text-[2rem] font-[600]">đăng ký</h1>
                <form onSubmit={handleSubmit} className="mt-7">
                    <label htmlFor="name">
                        <h1 className="text-[1.5rem] font-[600]">Họ và tên:</h1>
                        <div className="flex items-center">
                            <span className="w-[40px] h-[40px] bg-second-dark-bg-color flex justify-center items-center">
                                <AiOutlineUser />
                            </span>
                            <input type="text"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)}
                                id="name"
                                className="flex-1 h-[40px] bg-main-light-text-color px-3 text-[1.5rem]"
                                placeholder="Nhập họ và tên..."
                            />
                        </div>
                    </label>
                    <label htmlFor="email">
                        <h1 className="text-[1.5rem] mt-5 font-[600]">Email:</h1>
                        <div className="flex items-center">
                            <span className="w-[40px] h-[40px] bg-second-dark-bg-color flex justify-center items-center">
                                <FiAtSign />
                            </span>
                            <input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                className="flex-1 h-[40px] bg-main-light-text-color px-3 text-[1.5rem]"
                                placeholder="Nhập email..."
                            />
                        </div>
                    </label>
                    <label htmlFor="password">
                        <h1 className="text-[1.5rem] font-[600] mt-5">Mật khẩu:</h1>
                        <div className="flex items-center">
                            <span className="w-[40px] h-[40px] bg-second-dark-bg-color flex justify-center items-center">
                                <RiLockPasswordLine />
                            </span>
                            <input
                                type={showPw}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password"
                                className="h-[40px] flex-1 bg-main-light-text-color w-full px-3 text-[1.5rem]"
                                placeholder="Nhập mật khẩu..."
                            />
                            <span
                                onClick={() => setSowPw(showPw === "password" ? "type" : "password")}
                                className="w-[40px] h-[40px] bg-second-dark-bg-color select-none cursor-pointer flex justify-center items-center">
                                {showPw === "password" ? <BiShow /> : <BiHide />}

                            </span>
                        </div>
                    </label>
                    <label htmlFor="confirmpassword">
                        <h1 className="text-[1.5rem] font-[600] mt-5">Nhập lại mật khẩu:</h1>
                        <div className="flex items-center">
                            <span className="w-[40px] h-[40px] bg-second-dark-bg-color flex justify-center items-center">
                                <RiLockPasswordLine />
                            </span>
                            <input
                                type={showCfPw}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                id="confirmpassword"
                                className="flex-1 h-[40px] bg-main-light-text-color px-3 text-[1.5rem]"
                                placeholder="Nhập lại mật khẩu..."
                            />
                            <span
                                onClick={() => setSowCfPw(showCfPw === "password" ? "type" : "password")}
                                className="w-[40px] h-[40px] bg-second-dark-bg-color select-none cursor-pointer flex justify-center items-center">
                                {showCfPw === "password" ? <BiShow /> : <BiHide />}

                            </span>
                        </div>
                    </label>
                    <div className="flex items-center justify-center mt-5">
                        <button type='submit' className='btn button-dark-theme-important py-[1rem] text-[1.5rem]'>Xác nhận</button>
                    </div>
                </form>
                <Link to={routes.signIn} className="text-main-text-color transition-all font-[400] hover:font-[600] mt-5 hover:underline text-[1.5rem] block text-center">Vui lòng nhấn vào đây để đăng nhập!</Link>
            </div>
        </div>
    )
}

export default SignUp