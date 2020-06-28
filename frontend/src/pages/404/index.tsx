import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import './styles.css'

import PageNotFound from '../../assets/images/PageNotFound.svg'

function Menu() {
  document.title = 'urFood - Page Not Found'

  return (
    <div>
      <Header />

      <main className="notFound-container">
        <img src={PageNotFound} alt="Page Not Found" className="desktop-background" />
        <img src={PageNotFound} alt="Page Not Found" className="mobile-background" />

        <section>
          <h1>O que você procura?</h1>
          <Link to="/">Página Inicial</Link>
          <Link to="/menu">As refeições mais famosas</Link>
          <Link to="/about-us">Conheça um pouco a urFood</Link>
          <Link to="/contact-us">Entre em contato</Link>
        </section>
      </main>
    </div>
  )
}

export default Menu