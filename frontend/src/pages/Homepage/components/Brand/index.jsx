import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Brand.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TitleSection from "~/components/TitleSection"
import Image from "~/components/Image";
import { axiosDefault } from "~/utils/axios";
import { routes } from "~/config";
import imageUrl from "~/utils/imageUrl";


const cx = classNames.bind(styles)

function Brand() {

  const [list, setList] = useState([])
  useEffect(() => {
    axiosDefault.get("brand")
      .then((res) => {
        const data = res.data.data
        setList(data)
      })
  }, [])

  return (
    <Fragment>
      <TitleSection subTitle="Thương hiệu" title="Sản phẩm" />
      <div className="mt-8  mx-auto overflow-x-hidden">
        <Swiper
        slidesPerView={5}
        spaceBetween={24}
        className="mySwiper"
        >
        {
          list.map(item => (
            <SwiperSlide key={item.id}>
              <Link to={routes.products + "?brand=" + item.slug} className="relative w-full pt-[100%] block hover:bg-second-dark-bg-color transition-colors rounded-lg">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                  <Image className={cx("logo-image")} src={imageUrl(item.image)} />
                </div>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    </Fragment >
  )
}

export default Brand