import { Link, Redirect } from "react-router-dom";
import { useAuthStore } from "../../store/store.js";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Redirect to={'/'} replace={true}></Redirect>
    }

    return children;
}


export const ProtectRoute = ({ children }) => {
    const username = useAuthStore.getState().auth.username;
    if(!username){
        return <Redirect to={'/'} replace={true}></Redirect>
    }
    return children;
}