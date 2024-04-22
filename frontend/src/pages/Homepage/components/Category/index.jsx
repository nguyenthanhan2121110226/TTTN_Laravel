

import { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Category.module.scss'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import TitleSection from '~/components/TitleSection'
import Image from '~/components/Image'
import imageUrl from '~/utils/imageUrl'
import { Link } from 'react-router-dom'
import { params, routes } from '~/config'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function Category() {
    const categories = useSelector(state => state.category.data)
    const loading = useSelector(state => state.category.pending)
    const [category1, setCategory1] = useState()
    const [category2, setCategory2] = useState()
    const [category3, setCategory3] = useState()
    useEffect(() => {
        if (categories.length > 0) {
            const newCategories = categories.filter(item => item.parent_id === null)
            setCategory1({ ...newCategories.find(item => item.slug === params.homepage.category1.slug), desc: params.homepage.category1.desc })
            setCategory2({ ...newCategories.find(item => item.slug === params.homepage.category2.slug), desc: params.homepage.category2.desc })
            setCategory3({ ...newCategories.find(item => item.slug === params.homepage.category3.slug), desc: params.homepage.category3.desc })
        }
    }, [categories])
    return !loading ? (
        <Fragment>
            {
                !!category1 && !!category2 && !!category3 && (
                    <Fragment>
                        <TitleSection subTitle='Danh mục' title='sản phẩm' />
                        <div className='mt-8 grid grid-cols-1 gap-[1.6rem]'>
                            <div className="w-full grid grid-cols-2 md:grid-cols-1 px-[2.4rem]">
                                <div className="w-full pt-[45%] relative md:hidden">
                                    <div className={`${cx("card-desc")} absolute top-0 left-0 right-0 bottom-0 text-[4rem] lg:text-[2.4rem]`}>
                                        <span>{category1.desc}</span>
                                    </div>
                                </div>
                                <div className="w-full pt-[45%] md:pt-[60%] relative">
                                    <Link to={routes.products + "?category=" + category1.slug} className={`${cx("card-main")} absolute top-0 left-0 right-0 bottom-0`}>
                                        <Image src={imageUrl("15jXuMA97t-2.jpg")} className="object-cover h-full" />
                                        <div className={cx("content")}>
                                            <div className="border-[1px] flex justify-center items-center border-solid border-white w-full h-full">
                                                <button className={cx("btn-custom")}>
                                                    {category1.name}
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full grid grid-cols-2 md:grid-cols-1 px-[2.4rem]">

                                <div className="w-full pt-[45%] md:pt-[60%] relative">
                                    <Link to={routes.products + "?category=" + category2.slug} className={`${cx("card-main")} absolute top-0 left-0 right-0 bottom-0`}>
                                        <Image src={imageUrl(category2.image)} className="object-cover h-full" />
                                        <div className={cx("content")}>
                                            <div className="border-[1px] flex justify-center items-center border-solid border-white w-full h-full">
                                                <button className={cx("btn-custom")}>
                                                    {category2.name}
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full pt-[45%] relative md:hidden">
                                    <div className={`${cx("card-desc")} absolute top-0 left-0 right-0 bottom-0 text-[4rem] lg:text-[2.4rem]`}>
                                        <span>{category2.desc}</span>
                                    </div>
                                </div>

                            </div>


                            <div className="w-full grid grid-cols-2 md:grid-cols-1 px-[2.4rem]">
                                <div className="w-full pt-[45%] relative md:hidden">
                                    <div className={`${cx("card-desc")} absolute top-0 left-0 right-0 bottom-0 text-[4rem] lg:text-[2.4rem]`}>
                                        <span>{category3.desc}</span>
                                    </div>
                                </div>
                                <div className="w-full pt-[45%] md:pt-[60%] relative">
                                    <Link to={routes.products + "?category=" + category3.slug} className={`${cx("card-main")} absolute top-0 left-0 right-0 bottom-0`}>
                                        <Image src={imageUrl(category3.image)} className="object-cover h-full" />
                                        <div className={cx("content")}>
                                            <div className="border-[1px] flex justify-center items-center border-solid border-white w-full h-full">
                                                <button className={cx("btn-custom")}>
                                                    {category3.name}
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    ) : (
        <div className="w-full">
            <Skeleton count={3} baseColor="#333333" highlightColor="#444444" className="shadow-md mt-5" height={200} />
        </div>
    )
}

export default Category