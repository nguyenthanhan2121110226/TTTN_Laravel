import { Link } from "react-router-dom"

import classNames from "classnames/bind"
import styles from './Hero.module.scss'

import Image from "~/components/Image"
import imageUrl from "~/utils/imageUrl"
import { routes } from "~/config"


const cx = classNames.bind(styles)


function HeroItem({ data, active = false }) {
    return (
        <div className={cx("hero-item", { "active": active })}>
            <h1 className={cx("name")}>{data.name}</h1>
            <p className={cx("desc")}>
                {data.short_desc}
            </p>
            <Link to={routes.products + "/" + data.slug} className={`${cx("button")} btn btn-ghost cursor-pointer ml-[5rem] text-[2rem] px-[2.5rem] py-[1.5rem] button-dark-theme`}>Mua ngay</Link>
            <div className={cx("image")}>
                <Image src={imageUrl(data.image)} alt="image" />
            </div>
        </div>
    )
}

export default HeroItem