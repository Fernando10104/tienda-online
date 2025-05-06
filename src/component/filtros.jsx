import { FiltroBotones } from "./filtrocategorias";
const categorias = [
  { valor: "all", nombre: "Todas" },
  { valor: "tecnologia", nombre: "Tecnología" },
  { valor: "hogar", nombre: "Hogar" },
  { valor: "Celular", nombre: "Celulares" }
];



export function Filtros({onChange}) {
  const handleChangeminprecio = (e) => {
    onChange(prevState => ({
      ...prevState,
      minprecio: e.target.value
    }))
  };
  const handleChangebusqueda = (e) => {
    onChange(prevState => ({
      ...prevState,
      busqueda: e.target.value
    }));
  };




  return (
    <section className="bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white p-2">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-600">Punto Digital</h1>
        </a>
        </div>
        <form htmlFor="busqueda" className="flex-1 max-w-md mx-4">
        <div className="relative">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
          >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
          type="search"
          id="busqueda"
          onChange={handleChangebusqueda}
          name="busqueda"
          className="flex h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full pl-8 pr-4"
          placeholder="Buscar productos..."
          />
        </div>
        </form>
      </div>
      </header>
      <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Productos
      </h2>

      <div>
        <FiltroBotones categorias={categorias} onChange={onChange} />
      </div>
      <br />
      <div className="mb-4">
        <label
        htmlFor="minprecio"
        className="block text-sm font-medium text-gray-700 mb-1"
        >
        Precio mínimo
        </label>
        <input
        type="number"
        id="minprecio"
        onChange={handleChangeminprecio}
        name="precio"
        className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Ej: 10000"
        />
      </div>
      <div className="flex justify-center mt-4">
      </div>
      </div>
      
    </section>
    );
}