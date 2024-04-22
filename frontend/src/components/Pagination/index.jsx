import { useState, Fragment, useEffect } from "react"
import classNames from "classnames/bind"
import styles from './Pagination.module.scss'
import { axiosDefault } from "~/utils/axios"


const cx = classNames.bind(styles)

function Pagination({ links, onSetList = () => { }, perPage = 7, hasDateDesc = false }) {
    const [linksPage, setLinksPage] = useState([])

    useEffect(() => {
        setLinksPage(links)
    }, [links.length])

    const handlePaginate = (url) => {
        if (url === null) return

        const param = {
            limit : perPage
        }
        if(hasDateDesc){
            param.sortBy = "date:desc"
        }

        axiosDefault.get(url, {
            params: param
        })
            .then((response) => {
                onSetList(response.data.data)
                setLinksPage(response.data.links)
            })
            .catch(() => {
                throw new Error("fail")
            })
    }

    return linksPage.length > 3 && (
        <div className={`flex justify-end items-center mt-[2.4rem] ${cx("pagination")}`}>
            {
                linksPage.map((item, index, arr) => {
                    return (
                        <Fragment key={index}>
                            {index === 0 && (
                                <button
                                    onClick={() => handlePaginate(item.url)}
                                    className={`btn button-light-theme text-[1.5rem] ${item.url === null ? "hidden" : ""}`}>
                                    Trang trước
                                </button>
                            )}

                            {index === arr.length - 1 && (
                                <button
                                    onClick={() => handlePaginate(item.url)}
                                    className={`btn button-light-theme text-[1.5rem] ${item.url === null ? "hidden" : ""}`}>
                                    Trang sau
                                </button>
                            )}
                            {index !== 0 && index !== arr.length - 1 && (
                                <button
                                    onClick={() => handlePaginate(item.url)}
                                    className={`btn btn-square button-light-theme text-[1.5rem] disabled:bg-gray-500 disabled:text-white`} disabled={item.active}>
                                    {item.label}
                                </button>
                            )}
                        </Fragment>

                    )
                })
            }
        </div>
    )
}

export default Pagination