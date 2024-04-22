import axios from 'axios'
import { toast } from 'react-toastify';


const axiosDefault = axios.create({
    baseURL: process.env.REACT_APP_API_END_POINTS,
});

axiosDefault.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error
});


const axiosContent = axios.create({
    baseURL: process.env.REACT_APP_API_END_POINTS,
    headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem("auth"))?.token}`
    },
});

axiosContent.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem("access_token")
        toast.error("Đã hết phiên đăng nhập! Vui lòng đăng nhập lại")
    }
    throw error
});


const axiosForm = axios.create({
    baseURL: process.env.REACT_APP_API_END_POINTS,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    },
});

axiosForm.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem("access_token")
        toast.error("Đã hết phiên đăng nhập! Vui lòng đăng nhập lại")
    }
    throw error
});




export {
    axiosDefault, axiosContent, axiosForm
}