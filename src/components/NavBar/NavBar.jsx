import { NavLink } from 'react-router-dom'
import './NavStyle.module.css'
import { useRef, useEffect, useState } from 'react'

export default function NavBar({ userData, LogOut }) {
    return (
        <>
            <nav  className="navbar navbar-expand-lg  p-0">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold text-white fs-3" href="#"> Noxe </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNav">
                        <ul className="navbar-nav justify-content-end w-100  ">
                            {!userData ? <ul className='list-unstyled d-flex justify-content-center align-items-center '>
                                <li className="nav-item d-flex align-items-center text-white ">
                                    <i className='px-2 fab fa-facebook-f'></i>
                                    <i className='px-2 fab fa-instagram'></i>
                                    <i className='px-2 fab fa-twitter'></i>
                                    <i className='px-2 fab fa-spotify'></i>
                                    <i className='px-2 fab fa-youtube'></i>
                                </li>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white nav-link"
                                        }
                                        to={'/Register'} >REGISTER</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white nav-link"
                                        }
                                        to={'/login'} >LOGIN</NavLink>
                                </li>
                            </ul> : <ul className='list-unstyled d-flex justify-content-center align-items-center '>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded  "
                                                : "text-white nav-link"
                                        }
                                        to={'/'} >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white  nav-link"
                                        }
                                        to={'/Movies'} >
                                        Movies
                                    </NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white nav-link"
                                        }
                                        to={'/tv'} >TV</NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-dark bg-white nav-link rounded "
                                                : "text-white nav-link"
                                        }
                                        to={'/people'} >People</NavLink>
                                </li>
                                <li onClick={LogOut} className="nav-item text-white  ">
                                    LOGOUT
                                </li>
                            </ul>}
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
