
import { prices } from '~/utils/sidebar-params'


function SidebarPrice({searchParams, setSearchParams}) {
  const entires = Object.fromEntries([...searchParams])
  const price = searchParams.get("price")
  const handleChange = (e) => {
      entires.price = e.target.value
      setSearchParams(entires)
  }
  return (
    <div className="w-full max-h-[200px] overflow-y-auto">
      {
        prices.map(item => {
          return (
            <label htmlFor={item.value} className="flex items-center h-[40px] px-[0.5rem] w-full overflow-hidden" key={item.value}>
              <input type="radio" id={item.value} name="price" value={item.value} checked={price == item.value}  className="radio" onChange={handleChange} />
              <span className="text-[1.5rem] font-[600] ml-5 uppercase">{item.name}</span>
            </label>
          )
        })
      }
    </div>
  )
}

export default SidebarPrice