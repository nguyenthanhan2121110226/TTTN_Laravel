const checkVoucher = (date) => {
    const currentDate = new Date().getTime()
    const voucherDate = new Date(date.toString()).getTime()
    if (currentDate > voucherDate) { return false }
    return true
}


export default checkVoucher