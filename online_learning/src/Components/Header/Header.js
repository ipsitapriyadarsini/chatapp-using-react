import React from 'react'
import Avatar from "@mui/material/Avatar";
import ipsita from './ipsita.jpg'
import './Header.scss'

const Header = () => {
  return (
    <>
      <header>
        <h1>Gobal Schedule</h1>
        <div className="avatar">
         <Avatar
        style={{ border: "1px solid black", margin: 10 }}
        alt="Mypicture"
        src={ipsita}
      />
          <h3>Artiash Academy</h3>
        </div>
      </header>
    </>
  )
}

export default Header
