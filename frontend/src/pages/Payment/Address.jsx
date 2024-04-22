import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { usePayment } from "~/hooks/usePayment"



function Address() {
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [wards, setWards] = useState([])

    const {
        province,
        setProvince,
        district,
        setDistrict,
        ward,
        setWard,
    } = usePayment()

    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/?depth=3")
            .then((res) => {
                setProvinces(res.data)
            })
    }, [])

    const handleChangeProvince = (e) => {
        if (e.target.value) {
            const selectProvince = provinces.find(item => item.code == e.target.value)
            setDistricts(selectProvince.districts)
            setProvince({ code: selectProvince.code, name: selectProvince.name })
        } else {
            setDistricts([])
            setProvince("")
        }
    }

    const handleChangeDistrict = (e) => {
        if (e.target.value) {
            const selectDistrict = districts.find(item => item.code == e.target.value)
            setWards(selectDistrict.wards)
            setDistrict({ code: selectDistrict.code, name: selectDistrict.name })
        } else {
            setWards([])
            setDistrict("")
        }
    }


    const handleChangeWards = (e) => {
        if (e.target.value) {
            const selectWard = wards.find(item => item.code == e.target.value)
            setWard({ code: selectWard.code, name: selectWard.name })
        } else {
            setWard("")
        }
    }


    return (
        <Fragment>
            <div className="mt-5">
                <label htmlFor="name" className="flex items-center font-[600] text-[1.5rem]">
                    <span className="mr-5 whitespace-nowrap">Tỉnh/thành phố </span>
                    <div className='flex flex-1 justify-end'>
                        <select
                            onChange={handleChangeProvince}
                            value={province.code ?? ""}
                            className="w-[250px] lg:w-full h-[40px] border-[1px] border-solid border-[#cdcdcd] px-3">
                            <option value="">{`[--- Chọn tỉnh/thành phố ---]`}</option>
                            {
                                provinces.map(item => (
                                    <option value={item.code} key={item.code}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </label>
            </div>
            <div className="mt-5">
                <label htmlFor="name" className="flex items-center font-[600] text-[1.5rem]">
                    <span className="mr-5 whitespace-nowrap">Quận/huyện </span>
                    <div className='flex flex-1 justify-end'>
                        <select onChange={handleChangeDistrict} value={district.code ?? ""} className="w-[250px] lg:w-full h-[40px] border-[1px] border-solid border-[#cdcdcd] px-3">
                            <option value="">{`[--- Chọn quận/huyện ---]`}</option>
                            {
                                districts.map(item => (
                                    <option value={item.code} key={item.code}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </label>
            </div>
            <div className="mt-5">
                <label htmlFor="name" className="flex items-center font-[600] text-[1.5rem]">
                    <span className="mr-5 whitespace-nowrap">Phường/xã </span>
                    <div className='flex flex-1 justify-end'>
                        <select onChange={handleChangeWards} value={ward.code ?? ""} className="w-[250px] lg:w-full h-[40px] border-[1px] border-solid border-[#cdcdcd] px-3">
                            <option value="">{`[--- Chọn phường/xã ---]`}</option>
                            {
                                wards.map(item => (
                                    <option value={item.code} key={item.code}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </label>
            </div>
        </Fragment>
    )
}

export default Address