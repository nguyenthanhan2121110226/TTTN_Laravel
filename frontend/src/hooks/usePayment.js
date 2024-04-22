import { createContext, useContext, useState } from 'react'
import { useSelector } from 'react-redux'



const PaymentContext = createContext()


const PaymentProvider = ({ children }) => {
    const profile = useSelector(state => state.profile.data)
    const [fullname, setFullName] = useState(profile.fullname)
    const [phone, setPhone] = useState(profile.phone ?? "")
    const [note, setNote] = useState("")
    const [province, setProvince] = useState("")
    const [district, setDistrict] = useState("")
    const [ward, setWard] = useState("")
    const [methodPayment, setMethodPayment] = useState("cash")

    const state = {
        fullname,
        setFullName,
        phone,
        setPhone,
        note,
        setNote,
        province,
        setProvince,
        district,
        setDistrict,
        ward,
        setWard,
        methodPayment,
        setMethodPayment
    }

    return (
        <PaymentContext.Provider value={state}>
            {children}
        </PaymentContext.Provider>
    )
}

const usePayment = () => {
    return useContext(PaymentContext)
}


export {
    PaymentProvider,
    usePayment
}