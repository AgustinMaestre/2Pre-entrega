import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
  return (
    <div>
        <img className='imgCart' src={imgCart} alt="imagen de carrito" />
        <strong>4</strong>
    </div>
  )
}

export default CartWidget