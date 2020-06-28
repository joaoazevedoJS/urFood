import React, { FC } from 'react'

import './styles.css'

interface Props {
  image: {
    src: string,
    alt: string
  },
  title: string,
  description: string
}

const Meal: FC<Props> = ({ image, title, description }) => {
  return (
    <div className="meal">
      <img src={image.src} alt={image.alt} />

      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Meal