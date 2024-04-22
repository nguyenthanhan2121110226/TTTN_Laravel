import React, { Suspense, useEffect } from "react"
import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import classNames from "classnames/bind"
import styles from './Profile.module.scss'

import { routes, routes as routesConfig } from '~/config'
import BreakeCrumb from "~/components/BreakeCrumb"
import Image from "~/components/Image"
import { useDispatch, useSelector } from "react-redux"
import { logoutActions } from "~/redux/actions/profileActions"
import LoadingPage from "~/layouts/LoadingPage"
import imageUrl from '~/utils/imageUrl'

const Edit = React.lazy(() => import("./Edit"))
const Orders = React.lazy(() => import("./Orders"))
const Vouchers = React.lazy(() => import("./Vouchers"))
const OrderDetails = React.lazy(() => import("./OrderDetails"))





const cx = classNames.bind(styles)


function Profile() {
    const profile = useSelector(state => state.profile.data)
    const pending = useSelector(state => state.profile.pending)
    const success = useSelector(state => state.profile.success)

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleLogout = () => {
        dispatch(logoutActions())
    }

    if (!pending && success && profile) {
        return (
            <div className="w-full">
                <BreakeCrumb />
                <div className="grid grid-cols-5 gap-[2.4rem] px-[6rem] lg:px-[1.5rem] my-[3.6rem]">
                    <div className="w-full xl:border-r-[1px] xl:border-solid xl:border-[#cdcdcd] lg:col-span-5">
                        <div className="w-full flex justify-center">
                            <div className="w-[50%] rounded-full overflow-hidden">
                                <Image src={imageUrl(profile.avatar)} className="object-cover h-full" />
                            </div>
                        </div>
                        <h3 className="text-center text-[2rem] mt-3 font-[600]">{profile.fullname}</h3>
                        <div className="mt-3 text-[1.5rem] font-[600] text-main-dark-bg-color">
                            <span>Email: </span><span>{profile.email}</span>
                        </div>
                        <div className="mt-3 text-[1.5rem] font-[600] text-main-dark-bg-color">
                            <span>SĐT: </span><span>{profile.phone ?? "Chưa cập nhập"}</span>
                        </div>
                        <div className="mt-3 text-[1.5rem] font-[600] text-main-dark-bg-color">
                            <span>Địa chỉ: </span><span>{profile.address ?? "Chưa cập nhập"}</span>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                onClick={() => handleLogout()}
                                className="btn button-dark-theme-important text-[2rem] py-[1.2rem]">Đăng xuất</button>
                        </div>

                    </div>
                    <div className="col-span-4 lg:col-span-5">
                        <div className="flex justify-center mb-[3rem]">
                            <div className="flex text-[1.5rem] font-[600] overflow-x-auto hide-scroll">
                                <NavLink
                                    end
                                    to={routesConfig.profileStringRoute + routesConfig.editProfile}
                                    className={({ isActive }) => (isActive ? cx("tab-item", "active") : cx("tab-item"))}
                                >
                                    Sửa thông tin cá nhân
                                </NavLink>
                                <NavLink
                                    end
                                    to={routesConfig.profileStringRoute + routesConfig.orders}
                                    className={({ isActive }) => (isActive ? cx("tab-item", "active") : cx("tab-item"))}

                                >
                                    Đơn  mua
                                </NavLink>
                                <NavLink
                                    end
                                    to={routesConfig.profileStringRoute + routesConfig.vouchers}
                                    className={({ isActive }) => (isActive ? cx("tab-item", "active") : cx("tab-item"))}
                                >
                                    Danh sách vouchers
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-full">
                            <Routes>
                                <Route path={routesConfig.editProfile} element={
                                    <Suspense fallback="Đang tải...">
                                        <Edit />
                                    </Suspense>
                                } />
                                <Route path={routesConfig.orders} element={
                                    <Suspense fallback="Đang tải...">
                                        <Orders />
                                    </Suspense>
                                } />
                                <Route path={routesConfig.vouchers} element={
                                    <Suspense fallback="Đang tải...">
                                        <Vouchers />
                                    </Suspense>
                                } />
                                <Route path={routesConfig.orderDetails} element={
                                    <Suspense fallback="Đang tải...">
                                        <OrderDetails />
                                    </Suspense>
                                } />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (pending && !success && !profile) {
        return <LoadingPage />
    }
    if (!pending && !success && !profile) {
        return (
            <div className="w-screen h-screen overflow-hidden z-30">
                <Navigate to={routes.home} />
            </div>
        )
    }
    


}

export default Profile