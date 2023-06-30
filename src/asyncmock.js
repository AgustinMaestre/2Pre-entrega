const productos = [
    { nombre: "Motorola Edge 30", precio: "$180000", id: "1", img: "../img/moto30.png", idCat: "1" },
    { nombre: "Samsung S23", precio: "$350000", id: "2", img: "../img/samsung23.png", idCat: "1" },
    { nombre: "iPhone 14", precio: "$780000", id: "3", img: "../img/iPhone14.jpg", idCat: "1" },
    { nombre: "PC Gamer Armada", precio: "$450000", id: "4", img: "../img/pcGamer.png", idCat: "2" },
    { nombre: "Notebook Gamer Asus", precio: "$530000", id: "6", img: "../img/ps5.png", idCat: "3" },
    { nombre: "Xbox One", precio: "$400000", id: "7", img: "../img/xbox.jpg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 100)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const produtosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(produtosCategoria)
        }, 100)
    })
}