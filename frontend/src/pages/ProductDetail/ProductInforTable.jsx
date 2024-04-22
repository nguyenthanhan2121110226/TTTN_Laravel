import PropTypes from 'prop-types'
import { Fragment } from 'react'
import formatDate from '~/utils/formatDate'

function ProductInforTable({ product }) {
    return (
        <div className="flex justify-center">
            <table className="w-full border-collapse border border-slate-400 bg-transparent max-w-[700px]">
                {/* head */}
                <thead className="bg-transparent ">
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300 text-main-dark-text-color font-[600] text-[2rem]">STT</th>
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300 text-main-dark-text-color font-[600] text-[2rem]">Trường</th>
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300 text-main-dark-text-color font-[600] text-[2rem]">Giá trị</th>
                    </tr>
                </thead>
                <tbody className="bg-transparent">
                    {/* row 1 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">1</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Mã đơn hàng</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{product.id}</td>
                    </tr>

                    {/* row 3 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">3</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Thân giày</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{product.body}</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">4</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Chiều cao gót giày</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{product.heel_height}</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">5</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Xuất xứ</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{product.origin}</td>
                    </tr>
                    {/* row 6 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">6</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Số lượng trong kho</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{product.quantity}</td>
                    </tr>
                    {/* row 7 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">7</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Khuyến mãi</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{Math.round(product.sale)}%</td>
                    </tr>
                    {/* row 8 */}
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">8</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Ngày nhập kho</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">{formatDate(product.created_at)}</td>
                    </tr>
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">8</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Danh mục sản phẩm</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">
                            {
                                product.categories.map((item, index, arrs) => (
                                    <Fragment key={index}>
                                        {item.name + (index === arrs.length - 1 ? "." : ", ")}
                                    </Fragment>
                                ))
                            }
                        </td>
                    </tr>
                    <tr className="bg-transparent">
                        <th className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">8</th>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">Thẻ</td>
                        <td className="bg-transparent border px-[1rem] py-[1.2rem] border-slate-300">
                            Chưa cập nhập
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

ProductInforTable.propTypes = {
    product: PropTypes.object.isRequired
}

ProductInforTable.defaultProps = {
    product: {
        id: "Chưa cập nhập",
        body: "Chưa cập nhập",
        heel_height: "Chưa cập nhập",
        material: "Chưa cập nhập",
        origin: "Chưa cập nhập",
        quantity: 0,
        sale: 0,
        created_at: "Chưa cập nhập",
        categories: [],
        tags: "Chưa cập nhập"
    }
}

export default ProductInforTable