import toast from "react-hot-toast";


export const loginValidate = async (values) => {

    let error = {};

    if (!values.username || values.username.includes(' ') || values.password.includes(' ') || !values.password) {
        error.message = toast.error('Invalid Credentials...');
    }

    return error;
}

export const registerValidate = async (values) => {
    
    let error = {};
    // let {email,username,password} = values;
    return error;

}

export const recoverOtpValidate = async (values) => {

    let alpha = /[a-zA-Z]/ig;
    
    let error = {};
    
    console.log(Number(values.otp));
    
    if (!values.otp) {
        error.otp = toast.error('Invalid OTP');
    }


    else if (Number(values.otp) < 100000 || Number(values.otp) > 999999) {
        error.otp = toast.error('Invalid OTP');
    } 
    
    else if (alpha.test(values.otp)) {
        error.otp = toast.error('Required 6 digit Pin');
    }

    return error;
}


export const resetPasswordValidate = async (values) => {
    
    let error = {};

    let alpha = /[a-zA-Z0-9]/ig;
    
    let pass = values.rpass;
    let cpass = values.rcpass;
    
    if (pass.includes(' ')) {
        error.pass = toast.error("Spaces are invalid. ")
    }

    else if (pass.length < 4 || !alpha.test(pass)) {
        error.pass = toast.error('Password too bad.');
    }

    else if (pass !== cpass) {
        error.cpass = toast.error('Password not matched...');
    }


    return error;

}