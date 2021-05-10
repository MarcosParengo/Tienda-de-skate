import React, { useContext, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { CartContext } from '../../../context/cartContext';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'

const CartWidget = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { cart,cantTotal } = useContext(CartContext)

  useEffect(() => {
    return () => {
    }
  }, [cart])
  return (
    <>
      <Nav.Link style={{ display: cart.length === 0 ? 'none' : 'block' }}>
      {cantTotal}
        {' '}
        <img
          alt=""
          src="https://raw.githubusercontent.com/MarcosParengo/Tienda-de-skate/master/public/images/cart.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          onClick={() => setModalShow(true)}
        />
      </Nav.Link>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
export default CartWidget
