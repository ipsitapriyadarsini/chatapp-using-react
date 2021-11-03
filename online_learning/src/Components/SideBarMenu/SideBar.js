import React from 'react'
import { SideBarData } from './SideBarData'
import './SideBar.scss'
import Triangle_Logo from './Triangle_Logo.png'

const SideBar = () => {
  return (
    <>
      <nav className="nav-menu">
        <p className="logo">
          <img src={Triangle_Logo} alt="logo" />
        </p>
        <ul className="nav-menu-items">
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = val.path
                }}
              >
                <a
                  href={val.path}
                  id={window.location.pathname === val.path ? 'active' : ''}
                >
                  <span id="icon">{val.icon}</span>
                  <span id="title">{val.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default SideBar
