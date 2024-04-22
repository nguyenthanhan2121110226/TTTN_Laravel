import classNames from "classnames/bind"
import styles from './LoadingPage.module.scss'


const cx = classNames.bind(styles)

function LoadingPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className={cx("fade-loading")}></div>
        </div>
    )
}

export default LoadingPage