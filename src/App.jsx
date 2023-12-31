import "./App.css"
import NavBar from "./Components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
