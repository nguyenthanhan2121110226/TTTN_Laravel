import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login';

import { FiAtSign } from 'react-icons/fi'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { BiShow, BiHide } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '~/config'
import { axiosDefault } from '~/utils/axios'
import { toast } from 'react-toastify'
import { validateSignIn } from '~/utils/handleValidateAuth'
import { addProfileActions } from '~/redux/actions/profileActions'
import Spin from '~/layouts/LoadingPage/Spin';



function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState("password")
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateSignIn(email, password)) return
    const data = {
      email, password
    }
    setLoading(true)
    axiosDefault.post("auth/login", data)
      .then((res) => {

        if (!res.access_token) {
          toast.error("Tài khoản này đã bị vô hiệu hóa! Vui lòng liên hệ với chúng tôi để khôi phục!", {
            position: "top-center",
            theme: "dark"
          })
          return
        }

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
        if (location.state === routes.signUp) {
          navigate(routes.home)
        } else {
          navigate(-1)
        }
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

  const responseFacebook = (response) => {
    if (!response) return

    const data = {
      fullname: response.name,
      email: response.email,
      id: response.id,
      type: "fb"
    }
    setLoading(true)
    axiosDefault.post("auth/login-social", data)
      .then((res) => {

        const browser = {
          token: response.accessToken,
          type: "fb"
        }
        localStorage.setItem("auth", JSON.stringify(browser))

        toast.success("Đăng nhập thành công", {
          position: "top-center",
          theme: "dark"
        })

        dispatch(addProfileActions(res.data))

        if (location.state === routes.signUp) {
          navigate(routes.home)
        } else {
          navigate(-1)
        }

      })
      .catch((error) => {
        if (error.response.status === 400 && error.response.data.email) {
          toast.error("Email đã tồn tại! Vui lòng chọn email khác!", {
            theme: "dark",
            position: "top-center"
          })
        } else {
          toast.error("Bạn đã đăng nhập không thành công! Vui lòng thử lại", {
            theme: "dark",
            position: "top-center"
          })
        }
      })
      .finally(() => {
        setLoading(false)
      })

  }

  const responseGoogle = (response) => {
    if (!response) return


    const data = {
      fullname: response.profileObj.name,
      email: response.profileObj.email,
      id: response.profileObj.googleId,
      type: "gg"
    }
    setLoading(true)
    axiosDefault.post("auth/login-social", data)
      .then((res) => {

        const browser = {
          token: response.accessToken,
          type: "gg"
        }
        localStorage.setItem("auth", JSON.stringify(browser))

        toast.success("Đăng nhập thành công", {
          position: "top-center",
          theme: "dark"
        })
        dispatch(addProfileActions(res.data))
        if (location.state === routes.signUp) {
          navigate(routes.home)
        } else if (location.state === null) {
          navigate(-1)
        }
      })
      .catch((error) => {
        if (error.response.status === 400 && error.response.data.email) {
          toast.error("Email đã tồn tại! Vui lòng chọn email khác!", {
            theme: "dark",
            position: "top-center"
          })
        } else {
          toast.error("Bạn đã đăng nhập không thành công! Vui lòng thử lại", {
            theme: "dark",
            position: "top-center"
          })
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const responseSocialFail = (response) => {
    localStorage.removeItem("auth")
    toast.error("Đăng nhập thất bại!", {
      position: "top-center",
      theme: "dark"
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
        <h1 className="uppercase text-center text-[2rem] font-[600]">đăng nhập</h1>
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
                className="flex-1 h-[40px] bg-main-light-text-color px-3 text-[1.5rem]"
                placeholder="Nhập mật khẩu..."
                required
              />
              <span
                onClick={() => setShowPw(showPw === "password" ? "type" : "password")}
                className="w-[40px] h-[40px] bg-second-dark-bg-color select-none cursor-pointer flex justify-center items-center">
                {showPw === "password" ? <BiShow /> : <BiHide />}

              </span>
            </div>
          </label>
          <div className="flex items-center justify-between mt-5">
            <label htmlFor="" className='flex items-center'>
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className='text-[1.3rem] ml-3'>Ghi nhớ tôi</span>
            </label>
            <button type='submit' className='btn button-dark-theme-important py-[1rem] text-[1.5rem]'>Xác nhận</button>
          </div>
        </form>
        <div className='text-center my-5'>
          <span className='opacity-60 uppercase text-[1.5rem]'>Đăng nhập bằng</span>
        </div>
        <div className="flex justify-center items-center relative z-[1]">
          <span className="btn relative btn-circle btn-lg mr-3 flex justify-center items-center text-[2rem] bg-blue-600 hover:bg-blue-600 text-second-dark-text-color">
            <FaFacebookF />
            <FacebookLogin
              appId="275165951450080"
              autoLoad={false}
              onClick={() => { }}
              callback={responseFacebook}
              cssClass="absolute top-0 left-0 bottom-0 right-0 opacity-0"
              onFailure={responseSocialFail}
              fields="id, name, email"
            />
          </span>
          <span className="btn relative btn-circle btn-lg mr-3 flex justify-center items-center text-[2rem] bg-red-600 hover:bg-red-600 text-second-dark-text-color">
            <FaGoogle />
            <span className='absolute top-0 left-0 bottom-0 right-0 opacity-0'>
              <GoogleLogin
                clientId='186923038878-m7ahadccl12ckh41d4tsit3lmcrbnq46.apps.googleusercontent.com'
                buttonText='Login with google'
                onSuccess={responseGoogle}
                onFailure={responseSocialFail}
                cookiePolicy={"single_host_origin"}
                autoLoad={false}
              />
            </span>
          </span>
        </div>
        <Link to={routes.signUp} className="text-main-text-color relative z-[2] transition-all font-[400] hover:font-[600] mt-8 hover:underline text-[1.5rem] block text-center">Vui lòng nhấn vào đây để đăng ký!</Link>
        <Link to={routes.forgotPassword} className="text-main-text-color relative z-[2] transition-all font-[400] hover:font-[600] mt-3 hover:underline text-[1.5rem] block text-center">Quên mật khẩu!</Link>
      </div>
      {
        loading && (<Spin />)
      }
    </div>
  )
}

export default SignIn