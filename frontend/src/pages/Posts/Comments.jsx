import { useCallback, useEffect, useState } from 'react'
import classnames from 'classnames/bind'
import styles from './Posts.module.scss'

import { BsCalendar3, BsFillReplyFill } from 'react-icons/bs'

import Image from '~/components/Image'
import Form from './Form'
import CommentItem from './CommentItem'
import { axiosDefault } from '~/utils/axios'
import Pagination from '~/components/Pagination'

const cx = classnames.bind(styles)


function Comments({ postId }) {
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
        axiosDefault.get("comment", {
            params: {
                sortBy: "date:desc",
                postid: postId,
                limit: 3,
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
        <div className='w-full'>
            <div className="border-[1px] border-solid border-gray-300 p-[2.4rem] rounded-[20px]">
                <h1 className="font-[600] text-[2rem] capitalize">Các bình luận</h1>
                {
                    comment.length === 0 && (
                        <p className="text-[1.5rem] p-[2.4rem] font-[600]">Sản phẩm chưa có bình luận nào</p>
                    )
                }

                {
                    comment.map(cmt => (
                        <CommentItem data={cmt} onReply={setReply} key={cmt.id} />
                    ))
                }


            </div>
            {
                hasPagination && (
                    <Pagination links={links} perPage={3} onSetList={setComment} hasDateDesc />
                )
            }
            <div className="mt-8">
                <Form onSetReply={setReply} onReset={getAll} replyItem={reply} postId={postId} />
            </div>
        </div>
    )
}

export default Comments