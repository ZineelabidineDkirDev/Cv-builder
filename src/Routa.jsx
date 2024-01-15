import { Navigate, Outlet } from 'react-router-dom';

export default function Routa({ children }) {
    if(localStorage.getItem("connected")==null){
        localStorage.setItem("connected","")
    }
    if(localStorage.getItem("connected").length>0){
        return <Outlet />
    }
    else{
        return <Navigate to="/login" replace />
    }    
}