import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductosCategoria, getProductos } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])
  return (
    <>
      <h2> Todos los productos: </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer