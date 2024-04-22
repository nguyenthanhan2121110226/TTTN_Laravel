

import { Link } from "react-router-dom"

import { AiFillCalendar } from 'react-icons/ai';

import Image from '~/components/Image'
import { useEffect, useState } from "react";
import { axiosDefault } from "~/utils/axios";
import imageUrl from "~/utils/imageUrl";
import { routes } from "~/config";
import formatDate from "~/utils/formatDate";



function PostDetailGrid({ slug }) {

    const [list, setList] = useState([])

    useEffect(() => {
        if (slug) {
            axiosDefault.get("post", {
                params: {
                    topic: slug,
                    limit: 4
                }
            })
                .then((res) => {
                    setList(res.data.data)
                })
        }
    }, [])

    return (
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-[2.4rem] mt-5">
            {
                list.map(item => (
                    <div className="flex w-full" key={item.id}>
                        <div className="w-[100px] h-[60px] overflow-hidden mr-5">
                            <Image src={imageUrl(item.image)} className="object-cover h-full" />
                        </div>
                        <div className="w-full flex-1 overflow-hidden">
                            <Link to={routes.posts + "/" + item.slug} className="text-[1.5rem] font-[600] uppercase text-ellipsis whitespace-nowrap overflow-hidden w-full">
                               {item.name}
                            </Link>
                            <div className="flex items-center mt-3 text-[1.5rem] font-[600]">
                                <AiFillCalendar />
                                <span className="ml-4 italic">
                                   {formatDate(item.created_at)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default PostDetailGrid