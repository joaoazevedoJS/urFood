import React from 'react'

import Header from '../../components/Header'
import Meal from '../../components/Meal'

import Chef from '../../assets/images/Chef.svg'
import Cutlery from '../../assets/images/cutlery.svg'
import Time from '../../assets/images/time.svg'
import Meal1 from '../../assets/images/meals/meals1.png'
import Meal2 from '../../assets/images/meals/meals2.png'
import Meal3 from '../../assets/images/meals/meals3.png'
import Meal4 from '../../assets/images/meals/meals4.png'


import './styles.css'

function Menu() {
  document.title = 'urFood - Refeições'

  return (
    <>
      <Header />

      <section className="container">
        <img src={Chef} alt="urFood Chef" className="desktop-background" />
        <img src={Chef} alt="urFood Chef" className="mobile-background" />

        <div className="info-container">
          <div className="info">
            <img src={Time} alt="time" />
            <p>Sua refeições pronta em apenas 20 minutos e entregues em diretamenta em sua casa.</p>
          </div>

          <div className="info">
            <img src={Cutlery} alt="cutlery" />
            <p>São cincos chefes para preparar sua refeição, para que você possa pedir o que você quiser!</p>
          </div>
        </div>
      </section>

      <main className="meals">
        <Meal
          title="urPizza"
          description="A pizza mais pedida pelos nossos clientes, ela é feita 
          pelo nosso chefe chamado Jane Cooper, ele veio direta da Itália para 
          entregar a melhor pizza para você!"
          image={{ src: Meal1, alt: 'Pizza' }}
        />

        <Meal
          title="urPizza"
          description="A pizza mais pedida pelos nossos clientes, ela é feita 
          pelo nosso chefe chamado Jane Cooper, ele veio direta da Itália para 
          entregar a melhor pizza para você!"
          image={{ src: Meal2, alt: 'Pizza' }}
        />

        <Meal
          title="urPizza"
          description="A pizza mais pedida pelos nossos clientes, ela é feita 
          pelo nosso chefe chamado Jane Cooper, ele veio direta da Itália para 
          entregar a melhor pizza para você!"
          image={{ src: Meal3, alt: 'Pizza' }}
        />

        <Meal
          title="urPizza"
          description="A pizza mais pedida pelos nossos clientes, ela é feita 
          pelo nosso chefe chamado Jane Cooper, ele veio direta da Itália para 
          entregar a melhor pizza para você!"
          image={{ src: Meal4, alt: 'Pizza' }}
        />
      </main>
    </>
  )
}

export default Menu