import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import classNames from "classnames/bind"
import styles from './Sidebar.module.scss'

import { AiFillCaretDown } from 'react-icons/ai'
import { routes } from "~/config"


const cx = classNames.bind(styles)



function SidebarCollapse() {
    const categories = useSelector(state => state.category.data)

    const handleCollapse = (e) => {
        const parentElement = e.target.closest(".sidebar-item-parent")
        const collapseItem = parentElement.children[1]
        collapseItem.classList.toggle("show")
    }

    return (
        <div className="w-full parent font-[600]">
            {
                [...categories.filter(item => item.parent_id == null)].map((item, index) => {
                    return (
                        <div className="w-full sidebar-item-parent" key={index}>
                            <div className="flex items-center">
                                <Link to={routes.products + "?category=" + item.slug} className="flex-1 px-[0.5rem] h-[40px] flex items-center">{item.name}</Link>
                                {
                                    [...categories.filter(child => child.parent_id == item.id)].length > 0 && (
                                        <button
                                            onClick={handleCollapse}
                                            className="h-[40px] w-[40px] inline-flex justify-center items-center">
                                            <AiFillCaretDown />
                                        </button>
                                    )
                                }
                            </div>
                            {
                                [...categories.filter(child => child.parent_id == item.id)].length > 0 && (
                                    <div className="sidebar-item-child bg-gray-100">
                                        {
                                            [...categories.filter(child => child.parent_id == item.id)].map((child, index2) => {
                                                return (
                                                    <Link key={index2} to={routes.products + "?category=" + child.slug} className="h-[40px] px-[1.5rem] flex items-center">{child.name}</Link>
                                                )
                                            })
                                        }

                                    </div>
                                )
                            }

                        </div>
                    )
                })
            }

        </div>
    )
}

export default SidebarCollapse