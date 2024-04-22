import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";


import BreakeCrumb from "~/components/BreakeCrumb"
import Hero from "./Hero";
import GridPost from "./GridPost";
import Sidebar from "./Sidebar";
import { axiosDefault } from "~/utils/axios";
import { routes } from "~/config";


function Posts() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [filter] = useSearchParams()
    const topic = filter.get("topic")

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    useEffect(() => {
        getAll()
    }, [topic])

    const getAll = () => {
        const param = {
            limit: 3
        }
        if (!!topic) {
            param.topic = topic
        }

        setLoading(true)
        axiosDefault.get("post", {
            params: param
        })
            .then((res) => {
                setData(res.data)
            })
            .finally(() => {
                setLoading(false)
            })
    }

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
        ]
    }, [])

    return (
        <div className="mb-[6rem]">
            <div className="mb-[2.4rem]">
                <BreakeCrumb urls={breakeCrums} />
            </div>
            <div className="grid grid-cols-5 gap-[2.4rem] px-[6rem] lg:px-[1.5rem]">
                <div className="col-span-4 lg:col-span-5">
                    <Hero />
                    <section className="mt-6">
                        <GridPost dataProp={data} loading={loading}/>
                    </section>
                </div>
                <div className="w-full lg:col-span-5">
                    <Sidebar />
                </div>
            </div>

        </div>
    )
}

export default Posts