import { sorts } from "~/utils/sidebar-params"



function Order({ searchParams, setSearchParams }) {
    const entires = Object.fromEntries([...searchParams])
    const sort = searchParams.get("sortBy")
    const handleChange = (e) => {
        if(e.target.value) {
            entires.sortBy = e.target.value
        }else {
            if(entires.sortBy){
                delete entires.sortBy
            }
        }
        setSearchParams(entires)
    }
    return (
        <div className="dropdown dropdown-end ml-5">
            <select
                onChange={handleChange}
                value={sort || ""}
                className="h-[30px] min-w-[150px] border-[1px] border-solid border-gray-500 focus:border-gray-700 text-[1.5rem] font-[600] px-[1rem]">
                <option value="">Mặc định</option>
                {
                    sorts.map((item, index) => {
                        return (
                            <option value={item.value} key={index}>{item.name}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Order