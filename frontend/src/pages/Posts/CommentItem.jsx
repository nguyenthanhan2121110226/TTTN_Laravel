import { Fragment } from 'react'
import { BsCalendar3, BsFillReplyFill } from 'react-icons/bs'
import Image from "~/components/Image"
import formatDate from '~/utils/formatDate'



function CommentItem({ data, onReply = () => { } }) {
    return (
        <div className="w-full mt-12">
            <div className="flex">
                <div className="mr-10">
                    <div className="w-full flex justify-center mb-2">
                        <div className="w-[70px] lg:w-[40px] rounded-full overflow-hidden">
                            <Image className="rounded-full" src="https://th.bing.com/th/id/OIP.YcASkqlII4VwgQTmiHOsXAHaHa?pid=ImgDet&rs=1" alt="avatar.png" />
                        </div>
                    </div>
                    <h1 className="text-[1.5rem] font-[600] text-main-light-text-color whitespace-nowrap">{data.fullname}</h1>
                </div>
                <div className="flex-[1]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-[1.3rem]">
                            <BsCalendar3 />
                            <span className="ml-3 font-[600]">
                                {formatDate(data.created_at)}
                            </span>
                        </div>
                    </div>
                    <p className="text-[1.5rem] mt-3">{data.message}</p>
                    <div className="flex items-center mt-5">
                        <button
                            onClick={() => onReply(data)}
                            className="btn button-light-theme btn-square text-[1.5rem] text-main-dark-bg-color">
                            <BsFillReplyFill />
                        </button>
                    </div>
                </div>
            </div>

            {
                data.childs.length > 0 && (
                    <div className="pl-[120px] lg:pl-[60px] relative">
                        {
                            data.childs.map(item => (
                                <Fragment key={item.id}>
                                    <div className="flex mt-6">
                                        <div className="mr-10">
                                            <div className="w-full flex justify-center mb-2">
                                                <div className="w-[70px] lg:w-[40px] rounded-full overflow-hidden">
                                                    <Image className="rounded-full" src="https://th.bing.com/th/id/OIP.YcASkqlII4VwgQTmiHOsXAHaHa?pid=ImgDet&rs=1" alt="avatar.png" />
                                                </div>
                                            </div>
                                            <h1 className="text-[1.5rem] font-[600] text-main-light-text-color whitespace-nowrap">{item.fullname}</h1>
                                        </div>
                                        <div className="flex-[1]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-[1.3rem]">
                                                    <BsCalendar3 />
                                                    <span className="ml-3 font-[600]">
                                                        {formatDate(item.created_at)}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-[1.5rem] mt-3">{item.message}</p>
                                        </div>
                                    </div>

                                </Fragment>
                            ))
                        }

                        <div className="absolute left-[30px] lg:left-[15px] top-1/2 -translate-y-1/2 text-[5rem] lg:text-[3rem]">
                            <BsFillReplyFill className="scale-[-1]" />
                        </div>

                    </div>
                )
            }



        </div>
    )
}

export default CommentItem