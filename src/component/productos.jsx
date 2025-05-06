import { useState , useEffect } from 'react'
import { Filtros } from './filtros'
import Fuse from 'fuse.js';

function Products() {
  
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
    

 
    const [filtros, setFiltros] = useState({
      categoria: 'all',
      minprecio: 0
    })
    console.log(filtros, 'filtros')
    console.log(productos, 'productos')

    const productosfiltrados = (productos) => {
        const fuse = new Fuse(productos, {
          keys: ['nombre'],
          threshold: 0.3,
          includeScore: true,
        });

        const searchResults = filtros.busqueda ? fuse.search(filtros.busqueda).map(result => result.item) : productos;

        return searchResults.filter(producto => 
          producto.precio >= filtros.minprecio && 
          (
            filtros.categoria === 'all' || 
            producto.categoria.toLowerCase() === filtros.categoria.toLowerCase()
          )
        );
    }
  
    const productosyafiltrados = productosfiltrados(productos)
    const [ordenActivo, setOrdenActivo] = useState("menor-mayor");
    const ordenarMayorMenor = () => {
      const copia = [...productos].sort((a, b) => b.precio - a.precio);
      setProductos(copia);
      setOrdenActivo("mayor-menor");
    };
  
    const ordenarMenorMayor = () => {
      const copia = [...productos].sort((a, b) => a.precio - b.precio);
      setProductos(copia);
      setOrdenActivo("menor-mayor");
    };

    return (
      <main className="bg-white min-h-screen">

      <Filtros onChange={setFiltros}
      ordenarMenorMayor={ordenarMenorMayor} 
      ordenarMayorMenor={ordenarMayorMenor}
      ordenActivo={ordenActivo}
      />
      
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productosyafiltrados.slice(0, 20).map((producto) => (
      <div key={producto.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
        <img
        src={`/img/${producto.imagen}`}
        alt={producto.nombre}
        className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h2 className="text-xl font-semibold text-gray-700">{producto.nombre}</h2>
        <p className="text-gray-600">{producto.descripcion}</p>
        <p className="font-bold text-lg text-purple-600">${producto.precio}</p>
      </div>
      ))}
      </div>
      </main>
    );
}
export default Products