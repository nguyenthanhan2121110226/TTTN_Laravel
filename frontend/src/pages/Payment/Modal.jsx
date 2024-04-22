import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { routes } from '~/config'
function Modal() {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[50] bg-[#00000090]">
            <div className="w-[500px] min-h-[200px] p-[2.4rem] bg-white rounded-md shadow-lg">
                <h3 className="text-center font-[600] text-[2rem] uppercase">
                    Thông báo
                </h3>
                <div className='flex justify-center items-center'>
                    <span className='text-[4rem] text-green-600'><AiFillCheckCircle /></span>
                    <span className='text-[1.5rem] font-[600] my-[2.4rem] ml-3'>Bạn đã mua hàng thành công!</span>
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={routes.home} className="btn button-light-theme text-[2rem] p-4">Quay lại trang chủ</Link>
                </div>
            </div>
        </div>
    )
}

export default Modal