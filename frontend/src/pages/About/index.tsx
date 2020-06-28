import React from 'react'

import './styles.css'

import Header from '../../components/Header'
import ContainerImage from '../../components/ContainerImage'

import map from '../../assets/images/map.svg'
import team from '../../assets/images/team.svg'
import win from '../../assets/images/win.svg'

function Menu() {
  document.title = 'urFood - Sobre Nós'

  return (
    <main className="about-us">
      <Header />

      <ContainerImage
        background={{ firstFullScreen: true }}
        image={{ src: map, alt: 'urFood location', isImageleft: true }}
        title="urFood se encontra em mais de 10 países diferentes."
        texts={[
          `urFood se estabeleceu em 2005 no Estados Unidos, com o cresimento de 
          nosso restaurante começamos abrir outros restaurante na America Latina`,
        ]}
      />

      <ContainerImage
        background={{ color: "#f7f7f7" }}
        image={{ src: team, alt: 'urFood Team' }}
        title="Prêmios internacionais de qualidade"
        texts={[
          "Acreditamos na melhoria contínua: como indivíduos, empresa e sociedade.",
          `Para nós, o futuro é construído a partir das constantes melhorias que realizamos em 
          nosso dia a dia e pela nossa capacidade de identificar oportunidades e transformá-las em 
          projetos concretos.`,
        ]}
      />

      <ContainerImage
        image={{ src: win, alt: 'urFood wins', isImageleft: true }}
        title="Prêmios internacionais de qualidade"
        texts={[
          "Um trabalho que resulta em cada refeição feita por nossos profissionais.",
          "Uma empresa com relacionamentos sólidos e de participação crescente nos variados segmentos alimentício."
        ]}
      />
    </main>
  )
}

export default Menu