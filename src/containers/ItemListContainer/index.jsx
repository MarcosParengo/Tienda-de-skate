import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import ItemList from './ItemList'

const ItemListContainer = ({ children, greeting, listaDeItems }) => {

    const { id } = useParams();
    const [items, setItems] = useState(listaDeItems)

    useEffect(() => {
        if (typeof id === 'undefined') {
            setItems(listaDeItems)
        } else {
            setItems(listaDeItems.filter(items => items.brand === id));
        } return () => {
        }
    }, [id,listaDeItems])

    return (
        <div className="container">
            <Row>
                <ItemList itemProp={items} />
            </Row>
        </div>
    )
}

export default ItemListContainer