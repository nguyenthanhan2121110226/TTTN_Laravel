import { toast } from "react-toastify";


const validateSignUp = (fullname, email, password, confirmPassword) => {
    let check = true
    if (!fullname || fullname.length < 5) {
        toast.error("Trường họ tên phải lớn hơn 5 ký tự!", {
            theme: "dark"
        })
        check = false
    }

    const emailRegexp = new RegExp(
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    if (!emailRegexp.test(email)) {
        if (!email || email.length === 0) {
            toast.error("Trường email không được để trống!", {
                theme: "dark"
            })
        } else {
            toast.error("Trường email không đúng định dạng! vd: abcdef@gmail.com", {
                theme: "dark"
            })
        }
        check = false
    }
    if (!validatePassword(password)) {
        check = false

    }

    if (confirmPassword !== password) {
        toast.error("Nhập lại mật khẩu không đúng!", {
            theme: "dark"
        })
        check = false
    }

    return check
}



function validatePassword(pw) {
    if (pw.length < 8) {
        toast.error("Mật khẩu phải ít nhất 8 ký tự!", {
            theme: "dark"
        });
        return false
    }
    if (pw.search(/[a-z]/i) < 0) {
        toast.error("Mật khẩu phải chứa ít nhất 1 chữ cái!", {
            theme: "dark"
        });
        return false

    }
    if (pw.search(/[0-9]/) < 0) {
        toast.error("Mật khẩu phải chứa ít nhất 1 chứ số!", {
            theme: "dark"
        });
        return false
    }
    return true
}


const validateSignIn = (email, password) => {
    let check = true
    const emailRegexp = new RegExp(
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    if (!emailRegexp.test(email)) {
        if (!email || email.length === 0) {
            toast.error("Trường email không được để trống!", {
                theme: "dark"
            })
        } else {
            toast.error("Trường email không đúng định dạng! vd: abcdef@gmail.com", {
                theme: "dark"
            })
        }
        check = false
    }

    if (password.length < 5) {
        toast.error("Mật khẩu phải lớn hơn 5 ký tự!", {
            theme: "dark"
        })
        check = false
    }

    return check

}

export {
    validateSignUp,
    validateSignIn
}