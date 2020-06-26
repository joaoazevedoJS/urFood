import React from 'react'
import { FiMenu } from 'react-icons/fi'

import logo from '../../assets/images/logo.svg'

import './styles.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="urFood logo" />

      <FiMenu className="icon" />
    </header>
  )
}

export default Header