import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '~/config'
import { axiosDefault } from '~/utils/axios'

function SidebarBrand() {

  const [list, setList] = useState([])
  useEffect(() => {
    axiosDefault.get("brand")
      .then((res) => {
        const data = res.data.data
        setList(data)
      })
  }, [])

  return (
    <div className='w-full font-[600] max-h-[200px] overflow-y-auto'>
      {
        list.map(item => (
          <Link key={item.id} to={routes.products + "?brand=" + item.slug} className='px-[0.5rem] h-[40px] flex items-center uppercase'>{item.name}</Link>
        ))
      }
    </div>
  )
}

export default SidebarBrand