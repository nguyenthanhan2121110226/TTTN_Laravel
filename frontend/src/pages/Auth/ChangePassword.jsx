import { Fragment, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { RiLockPasswordLine } from 'react-icons/ri'
import { BiShow, BiHide } from 'react-icons/bi'
import { routes } from "~/config"
import Spin from "~/layouts/LoadingPage/Spin"
import { axiosDefault } from "~/utils/axios"
import LoadingPage from "~/layouts/LoadingPage"
import { toast } from "react-toastify"



function ChangePassword() {

    const { token } = useParams()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPw, setSowPw] = useState("password")
    const [showCfPw, setSowCfPw] = useState("password")
    const [loading, setLoading] = useState(true)
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        axiosDefault.post("auth/check-token-password", { token: token })
            .then(() => {
                setSuccess(true)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setSuccess(false)
                navigate(routes.forgotPassword)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password <= 8){
            toast.error("Mật khẩu không được dưới 8 ký tự", {
                position: "top-center",
                theme: "dark"
            })
            return
        }
        if(confirmPassword !== password){
            toast.error("Mật khẩu nhập lại không đúng", {
                position: "top-center",
                theme: "dark"
            })
            return
        }

        const data = {
            password: password,
            password_confirmation: confirmPassword,
            token: token
        }

        setLoadingSubmit(true)

        axiosDefault.post("auth/update-password", data)
        .then(() => {
            toast.success("Thay đổi mật khẩu thành công", {
                position: "top-center",
                theme: "dark"
            })
            navigate(routes.signIn)
        })
        .catch(() => {
            toast.error("Thay đổi mật khẩu thất bại", {
                position: "top-center",
                theme: "dark"
            })
        })
        .finally(() => {
            setLoadingSubmit(false)
        })
    }

    return !loading ? (
        <Fragment>
            {
                success && (
                    <div className="w-screen h-[calc(100vh_-_90px)] justify-center items-center flex">
                        <div className="w-[400px] sm:w-[90%] p-[2.4rem] rounded-xl shadow-md min-h-[200px] bg-[#00000050]">
                            <h1 className="uppercase text-center text-[2rem] font-[600]">Thay đổi mật khẩu</h1>
                            <form onSubmit={handleSubmit} className="mt-7">
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
                            <Link to={routes.signIn} className="text-main-text-color relative z-[2] transition-all font-[400] hover:font-[600] mt-8 hover:underline text-[1.5rem] block text-center">Quay lại trang đăng nhập!</Link>
                        </div>
                        {
                            loadingSubmit && (<Spin />)
                        }
                    </div>
                )
            }

        </Fragment>
    ) : (
        <LoadingPage />
    )
}

export default ChangePassword