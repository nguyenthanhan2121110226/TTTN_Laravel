import React from 'react'
import { routes as routesConfig } from './config'


const Homepage = React.lazy(() => import("./pages/Homepage"))
const AboutPage = React.lazy(() => import("./pages/About"))
const SignInPage = React.lazy(() => import("./pages/Auth/SignIn"))
const SignUpPage = React.lazy(() => import("./pages/Auth/SignUp"))
const CartPage = React.lazy(() => import("./pages/Cart"))
const ContactPage = React.lazy(() => import("./pages/Contact"))
const PaymentPage = React.lazy(() => import("./pages/Payment"))
const PostDetailPage = React.lazy(() => import("./pages/Posts/PostDetail"))
const PostsPage = React.lazy(() => import("./pages/Posts"))
const ProductDetailPage = React.lazy(() => import("./pages/ProductDetail"))
const ProductsPage = React.lazy(() => import("./pages/Products"))
const ProfilePage = React.lazy(() => import("./pages/Profile"))
const SearchPage = React.lazy(() => import("./pages/Search"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const ForgotPassword = React.lazy(() => import("./pages/Auth/ForgotPassword"))
const ChangePassword = React.lazy(() => import("./pages/Auth/ChangePassword"))



const routes = [
    {
        to: routesConfig.home,
        component: Homepage
    },
    {
        to: routesConfig.about,
        component: AboutPage
    },
    {
        to: routesConfig.products,
        component: ProductsPage
    },
    {
        to: routesConfig.productDetail,
        component: ProductDetailPage
    },
    {
        to: routesConfig.posts,
        component: PostsPage
    },
    {
        to: routesConfig.postDetail,
        component: PostDetailPage
    },
    {
        to: routesConfig.cart,
        component: CartPage
    },
    {
        to: routesConfig.payment,
        component: PaymentPage
    },
    {
        to: routesConfig.signIn,
        component: SignInPage
    },
    {
        to: routesConfig.signUp,
        component: SignUpPage
    },
    {
        to: routesConfig.contact,
        component: ContactPage
    },
    {
        to: routesConfig.profile,
        component: ProfilePage
    },
    {
        to: routesConfig.search,
        component: SearchPage
    },
    {
        to: routesConfig.notFound,
        component: NotFound
    },
    {
        to: routesConfig.forgotPasswordToken,
        component: ChangePassword
    },
    {
        to: routesConfig.forgotPassword,
        component: ForgotPassword
    },
    
]


export default routes