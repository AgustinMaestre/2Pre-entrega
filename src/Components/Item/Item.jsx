import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div class="card">
      <img src={img} alt={nombre} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-tittle">Nombre: {nombre} </h5>
        <p class="card-text">Precio: {precio}</p>
        <p class="card-text">ID: {id}</p>
        <Link to={`/item/${id}`} class="btn btn-primary" > Ver Detalles</Link>
      </div>
    </div>
  )
}

export default Item

{/* <div class="card" style="width: 18rem;">
<img src={img} alt={precio} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Nombre: {nombre}</h5>
    <p class="card-text">Precio: {precio}</p>
    <p class="card-text">ID: {id}</p>
    <Link to={`/item/${id}`} class="btn btn-primary" > Ver Detalles</Link>
  </div>
</div> */}