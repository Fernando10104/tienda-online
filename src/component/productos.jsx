import { useState , useEffect } from 'react'

function Product() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then((response) => response.json())
            .then((data) => {
                console.log(data, 'productos desde fetch')
                setProductos(data)
            })
            .catch((error) => console.error('Error fetching data:', error))
    }, [])
    
    return (
            <main className="bg-gray-100 min-h-screen p-6">
              <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Productos</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productos.slice(0, 20).map((producto) => (
                  <div key={producto.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                    <img
                      src={`/img/${producto.imagen}.jfif`}
                      alt={producto.nombre}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h2 className="text-xl font-semibold text-gray-700">{producto.nombre}</h2>
                    <p className="text-gray-600">{producto.descripcion}</p>
                    <p className="font-bold text-lg">${producto.precio}</p>
                  </div>
                ))}
              </div>
            </main>)
}
export default Product