import classNames from "classnames/bind"
import { Fragment } from "react"
import SidebarCollapse from "~/pages/Products/Sidebar/SidebarCollapse"
import PostNewCard from "./PostNewCard"
import PostNewGridSideBar from "./PostNewGridSideBar"
import styles from './Posts.module.scss'
import SidebarTopic from "./SidebarTopic"

const cx = classNames.bind(styles)

function Sidebar() {

  

  return (
    <Fragment>
      <div className={cx("sidebar")}>
        <div className={cx("sidebar-item")}>
          <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Danh mục sản phẩm</h1>
          <SidebarCollapse />
        </div>
        <div className={cx("sidebar-item")}>
          <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Chủ đề</h1>
          <SidebarTopic />
        </div>
      </div>
      <div className="mt-5">
        <PostNewGridSideBar />
      </div>
    </Fragment>
  )
}

export default Sidebar