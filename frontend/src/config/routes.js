



const routes = {
    home: "/",
    products: "/san-pham",
    productDetail: "/san-pham/:slug",
    signIn: "/dang-nhap",
    signUp: "/dang-ky",
    about: "/gioi-thieu",
    posts: "/bai-viet",
    postDetail: "/bai-viet/:slug",
    cart: "/gio-hang",
    payment: "/thanh-toan",
    contact: "/lien-he",
    profile: "/thong-tin-ca-nhan/*",
    profileStringRoute: "/thong-tin-ca-nhan",
    editProfile: "",
    orders: "/don-mua",
    orderDetails: "/don-mua/:id",
    vouchers: "/vouchers",
    search: "/tim-kiem",
    forgotPassword: "/quen-mat-khau",
    forgotPasswordToken: "/quen-mat-khau/:token",
    admin: "/admin",
    notFound: "*",

}

export default routes