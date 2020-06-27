import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

interface Props {
  image: {
    src: string,
    alt: string,
    isImageleft?: boolean,
  },
  title: string,
  text: string,
  button?: {
    text: string,
    navigationTo: string
  }
}

const ContainerImage: FC<Props> = ({ image, title, text, button }) => {
  const history = useHistory()
  
  function handleNavigationTo() {
    if(button) {
      history.push(button.navigationTo)
    }
  }

  return (
    <main>
      <img 
        src={image.src} 
        alt={image.alt} 
        className={`desktop-background ${ !image.isImageleft ? 'img-right' : '' }`}
      />

      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
        {
          button && 
            <button className="btn btn-ghost" onClick={handleNavigationTo}>{button.text}</button>
        }
      </div>
    </main>
  )
}

export default ContainerImage