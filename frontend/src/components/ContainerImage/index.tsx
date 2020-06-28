import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

interface Props {
  image: {
    src: string,
    alt: string,
    isImageleft?: boolean,
  },
  background?: {
    firstFullScreen?: boolean,
    color?: string
  },
  title: string,
  texts: Array<string>,
  button?: {
    text: string,
    navigationTo: string
  }
}

const ContainerImage: FC<Props> = ({ image, title, texts, button, background }) => {
  const history = useHistory()

  function handleNavigationTo() {
    if (button) {
      history.push(button.navigationTo)
    }
  }

  return (
    <section
      style={{ background: background?.color }}
      className={background?.firstFullScreen ? "first" : 'container-image'}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`desktop-background ${!image.isImageleft ? 'img-right' : ''}`}
      />

      <img
        src={image.src}
        alt={image.alt}
        className={`mobile-background`}
      />

      <div className="content">
        <h1>{title}</h1>
        {
          texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))
        }
        {
          button &&
          <button className="btn btn-ghost" onClick={handleNavigationTo}>{button.text}</button>
        }
      </div>
    </section>
  )
}

export default ContainerImage