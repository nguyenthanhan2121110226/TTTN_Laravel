import { FaTruckMoving, FaWallet } from 'react-icons/fa'
import { BiTimer } from 'react-icons/bi'
import { BsCurrencyExchange } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'



import { ABOUT } from "~/assets/images"
import { useMemo } from 'react'
import BreakeCrumb from '~/components/BreakeCrumb'
import { routes } from '~/config'



function About() {

    const breakeCrums = useMemo(() => {
        return [
            {
                to: routes.home,
                name: "Trang chủ"
            },
            {
                to: routes.contact,
                name: "Liên hệ"
            }
        ]
    }, [])

    return (
        <div className="about w-full">
            <div className="h-screen">
                <div className="w-full h-full relative bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${ABOUT})` }}>
                    <div className="absolute top-0 left-0 bg-[#00000090] w-full h-full px-[8%] flex items-center text-white">
                        <div className='flex-1'>
                            <h6 className='text-[2.5rem] tracking-[5px]'>e-commerce sneakers</h6>
                            <p className='text-[4.5rem]'>Chúng tôi đem lại cho bạn tất cả những gì <strong>hiện đại</strong>, <strong>thời thượng</strong> và <strong>chất lượng</strong> nhất!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 px-[60px]">
                <div className="grid grid-cols-4 gap-8">
                    <div className="w-full">
                        <div className="text-center pt-5 text-[4rem]">
                            <FaTruckMoving className='inline-block' />
                        </div>
                        <h1 className='text-[2rem] font-[600] text-center'>Giao hàng miễn phí</h1>
                        <p className='text-[1.5rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam qui delectus quae quisquam.</p>
                    </div>
                    <div className="w-full">
                        <div className="text-center pt-5 text-[4rem]">
                            <BiTimer className='inline-block' />
                        </div>
                        <h1 className='text-[2rem] font-[600] text-center'>Dịch vụ 24/h</h1>
                        <p className='text-[1.5rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam qui delectus quae quisquam.</p>

                    </div>
                    <div className="w-full">
                        <div className="text-center pt-5 text-[4rem]">
                            <FaWallet className='inline-block' />
                        </div>
                        <h1 className='text-[2rem] font-[600] text-center'>Thanh toán được bảo mật</h1>
                        <p className='text-[1.5rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam qui delectus quae quisquam.</p>

                    </div>
                    <div className="w-full">
                        <div className="text-center pt-5 text-[4rem]">
                            <BsCurrencyExchange className='inline-block' />
                        </div>
                        <h1 className='text-[2rem] font-[600] text-center'>Đổi hàng dễ dàng</h1>
                        <p className='text-[1.5rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam qui delectus quae quisquam.</p>

                    </div>
                </div>
            </div>
            <div className='my-5'>
                <BreakeCrumb urls={breakeCrums} />
            </div>
            <div className="flex items-center px-[60px] mt-5">
                <div className="flex-[1] mr-3">
                    <div className="w-full pt-[60%] bg-center bg-no-repeat bg-cover"
                        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631_960_720.jpg")` }}
                    />
                </div>
                <div className="flex-[1] ml-3">
                    <h3 className='text-[3rem] text-[#333] font-[600]'>
                        Sustainable direct trade wayfarers mixtape semiotics.
                    </h3>
                    <p className='text-[1.5rem] text-[#333]'>
                        Nullam venenatis ipsum lobortis nulla rhoncus vulputate. Phasellus semper blandit. Morbi auctor nisi ac sapien rhoncus, sit amet rhoncus diam viverra. Sed eget suscipit, Mauris nec eget egestas. Maecenas commodo metus vitae leo facilisis maximus sed odio. Duis dictum scelerisque libero at tempor.

                        Donec porttitor varius orci. Mauris vel ultrices turpis, ut imperdiet mi. Sed vulputate felis. Nunc vulputate aliquam eros dignissim gravida. Vivamus eget egestas justo. Cras nulla nulla euismod elit ligula, ac posuere augue. commodo non. Morbi tellus ligula, velit, in hendrerit orci et quam commodo feugiat.

                        Aenean sollicitudin eros placerat ligula ornare semper. Duis et neque ac purus ultrices vulputate sit amet sem. Proin non tempor nulla. Fusce purus vivamus eros dignissim. Cras nec mi velit. In hendrerit orci et quam commodo feugiat. Aenean sollicitudin non tempor nulla. Fusce purus ligula, interdum amet felis.
                    </p>
                </div>
            </div>
            <div className="mt-5 px-[60px]">
                <div>
                    <span className='text-[2rem]'>Meet our Team</span>
                    <h1 className='text-[3rem] font-[600]'>The best team members helping you</h1>
                    <div className='flex items-center'>
                        <button className='px-5 py-2 rounded-full uppercase border-solid border-2 text- border-[#777] text-[1.5rem] mr-2'>Khám phá</button>
                        <button className='px-5 py-2 rounded-full uppercase border-solid border-2 text-white bg-[#777] border-[#777] text-[1.5rem] ml-2'>Mua sắm</button>
                    </div>
                </div>
            </div>

            <div className="py-5 mt-5 px-[60px]">
                <div className="grid grid-cols-4 gap-8">
                    <div className="w-full">
                        <div className="w-full pt-[100%] bg-center bg-no-repeat bg-cover rounded-full"
                            style={{ backgroundImage: `url("http://organie-market.doradothemes.com/img/cms/dorado/aboutus/brandon-1.jpg")` }}
                        />
                        <h3 className='text-center font-[600] text-[2rem] text-[#333]'>
                            Brandon Copperfield
                        </h3>
                        <p className='text-center text-[1.5rem]'>{`Founder & CEO`}</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full pt-[100%] bg-center bg-no-repeat bg-cover rounded-full"
                            style={{ backgroundImage: `url("http://organie-market.doradothemes.com/img/cms/dorado/aboutus/brandon-2.jpg")` }}
                        />
                        <h3 className='text-center font-[600] text-[2rem] text-[#333]'>
                            Ashley Hardy
                        </h3>
                        <p className='text-center text-[1.5rem]'>{`VP Sales and Marketing`}</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full pt-[100%] bg-center bg-no-repeat bg-cover rounded-full"
                            style={{ backgroundImage: `url("http://organie-market.doradothemes.com/img/cms/dorado/aboutus/brandon-3.jpg")` }}
                        />
                        <h3 className='text-center font-[600] text-[2rem] text-[#333]'>
                            Clark Roberts
                        </h3>
                        <p className='text-center text-[1.5rem]'>{`Chief Finance Officer`}</p>
                    </div>
                    <div className="w-full">
                        <div className="w-full pt-[100%] bg-center bg-no-repeat bg-cover rounded-full"
                            style={{ backgroundImage: `url("http://organie-market.doradothemes.com/img/cms/dorado/aboutus/brandon-4.jpg")` }}
                        />
                        <h3 className='text-center font-[600] text-[2rem] text-[#333]'>
                            Gina Kennedy
                        </h3>
                        <p className='text-center text-[1.5rem]'>{`Administrator`}</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 py-8 bg-gray-200 px-[60px]">
                <h1 className='text-[3rem] text-[#333] font-[600] text-center'>How our services bring about success?</h1>
                <div className="grid grid-cols-3 gap-10 px-3 mt-5">
                    <div className="w-full bg-white p-5">
                        <div className="flex items-center">
                            <div className="w-[90px] h-[90px] rounded-full object-cover overflow-hidden mr-5">
                                <img src='http://organie-market.doradothemes.com/img/cms/dorado/aboutus/testimonial-avata-01.jpg' className='w-full' />
                            </div>
                            <div className="flex-[1]">
                                <div className='flex items-center'>
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                </div>
                                <div className="w-full text-[1.5rem] font-[600] mt-1">
                                    <span className='uppercase'>Maria Slews</span> / Web marketing
                                </div>
                            </div>
                        </div>
                        <p className='text-[1.5rem] text-[#777] mt-3'>{`There are thousands of IT service companies in the US.
                             But there’s nothing like @DoradoThemes. Their popularity and reputation are just evident.`}</p>
                    </div>
                    <div className="w-full bg-white p-5">
                        <div className="flex items-center">
                            <div className="w-[90px] h-[90px] rounded-full object-cover overflow-hidden mr-5">
                                <img src='http://organie-market.doradothemes.com/img/cms/dorado/aboutus/testimonial-avata-01.jpg' className='w-full' />
                            </div>
                            <div className="flex-[1]">
                                <div className='flex items-center'>
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                </div>
                                <div className="w-full text-[1.5rem] font-[600] mt-1">
                                    <span className='uppercase'>Maria Slews</span> / Web marketing
                                </div>
                            </div>
                        </div>
                        <p className='text-[1.5rem] text-[#777] mt-3'>{`There are thousands of IT service companies in the US.
                             But there’s nothing like @DoradoThemes. Their popularity and reputation are just evident.`}</p>
                    </div>
                    <div className="w-full bg-white p-5">
                        <div className="flex items-center">
                            <div className="w-[90px] h-[90px] rounded-full object-cover overflow-hidden mr-5">
                                <img src='http://organie-market.doradothemes.com/img/cms/dorado/aboutus/testimonial-avata-01.jpg' className='w-full' />
                            </div>
                            <div className="flex-[1]">
                                <div className='flex items-center'>
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                    <AiFillStar className="text-[1.8rem] text-yellow-500" />
                                </div>
                                <div className="w-full text-[1.5rem] font-[600] mt-1">
                                    <span className='uppercase'>Maria Slews</span> / Web marketing
                                </div>
                            </div>
                        </div>
                        <p className='text-[1.5rem] text-[#777] mt-3'>{`There are thousands of IT service companies in the US.
                             But there’s nothing like @DoradoThemes. Their popularity and reputation are just evident.`}</p>
                    </div>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62523.3784777589!2d108.87276722074036!3d11.643919950753997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170da2610475cbd%3A0xc926a6c630da7c2d!2zTmjGoW4gU8ahbiwgTmluaCBTxqFuLCBOaW5oIFRodeG6rW4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1651807888693!5m2!1svi!2s"
                    height="600"
                    width="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}

export default About