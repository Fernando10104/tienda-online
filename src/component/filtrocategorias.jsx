// filtroBotones.jsx

export function FiltroBotones({ categorias, onChange }) {
    const handleChangeCategoria = (valor) => {
      onChange(prevState => ({
        ...prevState,
        categoria: valor
      }));
    };
  
    return (
      <div>
        <label
          htmlFor="categoria"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Categoría
        </label>
        <div className="flex gap-2 flex-wrap">
          {categorias.map(cat => (
            <button
              key={cat.valor}
              onClick={() => handleChangeCategoria(cat.valor)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>
    );
  }
  


