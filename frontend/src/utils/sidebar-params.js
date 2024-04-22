
const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44]
const color = ["0F0E0E", "FF0000", "73777B", "F73D93", "FFD700", "8E3200", "590696", "FF5B00", "357C3C", "F9F9F9", "242F9B"]
const prices = [
    {
        name: "Dưới 500 nghìn",
        value: "0to500000",
    },
    {
        name: "500k đến 1 triệu",
        value: "500000to1000000",
    },
    {
        name: "1 triệu đến 3 triệu",
        value: "1000000to3000000",
    },
    {
        name: "3 triệu Đến 5 triệu",
        value: "3000000to5000000",
    },
    {
        name: "5 triệu Đến 10 triệu",
        value: "5000000to10000000",
    },
    {
        name: "10 triệu Đến 15 triệu",
        value: "10000000to15000000",
    },
    {
        name: "Trên 15 triệu",
        value: "15000000to100000000",
    }
]

const sorts = [
    {
        name: "Hàng mới nhất",
        value: "date:desc"
    },
    {
        name: "Hàng cũ nhất",
        value: "date:asc"
    },
    {
        name: "Giá từ cao đến thấp",
        value: "price:desc"
    },
    {
        name: "Giá từ thấp đến cao",
        value: "price:asc"
    },
    {
        name: "Tên từ A -> Z",
        value: "name:asc"
    },
    {
        name: "Tên từ Z -> A",
        value: "name:desc"
    },
    {
        name: "Khuyến mãi nhiều nhất",
        value: "sale:desc"
    },
    {
        name: "Khuyến mãi ít nhất",
        value: "sale:asc"
    },
]



export {
    sizes,
    color,
    prices,
    sorts
}