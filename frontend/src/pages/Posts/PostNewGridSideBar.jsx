


import { Fragment, useEffect, useState } from 'react'
import { axiosDefault } from '~/utils/axios'
import PostNewCard from './PostNewCard'

function PostNewGridSideBar() {

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
            <h1 className="p-[1rem] flex items-center bg-main-dark-bg-color text-second-dark-text-color mb-3">Bài viết mới nhất</h1>
            {
                list.map(item => (
                    <div className="mb-5" key={item.id}>
                        <PostNewCard post={item} />
                    </div>
                ))
            }


        </Fragment>
    )
}

export default PostNewGridSideBar