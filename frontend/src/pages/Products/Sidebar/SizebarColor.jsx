
import { memo } from "react"
import { color as colors } from "~/utils/sidebar-params"


function SizebarColor({searchParams, setSearchParams}) {
    const entires = Object.fromEntries([...searchParams])
    const color = searchParams.get("color")
    const handleChange = (e) => {
        entires.color = e.target.value
        setSearchParams(entires)
    }
    return (
        <div className="w-full max-h-[200px] overflow-y-auto">
            {
                colors.map(item => {
                    return (
                        <label htmlFor={item} className="flex items-center h-[40px] px-[0.5rem]" key={item}>
                            <input type="radio" id={item} name="color"  value={item} checked={color === item} onChange={handleChange} className="radio" />
                            <span className="w-[20px] h-[20px] border-[2px] ml-5 border-solid border-gray-700"
                            style={{backgroundColor: `#${item}`}}
                            />
                        </label>
                    )
                })
            }
        </div>
    )
}

export default memo(SizebarColor)