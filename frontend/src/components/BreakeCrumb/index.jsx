import { Link } from "react-router-dom"
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { Fragment } from "react"



function BreakeCrumb({urls = []}) {

    return (
        <div className="flex px-[6rem] lg:px-[1.5rem]">
            {
                urls.map((item, index, arr) => {
                    let Component = Link
                    let props = {}
                    if (index === arr.length - 1) {
                        Component = "span"
                        props.className = "text-main-text-color inline-block font-[600]"
                    }

                    if (index !== arr.length - 1) {
                        props.className = "through-line inline-block mr-5 font-[600] underline whitespace-nowrap"
                        props.to = item.to
                    }

                    return (
                        <Fragment key={index}>
                            <Component
                                {...props}
                            >
                                {item.name}

                            </Component>
                            {
                                index !== arr.length - 1 && (
                                    <AiOutlineDoubleRight className="mr-5 underline" />
                                )
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default BreakeCrumb