

const ItemDetail = ({ id, nombre, img, precio }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Descripcion del producto</p>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail