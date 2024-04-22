
import { memo, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { routes } from "~/config"
import { axiosDefault } from "~/utils/axios"

function SidebarTopic() {

    const [list, setList] = useState([])
    useEffect(() => {
        axiosDefault.get("topic")
            .then((res) => setList(res.data.data))
    }, [])

    return (
        <div className='w-full parent font-[600]'>
            {
                list.map(item => (
                    <Link
                        key={item.id}
                        to={routes.posts + "?topic=" + item.slug}
                        className='px-[0.5rem] h-[40px] flex items-center'
                    >
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default memo(SidebarTopic)