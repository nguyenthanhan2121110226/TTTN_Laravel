import { Link, useParams } from "react-router-dom"

import { FaFacebookF, FaYoutube } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im';
import { BiCategoryAlt } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { BsFillSignpostSplitFill } from 'react-icons/bs';



import classnames from 'classnames/bind'
import styles from './Posts.module.scss'

import Image from '~/components/Image'
import BreakeCrumb from "~/components/BreakeCrumb"
import Sidebar from "./Sidebar"
import PostDetailGrid from "./PostDetailGrid";
import TitleSection from "~/components/TitleSection";
import Comments from "./Comments";
import { useEffect, useMemo, useState } from "react";
import { axiosDefault } from "~/utils/axios";
import LoadingPage from "~/layouts/LoadingPage";
import imageUrl from "~/utils/imageUrl";
import { routes } from "~/config";


const cx = classnames.bind(styles)

function PostDetail() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        axiosDefault.get(`post/show/${slug}`)
            .then((res) => {
                setPost(res.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [slug])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])


    useEffect(() => {
        const handler = setTimeout(() => {
            if (!!post) {
                axiosDefault.get(`post/increase-view/${post.id}`)
                    .then((res) => {
                        console.log(res);
                    })
            }
        }, 500)
        return () => clearTimeout(handler)
    }, [slug, post?.id])

    const breakeCrums = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.posts,
                name: "Bài viết"
            },
            {
                to: post?.slug,
                name: post?.name
            },
        ]
    }, [post])

    return !loading ? (
        post ? (
            <div className="mb-[6rem]">
                <div className="mb-[2.4rem]">
                    <BreakeCrumb urls={breakeCrums} />
                </div>
                <div className="grid grid-cols-5 gap-[2.4rem] px-[6rem] lg:px-[1.5rem]">
                    <div className="col-span-4 lg:col-span-5">
                        <h1 className="text-[3.6rem] lg:text-[2rem] font-[600] leading-1">
                            {post?.name}
                        </h1>
                        <div className="flex lg:flex-col items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-[1.4rem] italic">
                                    @Được viết bởi
                                    <span className="capitalize ml-2">
                                        Nguyễn văn a
                                    </span>
                                </span>
                                <span className="ml-5 text-[1.4rem] italic font-[600]">
                                    Lượt xem: {post?.view}
                                </span>
                            </div>
                            <div className="flex items-center lg:mt-5">
                                <div className="tooltip text-[1.5rem]" data-tip="Faccebook">
                                    <Link to="/" className="border-[1px] border-solid border-main-dark-bg-color w-[40px] h-[40px] rounded-full inline-flex justify-center text-[2rem] items-center">
                                        <FaFacebookF className="text-blue-600" />
                                    </Link>
                                </div>

                                <div className="tooltip text-[1.5rem] ml-5" data-tip="Youtube">
                                    <Link to="/" className="border-[1px] border-solid border-main-dark-bg-color w-[40px] h-[40px] rounded-full inline-flex justify-center text-[2rem] items-center">
                                        <FaYoutube className="text-red-600" />
                                    </Link>
                                </div>
                                <div className="tooltip text-[1.5rem] ml-5" data-tip="Twitter">
                                    <Link to="/" className="border-[1px] border-solid border-main-dark-bg-color w-[40px] h-[40px] rounded-full inline-flex justify-center text-[2rem] items-center">
                                        <ImTwitter className="text-blue-400" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-[40%] relative mt-5">
                            <div className="absolute w-full h-full left-0 top-0 overflow-hidden">
                                <Image className="object-cover" src={imageUrl(post?.image)} />
                            </div>
                        </div>
                        <div className={cx("content")} dangerouslySetInnerHTML={{ __html: post?.detail }} />
                        <div className="h-[2px] bg-main-dark-bg-color my-5" />
                        <div className="flex items-center text-[1.5rem]">
                            <span className=" flex items-center font-[600]">
                                <BiCategoryAlt className="mr-2" />Danh mục:
                            </span>
                            <span className="ml-3">{post?.top_name}</span>
                        </div>
                        <div className="flex text-[1.5rem] mt-5">
                            <span className=" flex items-center font-[600]">
                                <AiFillTag className="mr-2" />Thẻ:
                            </span>
                            <div className="flex-1 ml-3">
                                Chưa cập nhập

                            </div>
                        </div>
                        <div className="text-[1.5rem] mt-5">
                            <span className=" flex items-center font-[600]">
                                <BsFillSignpostSplitFill className="mr-2" />Bài viết tương tự:
                            </span>
                            <PostDetailGrid slug={post?.top_slug} />
                        </div>
                        <section className="mt-9">
                            <TitleSection subTitle="Bình luận" title="Bài viết" />
                            <div className="mt-3">
                                <Comments postId={post.id} />
                            </div>
                        </section>
                    </div>
                    <div className="w-full lg:col-span-5">
                        <Sidebar />
                    </div>
                </div>
            </div>
        ) : (
            <p className="text-[1.5rem] font-[600] p-[2.4rem]">Vui lòng thử lại!</p>
        )

    ) : (
        <LoadingPage />
    )
}

export default PostDetail