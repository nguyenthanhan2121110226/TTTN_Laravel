import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoTimeSharp } from 'react-icons/io5'
import classNames from "classnames/bind"
import styles from './Posts.module.scss'
import Image from "~/components/Image"
import TitleSection from "~/components/TitleSection"
import { axiosDefault } from "~/utils/axios"
import {routes} from '~/config'
import imageUrl from '~/utils/imageUrl'
import formatDate from "~/utils/formatDate"

const cx = classNames.bind(styles)

function Posts() {
    const [list, setList] = useState([])

    useEffect(() => {
        axiosDefault.get("post", {
            params: {
                limit: 3,
                sortBy: "date:desc"
            }
        })
            .then((res) => {
                const data = res.data.data
                setList(data)
            })
    }, [])

    return (
        <Fragment>
            <TitleSection subTitle="Bài viết" title="mới nhất" to={routes.posts} />
            <div className="mt-8 px-[6rem] lg:px-[1.6rem] grid grid-cols-3 lg:grid-cols-1 gap-[2.4rem]">
                {
                    list.map(item => (
                        <Link to={`${routes.posts + "/" + item.slug}`} className="w-full" key={item.id}>
                            <div className="rounded-2xl h-[200px] overflow-hidden">
                                <Image
                                    className="object-cover"
                                    src={imageUrl(item.image)} />
                            </div>
                            <div className="p-[1.6rem]">
                                <h1 className={`text-[2rem] font-[600] ${cx("name")}`}>{item.name}</h1>
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center text-[1.5rem]">
                                        <IoTimeSharp />
                                        <span className="ml-2">{formatDate(item.created_at)}</span>
                                    </div>
                                    <span className="capitalize px-[1rem] py-[0.3rem] rounded-lg bg-main-dark-text-color text-main-dark-bg-color text-[1.3rem]">{item.top_name}</span>
                                </div>
                                <p className={`text-[1.5rem] mt-5 ${cx("desc")}`}>
                                    {item.short_desc}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Posts