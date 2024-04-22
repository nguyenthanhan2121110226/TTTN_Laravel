


function Admin() {
    return (
        <div className="h-[calc(100vh_-_90px)] flex justify-center items-center flex-wrap">
            <span className="text-[2rem] font-[600]">
                Đang chuyển hướng trang sang:
            </span>
            <p className="text-[1.5rem] font-[600] text-main-text-color ml-2">
                {window.location.href = "https://nttshop-admin.netlify.app/"}
            </p>
            <span className="text-[2rem] font-[600]">Vui lòng đợi...</span>
        </div>
    )
}

export default Admin