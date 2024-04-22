
import { memo } from 'react'
import { sizes } from '~/utils/sidebar-params'

function SidebarSize({searchParams, setSearchParams}) {
    const entires = Object.fromEntries([...searchParams])
    const size = searchParams.get("size")
    const handleChange = (e) => {
        entires.size = e.target.value
        setSearchParams(entires)
    }
    return (
        <div className="w-full max-h-[200px] overflow-y-auto">
            {
                sizes.map(item => {
                    return (
                        <label htmlFor={item} className="flex items-center h-[40px] px-[0.5rem]" key={item}>
                            <input type="radio" id={item} name="size" value={item} checked={size == item} className="radio" onChange={handleChange} />
                            <span className="text-[1.5rem] font-[600] ml-5">Size {item}</span>
                        </label>
                    )
                })
            }
        </div>
    )
}

export default memo(SidebarSize)