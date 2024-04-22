import { Fragment, useMemo } from "react"

import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'




import BreakeCrumb from "~/components/BreakeCrumb"
import { endpoints, routes } from "~/config"
import Form from "./Form"



function Contact() {

    const breakeCrums = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.contact,
                name: "Liên hệ"
            }
        ]
      }, [])

    return (
        <Fragment>
            <BreakeCrumb urls={breakeCrums} />
            <div className='px-[6rem] lg:px-[1.5rem]'>
                <div className="py-[2.4rem]">
                    <div className="grid grid-cols-3 gap-[2.4rem]">
                        <div className="col-span-2 lg:col-span-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125400.29781677232!2d106.74873436059221!3d10.82972281147103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275b3a69ce75%3A0xfc7063168fc12eaf!2zUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1654082169756!5m2!1svi!2s"
                                height={window.innerWidth > endpoints.lg ? 450 : 300}
                                width="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                        <div className="w-full lg:col-span-3">
                            <ul className="w-full">
                                <li className="border-[1px] mb-12 border-solid border-[#cdcdcd] flex items-center p-[2.4rem]">
                                    <span className="w-[50px] text-[2rem] inline-flex justify-center items-center h-[50px] bg-main-dark-bg-color text-second-dark-text-color">
                                        <AiFillPhone />
                                    </span>
                                    <div className="flex-1 pl-[2.4rem]">
                                        <div className="flex items-center">
                                            <span className="text-[1.5rem] font-[600] mr-3">Hotline:</span>
                                            <span className="text-[1.5rem] font-[600] opacity-80">+84 123456789</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-[1.5rem] font-[600] mr-3">Fax:</span>
                                            <span className="text-[1.5rem] font-[600] opacity-80">+84 123456789</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-[1px] mb-12 border-solid border-[#cdcdcd] flex items-center p-[2.4rem]">
                                    <span className="w-[50px] text-[2rem] inline-flex justify-center items-center h-[50px] bg-main-dark-bg-color text-second-dark-text-color">
                                        <MdEmail />
                                    </span>
                                    <div className="flex-1 pl-[2.4rem]">
                                        <div className="flex items-center">
                                            <span className="text-[1.5rem] font-[600] mr-3">Email:</span>
                                            <span className="text-[1.5rem] font-[600] opacity-80">ntt.shop.3006@gmail.com</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="border-[1px] border-solid border-[#cdcdcd] flex items-center p-[2.4rem]">
                                    <span className="w-[50px] text-[2rem] inline-flex justify-center items-center h-[50px] bg-main-dark-bg-color text-second-dark-text-color">
                                        <RiSendPlaneFill />
                                    </span>
                                    <div className="flex-1 pl-[2.4rem]">
                                        <div className="flex">
                                            <span className="text-[1.5rem] font-[600] mr-3 whitespace-nowrap">Địa chỉ:</span>
                                            <span className="text-[1.5rem] font-[600] opacity-80">Quận 9, Thành phố Hồ Chí Minh</span>
                                        </div>

                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <div className="w-[700px]">
                            <h1 className="text-[3rem] text-center font-[700] mb-5 uppercase">Vui lòng điền form liên hệ</h1>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact