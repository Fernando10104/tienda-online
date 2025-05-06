// filtroBotones.jsx
import React from 'react';

export function FiltroBotones({ categorias, onChange }) {
    const handleChangeCategoria = (valor) => {
      onChange(prevState => ({
        ...prevState,
        categoria: valor
      }));
    };
  
    const [selectedCategoria, setSelectedCategoria] = React.useState(null);

    const handleClickCategoria = (valor) => {
      setSelectedCategoria(valor);
      handleChangeCategoria(valor);
    };

    return (
      <div>
      <label
        htmlFor="categoria"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Categoría
      </label>
      <div className="flex gap-2 flex-wrap"></div>
        {categorias.map(cat => (
        <button
          key={cat.valor}
          onClick={() => handleClickCategoria(cat.valor)}
          className={`border rounded-lg p-2 focus:ring-2 focus:outline-none ${
          selectedCategoria === cat.valor
            ? 'bg-purple-600 text-white border-purple-400'
            : 'border-gray-300'
          }`}
        >
          {cat.nombre}
        </button>
        ))}
      </div>
      
    );
  }
  


