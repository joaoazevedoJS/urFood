import React, { FC } from 'react'

import './styles.css'

interface Props {
  image: {
    src: string,
    alt: string,
    isImageleft?: boolean
  },
  title: string,
  text: string,
  buttonText?: string
}

const ContainerImage: FC<Props> = ({ image, title, text, buttonText }) => {
  return (
    <main>
      { // Image Left
        image.isImageleft && <img src={image.src} alt={image.alt} className="desktop-background" />
      }

      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
        {buttonText && <button className="btn btn-ghost">{buttonText}</button>}
      </div>

      { // Image right
        !image.isImageleft && <img src={image.src} alt={image.alt} className="desktop-background" />
      }
    </main>
  )
}

export default ContainerImage