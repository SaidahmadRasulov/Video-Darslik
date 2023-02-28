import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../../context/MainContext';
import "./styles.css"

function Profession() {

  const { professions } = useContext(MainContext);

  return (
    <div className='profession'>
      <div className="max">
        <p className='choose_title'>Choose your profession from here...!</p>
        <div className="professions-grid">
          {professions.map(profession => {
            return (
              <NavLink to={`/sections/${profession.id}`} className="nav-link" key={profession.id}>
                <div className="profession-card">
                  <img src={profession.img} alt={`${profession.title}_image`} className="profession-image" />
                  <p className='profession-title'>{profession.title}</p>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profession