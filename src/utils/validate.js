export const validate=(email,password)=>{
    const isEmailVaild=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailVaild) return "Email is Not Valid!";
    if(!isPasswordValid) return "Password is Not Valid!";
    return null;//means no error in email and password it indicates

}