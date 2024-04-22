import classNames from "classnames/bind"
import styles from './Stars.module.scss'

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const cx = classNames.bind(styles)


function Stars({num = 5}) {
    return (
        <ul className="inline-flex">
            {
                [1, 2, 3, 4, 5].map((star) => {
                    return (
                        <li className={cx("star-item")} key={star}>
                            {
                                star <= num ? (
                                    <AiFillStar />
                                ) : (
                                    <AiOutlineStar />
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Stars