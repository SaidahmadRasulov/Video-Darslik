import React, { useContext } from 'react';
import "./styles.css";
import Photo from "../../media/banner.svg"
import { MainContext } from '../../context/MainContext';
import { NavLink } from 'react-router-dom';

function Header() {

    const {professions, setProfessions} = useContext(MainContext);


    return (
        <div className='header'>
            <div className="max header-grid">
                <div className="item">
                    <img src={Photo} className="header-img" alt="da" />
                </div>
                <div className="item flex_center">
                    <div>
                        <p className='main-title'>Train your employees</p>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio, voluptates vero ipsa non a iste nostrum dolore voluptatibus dignissimos consequuntur, qui quam porro recusandae cupiditate rem. Nostrum, architecto repellat?</p>
                        <button className='header-btn'>
                            <NavLink to="/profession" className="nav-link">Get Started</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header