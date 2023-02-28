import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styles.css";

function NavbarC() {
    return (
        <div className='navbar'>
            <div className="max navbar_flex">
                <div className="site-logo">
                    <span>Site Logo</span>
                </div>
                <ul className="navigation">
                    <li>
                        <NavLink to="/" className={isActive => isActive.isActive ? "active-link" : "link"}>Asossiy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profession" className={isActive => isActive.isActive ? "active-link" : "link"}>Yonalishlar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/section" className={isActive => isActive.isActive ? "active-link" : "link"}>Bolumlar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={isActive => isActive.isActive ? "active-link" : "link"}>Hizmatlar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutUs" className={isActive => isActive.isActive ? "active-link" : "link"}>Biz Hakimizda</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={isActive => isActive.isActive ? "active-link" : "link"}>Aloqa</NavLink>
                    </li>
                </ul>
                <div className="profile flex_center">
                    <div className='profile-img flex_center'>
                        <i className='bi bi-person'></i>
                    </div>
                    <i className='bi bi-caret-down fs-3'></i>
                </div>
            </div>
        </div>
    )
}

export default NavbarC