import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import {  Navigate } from 'react-router-dom'

import { routes as routesConfig } from '~/config'
import ListOrder from './ListOrder'
import Form from './Form'
import { PaymentProvider } from '~/hooks/usePayment'
import Caculator from './Caculator'



function Payment() {
    const profile = useSelector(state => state.profile.data)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if (!profile) {
        return (
            <div className="w-screen h-screen overflow-hidden z-30">
                <Navigate to={routesConfig.signIn} />
            </div>
        )
    }
    return (
        <PaymentProvider>
            <div className="fixed top-0 left-0 bottom-0 right-0 z-[110] bg-second-light-bg-color">
                <div className="w-full h-full lg:overflow-y-auto">
                    <div className="pr-[37%] lg:pr-[1.5rem] py-[80px] pl-[6rem] lg:pl-[1.5rem] bg-second-light-bg-color xl:h-full">
                        <Form />
                    </div>
                    <div className="w-[37%] lg:w-full xl:fixed xl:top-0 xl:right-0 xl:bottom-0 bg-main-light-bg-color xl:h-full pl-[2.4rem] pr-[6rem] lg:pr-[2.4rem] lg:py-[2.4rem]">
                        <ListOrder />
                        <div className="h-[1px] bg-[#cdcdcd] my-5" />
                        <Caculator />
                    </div>
                </div>
            </div>
        </PaymentProvider>

    )
}

export default Payment