import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import logo from '../../assets/images/logo.svg'

import MenuNavigation from '../MenuNavigation'

import './styles.css'

function Header() {
  const [hidden, setHidden] = useState(true)
  
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="urFood logo" className="dark-logo" />
      </Link>

      <FiMenu className="icon" onClick={() => setHidden(false)} />
      
      <MenuNavigation hidden={hidden} setHidden={setHidden} />
    </header>
  )
}

export default Header