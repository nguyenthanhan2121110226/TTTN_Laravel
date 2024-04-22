import { useEffect } from "react"
import { Link } from "react-router-dom"
import { routes } from "~/config"



function NotFound() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-screen h-[calc(100vh_-_90px)] flex justify-center items-center">
      <div>
        <h1 className="text-[18rem] lg:text-[12rem] font-[700] text-center">404</h1>
        <p className="text-[2rem] lg:text-[1.5rem] font-[600] text-center">Xin lỗi! Không tìm thấy trang bạn đang yêu cầu!</p>
        <div className="flex justify-center mt-10">
          <Link to={routes.home} className="btn button-light-theme text-[2rem] p-[2rem]">Quay lại trang chủ</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound