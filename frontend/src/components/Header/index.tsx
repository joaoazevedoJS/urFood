import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import logo from '../../assets/images/logo.svg'

import MenuNavigation from '../MenuNavigation'

import './styles.css'

function Header() {
  const [hidden, setHidden] = useState(true)
  const [fixedHeader, setFixedHeader] = useState(false)

  useEffect(() => {
    document.body.onscroll = handleScroll
    
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  function handleScroll() {
    // for Safari
    const body = document.body

    // for Chrome, Firefox, IE and Opera
    const element = document.documentElement

    if (element.scrollTop > 250 || body.scrollTop > 250) {
      setFixedHeader(true)
    } else {
      setFixedHeader(false)
    }
  }

  return (
    <header className={fixedHeader ? 'fixed' : '' } >
      <Link to="/">
        <img src={logo} alt="urFood logo" className="dark-logo" />
      </Link>

      <FiMenu className="icon" onClick={() => setHidden(false)} />
      
      <MenuNavigation hidden={hidden} setHidden={setHidden} />
    </header>
  )
}

export default Header