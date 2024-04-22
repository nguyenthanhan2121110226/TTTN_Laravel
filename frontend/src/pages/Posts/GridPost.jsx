import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Posts.module.scss'
import { BiTime, BiShow } from 'react-icons/bi'

import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

import Image from "~/components/Image";
import TitleSection from "~/components/TitleSection";
import imageUrl from "~/utils/imageUrl";
import formatDate from "~/utils/formatDate";
import { routes } from "~/config";
import Pagination from "~/components/Pagination";

const cx = classNames.bind(styles)

function GridPost({ dataProp, loading = false }) {
    const [list, setList] = useState([])

    useEffect(() => {
        if (dataProp) {
            setList(dataProp.data)
        }
    }, [dataProp])


    return !loading ? (
        <Fragment>
            <TitleSection subTitle="Tất cả" title="Bài viết" />

            {
                list.length === 0 && (
                    <p className="text-[1.5rem] font-[600] p-[2.4rem]">Không có bài viết nào</p>
                )
            }

            <div className="mt-5">
                {
                    list.map(item => (
                        <div className="flex lg:flex-col mt-6" key={item.id}>
                            <div className="w-[200px] lg:w-full h-[140px] lg:h-auto overflow-hidden mr-5 lg:mr-0">
                                <Image src={imageUrl(item.image)} className="object-cover " />
                            </div>
                            <div className="flex-[1]">
                                <Link to={routes.posts + "/" + item.slug} className="text-[2rem] block font-[600]">{item.name}</Link>
                                <div className="flex items-center text-[1.3rem] font-[600]">
                                    <div className="flex items-center">
                                        <BiTime />
                                        <span className="ml-3">{formatDate(item.created_at)}</span>
                                    </div>
                                    <div className="flex items-center ml-[3rem]">
                                        <BiShow />
                                        <span className="ml-3">{item.view}</span>
                                    </div>
                                </div>
                                <p className="text-[1.5rem] font-[600] opacity-90">
                                    {item.short_desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                dataProp && (
                    <Pagination links={dataProp.links} perPage={3} onSetList={setList} />
                )
            }
        </Fragment>
    ) : (
        <div className="w-full">
            <Skeleton height={200}
                borderRadius={10} className="shadow-md"
                highlightColor="#ffffff"
                baseColor="#eeeeee"
                duration={0.5} />
            <Skeleton height={200}
                borderRadius={10} className="shadow-md mt-5"
                highlightColor="#ffffff"
                baseColor="#eeeeee"
                duration={0.5} />
            <Skeleton height={200}
                borderRadius={10} className="shadow-md mt-5"
                highlightColor="#ffffff"
                baseColor="#eeeeee"
                duration={0.5} />
        </div>
    )
}




export default GridPost