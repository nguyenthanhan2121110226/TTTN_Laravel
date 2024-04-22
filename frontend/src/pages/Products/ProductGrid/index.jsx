import classNames from 'classnames/bind'
import styles from './ProductGrid.module.scss'
import { IoIosOptions } from 'react-icons/io'
import ProductCard from '~/components/ProductCard'
import Order from './Order'
import { Fragment, useEffect, useState } from 'react'
import Pagination from '~/components/Pagination'
import ProductGridSkeleton from './ProductGridSkeleton'


const cx = classNames.bind(styles)

function ProductGrid({ data, searchParams, setSearchParams, onSidebar, loading }) {
    const [list, setList] = useState([])

    useEffect(() => {
        if (data) {
            setList(data.data)
        }
    }, [data])

    return (
        <div className="w-full">
            <div className="flex lg:block items-center justify-between pb-[2.4rem] border-b-[1px] border-solid border-[#ccc]">
                <h1 className="text-[2rem] font-[600] uppercase">Tất cả sản phẩm</h1>
                <div className="flex items-center lg:mt-5">
                    <span className="text-[1.5rem] font-[600] opacity-90 inline-flex items-center">
                        <IoIosOptions className='mr-1 text-[2rem]' />
                        <span className='whitespace-nowrap'>Sắp xếp:</span>
                    </span>
                    <Order
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />
                </div>
                <div className='mt-5 hidden lg:flex justify-center'>
                    <button
                        onClick={() => onSidebar(true)}
                        className='btn button-dark-theme-important text-[1.5rem] py-2'>Bộ lọc thông minh</button>
                </div>
            </div>

            {
                loading ? (
                   <ProductGridSkeleton />
                ) : (
                    <Fragment>
                        {
                            list.length === 0 ? (
                                <div className='p-[2.4rem]'>
                                    <p className='font-[600] text-[1.5rem] opacity-80'>Không có sản phẩm nào!</p>
                                </div>
                            ) : (
                                <div className='grid grid-cols-4 lg:grid-cols-2 mt-[2.4rem] gap-[2.4rem]'>
                                    {
                                        list.map(item => (
                                            <div className='w-full' key={item.id}>
                                                <ProductCard product={item} />
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </Fragment>
                )
            }
            {
                data && (
                    <Pagination onSetList={setList} links={data.links} perPage={12} />
                )
            }
        </div>
    )
}

export default ProductGrid