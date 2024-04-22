import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import className from 'classnames/bind'
import styles from './LoadingPage.module.scss'

const cx = className.bind(styles)

function Spin() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[100] bg-[#00000090]">
        <span className={cx("spin")}>
            <AiOutlineLoading3Quarters />
        </span>
    </div>
  )
}

export default Spin