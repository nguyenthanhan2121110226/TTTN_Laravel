
const getPaymentMethodName = (method) => {
    const methods = [
        {
            slug: "cash",
            name: "Tiền mặt"
        },
        {
            slug: "momo",
            name: "Ví momo"
        },
        {
            slug: "atm",
            name: "Thẻ ATM"
        },
    ]

    const result = methods.find(item => item.slug === method)
    return result.name
}


const getPaymentStatusName = (stt) => {
    const status = [
        {
            status: 0,
            name: "Chưa thanh toán"
        },
        {
            status: 1,
            name: "Đã thanh toán"
        },
        
    ]

    const result = status.find(item => item.status === stt)
    return result.name

}

const getOrderStatusName = (stt) => {
    const status = [
        {
            status: 1,
            name: "Đã giao hàng"
        },
        {
            status: 2,
            name: "Đang vận chuyển"
        },
        {
            status: 3,
            name: "Đang xử lý"
        },
        {
            status: 4,
            name: "Bị hủy"
        }
        
        
    ]
    const result = status.find(item => item.status === stt)
    return result.name
}


export {
    getOrderStatusName,
    getPaymentMethodName,
    getPaymentStatusName
}