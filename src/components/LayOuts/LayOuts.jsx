import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from "react-router-dom"

export default function LayOuts({ userData, setUserData }) {
    const navigate = useNavigate()
    function LogOut() {
        localStorage.removeItem("UserData")
        setUserData(null);
        navigate('/login')
    }
    return <>

        <NavBar userData={userData} LogOut={LogOut} />
        <div className="container">
            <Outlet />
        </div>
        <Footer />

    </>
}
