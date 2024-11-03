import toast from 'react-hot-toast';
import { authenticate } from './helper.js';

/* Validate login page phonenumber */
// export async function phonenumberValidate(values){
//     const errors = phonenumberVerify({}, values);

//     return errors;
// }

/* validate phonenumber */
export async function phonenumberVerify(error = {}, values){
    const numberonly = /^\d{10}$/
    if(!values.phonenumber){
        error.phonenumber = toast.error('Phone Number Required');
    }else if(values.phonenumber.includes(' ')){
        error.phonenumber = toast.error('Invalid Phone Number')
    }else if(values.phonenumber.length < 10){
        error.phonenumber = toast.error('Phone Number must have ten-digits')
    }else if(!numberonly.test(values.phonenumber)){
        error.phonenumbr = toast.error('Only Enter Digits')
    }
    return error;
}

/* Validate login page username */
export async function usernameValidate(values){
        const errors = usernameVerify({}, values);


        if(values.username){
            const{ status } =await authenticate(values.username);
            if(status !== 200){
                errors.exist = toast.error('User does not exist!')
            }
        }
        return errors;
}

/* Validate login page password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

// validate reset password
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}

// validate register form
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

/** validate profile page */
export async function profileValidation(values){
    const errors = phonenumberVerify({}, values);

    return errors;
}


// validate username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required !');
    }else if(values.username.includes(' ')){
        error.username = toast.error('Invalid Username !');
    }
    //else if(values.phonenumber.length < 10){
    //     error.phonenumber = toast.error('Phone Number must have ten-digits')
    // }else if(!numberonly.test(values.phonenumber)){
    //     error.phonenumbr = toast.error('Only Enter Digits')
    // }
    return error;
}

// validate password
function passwordVerify(errors = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        errors.password = toast.error('Password Required !');
    }else if(values.password.includes(' ')){
        errors.password = toast.error('Wrong Password !');
    }
    else if(values.password.length < 4){
        errors.password = toast.error('Password must be more than 4 character long!');
    }
    else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password must have Special Characters!');
    }

    return errors;
}

// validate email
function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}


// validate carplate
export async function carnumber(error = {}, values){
    const cnum = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
    if(!values.carplate){
        error.carplate = toast.error("Please Enter Car Plate Number...!");
    }else if(!cnum.test(values.carplate)){
        error.carplate = toast.error("Invalid Car Plate Number...!")
    }

    return error;
}
export async function carnumberValidate(values){
    const errors = carnumber({}, values);

    if(values.carplate){
        
            errors.exist = toast.error('Car Plate Number does not exist!')
        
    }
    return errors;
}

// validate pincode
export async function pincodes(error = {}, values){
    const pin = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if(!values.pinnumber){
        error.pinnumber = toast.error("Please Enter pincode...!");
    }else if(!pin.test(values.pinnumber)){
        error.pinnumber = toast.error("Invalid pincode...!")
    }
    return error;
}
export async function pincodeValidate(values){
    const errors = pincodes({}, values);
    if(values.pinnumber){
        errors.exist = toast.error('Please use the pincode of India...')
    }
    return errors;
}

// indian driving license - HR-0619850034761
// export async function license(error = {}, values){
//     const driv = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
//     if(!values.licensenumber){
//         error.licensenumber = toast.error("Please Enter License...!");
//     }else if(!driv.test(values.licensenumber)){
//         error.licensenumber = toast.error("Invalid pincode format...!")
//     }
//     return error;
// }
// export async function dlValidate(values){
//     const errors = license({}, values);
//     if(values.licensenumber){
//         errors.exist = toast.error('Please use the pincode of India...')
//     }
//     return errors;
// }