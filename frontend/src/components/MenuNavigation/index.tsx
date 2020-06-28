import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/images/logo-white.svg'

interface Props {
  hidden: boolean,
  setHidden: Function
}

const MenuNavigation: FC<Props> = ({ hidden, setHidden }) => {
  function handleSelectedLink(to: string) {
    const path = document.location.pathname

    return path === to ? 'selected' : ''
  }

  return (
    <nav className={hidden ? "hidden" : "container"} >
      <div className="backgroundClose" onClick={() => setHidden(true)} />

      <section>
        <header>
          <Link to="/">
            <img src={logo} alt="urFood logo" />
          </Link>

          <FiX className="close" onClick={() => setHidden(true)} />
        </header>

        <main className="links">
          <Link to="/" className={handleSelectedLink("/")}>Home</Link>
          <Link to="/menu" className={handleSelectedLink("/menu")}>Refeições</Link>
          <Link to="/about-us" className={handleSelectedLink("/about-us")}>Sobre Nós</Link>
          <Link to="/contact-us" className={handleSelectedLink("/contact-us")}>Entre em contato</Link>
        </main>

        <footer>
          <a href="https://github.com/joaoazevedoJS" target="_blank" rel="noopener noreferrer">By João Azevedo</a>
        </footer>
      </section>
    </nav>
  )
}

export default MenuNavigation