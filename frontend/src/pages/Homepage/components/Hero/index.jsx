import classNames from "classnames/bind"
import { Fragment, useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Image from "~/components/Image"
import { axiosDefault } from "~/utils/axios"
import imageUrl from "~/utils/imageUrl"

import styles from './Hero.module.scss'
import HeroItem from "./HeroItem"
import { endpoints, routes } from "~/config";



const cx = classNames.bind(styles)

const slides = [1, 2, 3, 4]

function Hero() {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(1)
  const [clear, setClear] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    setLoading(true)
    axiosDefault.get("slide", {
      params: {
        limit: 5
      }
    })
      .then((res) => {
        setList(res.data.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const timeId = setInterval(() => {
      setActive(prev => {
        if (prev === 4) {
          return 1
        } else {
          return prev + 1
        }
      })
    }, 3000)
    return () => {
      setClear(false)
      clearInterval(timeId)
    }
  }, [clear])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setActive(prev => {
      if (prev === 4) {
        return 1
      } else {
        return prev + 1
      }
    })
    setClear(true)
  }

  const handlePrev = () => {
    setActive(prev => {
      if (prev === 1) {
        return 4
      } else {
        return prev - 1
      }
    })
    setClear(true)
  }

  const handleSelect = (id) => {
    setActive(id)
    setClear(true)
  }


  return !loading ? (
    <Fragment>
      {
        width >= endpoints.lg && (
          <div className={`${cx("container")} lg:hidden`}>
            {
              list.map((item, index) => {
                return (
                  <HeroItem data={item} key={index} active={index + 1 === active} />
                )
              })
            }



            <div className={cx("sub-title")}>NTTSHOP</div>
            <nav className={cx("pagination")}>
              <button
                className={cx("paginate-item")}
                onClick={() => handlePrev()}
              >
                <AiOutlineLeft />
              </button>
              {
                list.map((item, index) => {
                  return (
                    <button
                      onClick={() => handleSelect(index + 1)}
                      className={cx("paginate-item", { "active": index + 1 === active })}
                      key={index}
                    >
                      {index + 1}
                    </button>
                  )
                })
              }
              <button
                onClick={() => handleNext()}
                className={cx("paginate-item")}
              ><AiOutlineRight />
              </button>
            </nav>
          </div>
        )
      }


      {
        width < endpoints.lg && (
          <div className="w-full">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >

              {
                list.map(item => (
                  <SwiperSlide key={item.id}>
                    <div className="relative md:pt-[85%] lg:pt-[60%]">
                      <div className="absolute flex top-0 left-0 w-full h-full">
                        <div className="w-full flex-1">
                          <h1 className="text-[2rem] font-[600] px-[2.4rem] text-ellipsis overflow-hidden">{item.name}</h1>
                          <div className="flex justify-center">
                            <Image src={imageUrl(item.image)} className="w-[60%] mx-auto" />
                          </div>
                          <div className="w-full mt-5">
                            <p className={`text-[1.5rem] px-[2.4rem] ${cx("short-desc-mb")}`}>
                              {item.short_desc}
                            </p>
                          </div>
                          <div className="flex justify-center mt-5">
                            <Link to={routes.products + "/" + item.slug} className="uppercase btn button-dark-theme flex items-end justify-center px-5 py-3 text-[2rem] fort-[600]">Chọn mua</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        )
      }
    </Fragment>
  ) : (
    <div className="w-full h-[calc(100vh_-_90px)] lg:h-[300px] p-[4.8rem] lg:p-0">
        <Skeleton height="100%" baseColor="#333333" highlightColor="#444444" className="shadow-md" />
    </div>
  )

}

export default Hero