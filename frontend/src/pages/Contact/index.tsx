import React, { FormEvent, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import './styles.css'

import Header from '../../components/Header'
import Input from '../../components/Input'

function Menu() {
  document.title = 'urFood - Entre em contato'

  const history = useHistory() 

  const [hidden, setHidden] = useState(true)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setHidden(false)

    setTimeout(() => {
      setHidden(true)

      history.push('/')
    }, 2000);
  }

  return (
    <>
      <Header />

      <div className={hidden ? "hidden" : "sucessForm" }>
        <div className="animeted">
          <FiCheck className="icon" />

          <h4>Enviado com Sucesso</h4>
        </div>
      </div>

      <main className="form">
        <form onSubmit={handleSubmit}>
          <section className="inputs">
            <Input
              name="email"
              type="email"
              title="E-mail"
            />

            <Input
              name="email"
              title="Nome"
            />

            <Input
              name="subject"
              title="Assunto"
            />
          </section>

          <section className="textarea">
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message"></textarea>

            <button type="submit" className="btn">Enviar</button>
          </section>
        </form>
      </main>
    </>
  )
}

export default Menu