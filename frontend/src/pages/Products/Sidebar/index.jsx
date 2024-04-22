import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from './Sidebar.module.scss'

import { AiFillCaretDown } from 'react-icons/ai'
import SidebarCollapse from "./SidebarCollapse"
import SidebarSize from "./SidebarSize"
import { memo } from "react"
import SizebarColor from "./SizebarColor"
import SidebarPrice from "./SidebarPrice"
import SidebarBrand from "./SidebarBrand"

const cx = classNames.bind(styles)

function Sidebar({searchParams, setSearchParams}) {

  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-item")}>
        <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Danh mục sản phẩm</h1>
          <SidebarCollapse />
      </div>
      <div className={cx("sidebar-item")}>
        <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Size</h1>
          <SidebarSize searchParams={searchParams} setSearchParams={setSearchParams}/>
      </div>
      <div className={cx("sidebar-item")}>
        <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Màu sắc</h1>
          <SizebarColor searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <div className={cx("sidebar-item")}>
        <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Giá</h1>
          <SidebarPrice searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
      <div className={cx("sidebar-item")}>
        <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color">Thương hiệu</h1>
          <SidebarBrand />
      </div>
    </div>
  )
}

export default memo(Sidebar)