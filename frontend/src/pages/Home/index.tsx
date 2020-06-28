import React from 'react'

import Header from '../../components/Header' 
import ContainerImage from '../../components/ContainerImage' 

import image from '../../assets/images/home-background.svg'

import './styles.css'

function Home() {
  document.title = 'urFood - Home'

  return (
    <div id="page-home">
      <Header />

      <ContainerImage 
        image={{ src: image, alt: "Your food in 20 minutes", isImageleft: false }}
        title="Sua comida entregue em até 20 minutos!"
        texts={["Os novos drones da urFood facilita a entrega, fazendo chegar mais rapido em sua casa."]}
        button={{ text: "Ver nosso menu", navigationTo: '/menu' }}
      /> 
    </div>
  )
}

export default Home