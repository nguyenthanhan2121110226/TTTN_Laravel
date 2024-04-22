import classNames from "classnames/bind"
import styles from './Review.module.scss'

import Form from "./Form"
import { useCallback, useEffect, useState } from "react"
import Statistics from "./Statistics"
import Item from "./Item"
import Pagination from "~/components/Pagination"
import { axiosDefault } from "~/utils/axios"

const cx = classNames.bind(styles)

function Review({ stars, productId }) {

    const [reply, setReply] = useState(null)
    const [comment, setComment] = useState([])
    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(false)
    const [hasPagination, setHasPagination] = useState(false)

    useEffect(() => {
        getAll()
    }, [])

    const getAll = () => {
        setLoading(true)
        axiosDefault.get("review", {
            params: {
                sortBy: "date:desc",
                productid: productId,
                limit: 3,
                status: "active"
            }
        })
            .then((res) => {
                setComment(res.data.data)
                setLinks(res.data.links)
                setHasPagination(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className="grid grid-cols-7 lg:grid-cols-1 gap-[2.4rem]">
            <div className="w-full col-span-2 lg:col-span-1 border-[1px] border-solid border-gray-300 p-[2.4rem] rounded-[20px] max-h-[250px]">
                <Statistics productId={productId} stars={stars} />
            </div>
            <div className="col-span-5 lg:col-span-1 w-full">
                <div className="border-[1px] border-solid border-gray-300 p-[2.4rem] md:p-[1.6rem] rounded-[20px]">
                    <h1 className="font-[600] text-[2rem] capitalize">Câu hỏi và câu trả lời</h1>
                    {
                        comment.length === 0 && (
                            <p className="text-[1.5rem] p-[2.4rem] font-[600]">Sản phẩm chưa có bình luận nào</p>
                        )
                    }
                    {
                        comment.map(cmt => (
                            <Item data={cmt} onReply={setReply} key={cmt.id} />
                        ))
                    }
                </div>
                {hasPagination && (
                    <Pagination links={links} onSetList={setComment} perPage={3} />
                )}
                <div className="mt-8">
                    <Form onReset={getAll} onSetReply={setReply} replyItem={reply} productId={productId} />
                </div>
            </div>

        </div>
    )
}

export default Review