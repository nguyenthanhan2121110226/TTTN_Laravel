

const formatCurrency = (crc) => {
    const result = Number(crc).toLocaleString("en-US") + "đ"
    return result
}


export default formatCurrency