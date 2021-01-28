import React from 'react'
import background from './background.webp'
import './index.css'

const ItemListContainer = ({children, greeting}) => {
    return (
        <div>
            <img src={background} width="100%"/>
            <h1 className="centered">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer
