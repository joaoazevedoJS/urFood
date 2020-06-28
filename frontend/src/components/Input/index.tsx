import React, { FC } from 'react'

import './styles.css'

interface Props {
  name: string,
  title: string,
  type?: string
}

const Input: FC<Props> = ({ name, title, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{title}</label>
      <input type={type || 'text'} name={name} id={name} />
    </div>
  )
}

export default Input