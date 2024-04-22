import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { addProfileActions } from "~/redux/actions/profileActions"
import { axiosDefault } from "~/utils/axios"
import imageUrl from "~/utils/imageUrl"
import ModalChangePw from "./ModalChangePw"

function Edit() {
  const profile = useSelector(state => state.profile.data)
  const [fullname, setFullname] = useState(profile.fullname)
  const [email, setEmail] = useState(profile.email)
  const [phone, setPhone] = useState(profile.phone ?? "")
  const [address, setAddress] = useState(profile.address ?? "")
  const [date, setDate] = useState(profile.date ?? "")
  const [imgUrl, setImgUrl] = useState(imageUrl(profile.avatar))
  const [image, setImage] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {

    return () => {
      image && URL.revokeObjectURL(imgUrl)
    }
  }, [imgUrl])


  const handleImage = (e) => {
    if (e.target.value) {
      const file = e.target.files[0]
      setImgUrl(URL.createObjectURL(file))
      setImage(file)
    }
  }


  const handleUpdate = () => {
    const formData = new FormData()
    formData.append("fullname", fullname)
    formData.append("email", email)
    formData.append("fullname", fullname)
    formData.append("phone", phone)
    formData.append("address", address)
    formData.append("date", date)
    formData.append("role", 0)
    formData.append("status", 1)
    formData.append("image", image)

    axiosDefault.post(`user/update/${profile.id}`, formData)
      .then((res) => {
        dispatch(addProfileActions(res.data))
        toast.success("Cập nhập thành công!", {
          theme: "dark",
          position: "top-center"
        })
      })
      .catch(() => {
        toast.error("Cập nhập không thành công!", {
          theme: "dark",
          position: "top-center"
        })
      })
  }


  return (
    <div className="w-full">
      <h1 className="text-[2rem] uppercase">Chỉnh sửa thông tin cá nhân</h1>
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-[2.4rem] mt-5">
        <div className="w-full">
          <div className="w-full">
            <label htmlFor="name" className="block text-[1.5rem] font-[600]">Họ và tên:</label>
            <input
              type="text"
              value={fullname}
              onChange={e => setFullname(e.target.value)}
              id="name"
              className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2" />
          </div>
          <div className="w-full mt-5">
            <label htmlFor="email" className="block text-[1.5rem] font-[600]">Email: </label>
            <div className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2 flex items-center">
              {email}
            </div>
          </div>
          <div className="w-full mt-5">
            <label htmlFor="phone" className="block text-[1.5rem] font-[600]">Số điện thoại:</label>
            <input
              type="tel"
              id="phone"
              onChange={e => setPhone(e.target.value)}
              value={phone}
              className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2" />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label htmlFor="date" className="block text-[1.5rem] font-[600]">Ngày sinh:</label>
            <input
              type="date"
              id="date"
              value={new Date(date)}
              onChange={(e) => setDate(e.target.value)}
              className="h-[40px] w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2" />
          </div>
          <div className="w-full mt-5">
            <label htmlFor="address" className="block text-[1.5rem] font-[600]">Địa chỉ:</label>
            <textarea id="address"
              rows={3}
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full border-[1px] border-solid border-[#cbcbcb] rounded-md px-2"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <label htmlFor="date" className="block text-[1.5rem] font-[600]">Avatar:</label>
            <div className="flex justify-center mt-5 mb-3">
              <div className="w-[30%] rounded-full overflow-hidden">
                <img src={imgUrl} className="w-full h-full object-contain" />
              </div>
            </div>
            <input
              type="file"
              onChange={handleImage}
              className="w-full border-[1px] border-solid border-[#cbcbcb] rounded-md" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center flex-wrap">
        <button
          onClick={() => handleUpdate()}
          className="btn button-light-theme-important py-[1rem] px-[2rem] font-[600] lg:mt-10 text-[2rem] mr-5">
          Cập nhập
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="btn button-dark-theme-important py-[1rem] px-[2rem] font-[600] lg:mt-10 text-[2rem]">
          Thay đổi mật khẩu
        </button>
      </div>
      {
        showModal && <ModalChangePw onClose={() => setShowModal(false)} />
      }
    </div>
  )
}

export default Edit