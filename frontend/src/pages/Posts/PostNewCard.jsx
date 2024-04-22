import PropTypes from 'prop-types'
import { BiTime, BiShow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Image from "~/components/Image"
import imageUrl from '~/utils/imageUrl'
import formatDate from '~/utils/formatDate'
import { routes } from '~/config'



function PostNewCard({post}) {
    return (
        <div className="w-full ">
            <div className="relative pt-[80%]">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
                    <Image
                        src={imageUrl(post.image)}
                        className="object-cover h-full" />
                </div>
            </div>
            <h1 className="text-[1.7rem] font-[600] text-main-light-text-color mt-3 uppercase text-center text-ellipsis overflow-hidden whitespace-nowrap">{post.name}</h1>
            <div className="flex items-center justify-center text-[1.3rem] font-[600]">
                <div className="flex items-center mr-2">
                    <BiTime />
                    <span className='ml-2'>{formatDate(post.created_at)}</span>
                </div>
                <div className="flex items-center ml-2">
                    <BiShow />
                    <span className='ml-2'>{post.view}</span>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Link to={routes.posts + "/" + post.slug} className='btn button-light-theme text-[1.5rem]'>Xem tin</Link>
            </div>
        </div>
    )
}


PostNewCard.propTypes = {
    post: PropTypes.object
}

PostNewCard.defaultProps = {
    post: {
        name: "",
        image: "",
        slug: "",
        created_at: "",
        view: 0
    }
}




export default PostNewCard