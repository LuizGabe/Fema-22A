import React from "react" 
import "./Card.style.scss"

interface CardInterface {
    id: number
    nome?: string
    imgUrl?: string
  }

  const Card = ({
    id,
    nome,
    imgUrl,
    ...rest
  }: CardInterface) => (
    <div {...rest} key={id}>
        <img src={imgUrl} alt={nome + ' image'}/>
        {nome}
    </div>
  )

export default Card