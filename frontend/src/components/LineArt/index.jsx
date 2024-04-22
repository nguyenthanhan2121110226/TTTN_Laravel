import { AiFillHeart } from 'react-icons/ai'
import { LINE } from "~/assets/images"
import Image from "~/components/Image"



function LineArt() {
    return (
        <div className="flex items-center">
            <div className="flex items-center flex-1">
                <div className="flex-1">
                    <div className="h-[1px] bg-main-dark-text-color" />
                </div>
                <div className="w-[100px] lg:w-[50px]">
                    <Image src={LINE} className="brightness-0 invert-[1]" />
                </div>
            </div>
            <span className='mx-2 text-[3rem]'>
                <AiFillHeart />
            </span>
            <div className="flex items-center flex-1">
                <div className="w-[100px] lg:w-[50px]">
                    <Image src={LINE} className="scale-x-[-1] brightness-0 invert-[1]" />
                </div>
                <div className="flex-1">
                    <div className="h-[1px] bg-main-dark-text-color" />
                </div>
            </div>
        </div>
    )
}

export default LineArt