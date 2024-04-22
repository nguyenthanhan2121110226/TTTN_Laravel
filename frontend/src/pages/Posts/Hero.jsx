import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css/autoplay';
import "swiper/css";

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

import { BiTime, BiShow } from 'react-icons/bi'

import Image from "~/components/Image";
import { Link } from "react-router-dom";
import { axiosDefault } from "~/utils/axios";
import formatDate from "~/utils/formatDate";
import imageUrl from "~/utils/imageUrl";
import { routes } from "~/config";




function Hero() {
    const [index, setIndex] = useState(0)
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosDefault.get("post", {
            params: {
                limit: 3,
                sortBy: "view:desc"
            }
        })
            .then((res) => {
                setList(res.data.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return !loading ? (
        <Fragment>
            <div className="w-full border-main-dark-bg-color border-solid border-[3px]">
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={(e) => {
                        setIndex(e.realIndex)
                    }}
                    className="mySwiper"
                    modules={[Autoplay]}
                >
                    {
                        list.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link to={routes.posts + "/" + slide.slug} className="pt-[50%] block relative">
                                        <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
                                            <Image src={imageUrl(slide.image)} className="object-cover" />
                                        </div>
                                        <div className="absolute left-0 bottom-0 w-full px-[4rem] font-[600] bg-[#00000090] text-second-dark-text-color py-[2rem] lg:px-[1.5rem] lg:py-[1rem]">
                                            <h1 className="text-[2.4rem] lg:text-[1.7rem]">
                                                {slide.name}
                                            </h1>
                                            <div className="flex items-center">
                                                <div className="flex items-center lg:text-[1.3rem]">
                                                    <BiTime />
                                                    <span className="ml-3">{formatDate(slide.created_at)}</span>
                                                </div>
                                                <div className="flex items-center ml-[6rem]">
                                                    <BiShow />
                                                    <span className="ml-3">{slide.view}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className="grid grid-cols-3">
                {
                    list.map((slide, idx) => {
                        return (
                            <div className={`w-full pt-[60%] relative border-main-dark-bg-color border-solid border-[3px] border-t-0 ${idx !== list.length - 1 ? "border-r-0" : ""}`} key={idx}>
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <Image src={imageUrl(slide.image)} className="object-cover" />
                                </div>
                                <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${index === idx ? "bg-[#00000090]" : "bg-[#00000030]"}`}>
                                    <Link to={routes.posts + "/" + slide.slug} className={`btn ${index === idx ? "button-dark-theme" : "button-light-theme"} text-[1.5rem] lg:text-[1.3rem]`}>Xem tin</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    ) : (
        <div className="h-[500px] lg:h-[300px]">
            <Skeleton height="100%"
                borderRadius={10} className="shadow-md"
                highlightColor="#ffffff"
                baseColor="#eeeeee"
                duration={0.5} />
        </div>
    )
}

export default Hero