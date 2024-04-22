import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spin from '~/layouts/LoadingPage/Spin'
import { addProfileActions } from '~/redux/actions/profileActions'
import { axiosContent, axiosDefault } from '~/utils/axios'
import { validateSignIn } from '~/utils/handleValidateAuth'


function ModalChangePw({ onClose }) {
    const profile = useSelector(state => state.profile.data)
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isChange, setIsChange] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    const handleLogin = () => {
        if (!validateSignIn(profile.email, password)) return
        const data = {
            email: profile.email,
            password: password
        }
        setLoading(true)
        axiosDefault.post("auth/login", data)
            .then((res) => {
                toast.success("Đăng nhập thành công", {
                    position: "top-center",
                    theme: "dark"
                })
                const browser = {
                    token: res.access_token,
                    type: "df"
                }
                localStorage.setItem("auth", JSON.stringify(browser))
                dispatch(addProfileActions(res.user))
                setIsChange(true)
            })
            .catch(() => {
                toast.error("Tài khoản hoặc mật khẩu không đúng! Vui lòng nhập lại!", {
                    position: "top-center",
                    theme: "dark"
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleChange = () => {
        if (!validateSignIn(profile.email, newPassword)) return
        if (newPassword !== passwordConfirm) {
            toast.error("Nhập lại mật khẩu không đúng!", {
                position: "top-center",
                theme: "dark"
            })
            return
        }
        const data = {
            password: newPassword,
            password_confirmation: passwordConfirm
        }
        setLoading(true)
        axiosContent.post("auth/change-password", data)
            .then((res) => {
                const token = res.data.access_token.access_token
                const browser = {
                    token: token,
                    type: "df"
                }

                localStorage.setItem("auth", JSON.stringify(browser))

                dispatch(addProfileActions(res.data.user))
                toast.success("Thay đổi thành công", {
                    position: "top-center",
                    theme: "dark"
                })
                onClose()
            })
            .catch(() => {
                toast.error("Thay đổi không thành công", {
                    position: "top-center",
                    theme: "dark"
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const formTypePw = () => {
        return (
            <div className='p-[2.4rem]'>
                <div className='w-[70%] mx-auto'>
                    <input
                        placeholder='Nhập mật khẩu...'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2" />
                </div>
                <div className='mt-8 flex justify-center'>
                    <button onClick={() => handleLogin()} className='btn button-light-theme text-[1.5rem]'>Xác nhận</button>
                </div>
            </div>
        )
    }

    const formChangePassword = () => {
        return (
            <div className='p-[2.4rem]'>
                <div className='w-[70%] mx-auto'>
                    <input
                        placeholder='Nhập mật khẩu mới...'
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2" />
                    <input
                        placeholder='Nhập lại mật khẩu...'
                        type="password"
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value)}
                        className="h-[40px] w-full border-[1px] border-solid mt-5 border-[#cbcbcb] rounded-md px-2" />
                </div>
                <div className='mt-8 flex justify-center'>
                    <button onClick={() => handleChange()} className='btn button-light-theme text-[1.5rem]'>Xác nhận</button>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000090] z-[99] flex justify-center items-center">
            <div className="w-[450px] lg:w-[300px] rounded-md bg-white shadow-md">
                <div className="text-center relative uppercase text-[2.4rem] lg:text-[2rem] font-[600] py-[1.2rem] border-b-[1px] border-solid border-[#ededed]">
                    {isChange ? "Thay đổi mật khẩu" : "Nhập lại mật khẩu"}
                    <button
                        onClick={() => onClose()}
                        className="absolute text-[2rem] lg:text-[1.5rem] right-[1.6rem] top-1/2 -translate-y-1/2 active:-translate-y-1/2 active:scale-[1.2] transition-transform">
                        <FaTimes />
                    </button>
                </div>
                {
                    !isChange ? formTypePw() : formChangePassword()
                }
                {
                    loading && <Spin />
                }
            </div>
        </div>
    )
}

export default ModalChangePw