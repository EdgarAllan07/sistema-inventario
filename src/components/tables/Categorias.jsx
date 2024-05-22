import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get("/api/categorias");
        setCategorias(response.data);
      } catch (error) {
        console.error("Error al obtener los sucursales:", error);
      }
    };
    getCategorias();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen  w-full">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <h1 className='text-xl font-semibold text-center mb-5'>Categorias</h1>
        <div className="relative overflow-x-auto h-full "  style={{ maxHeight: '32rem' }}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map(categoria => (
                <tr key={categoria.id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {categoria.id_categoria}
                  </th>
                  <td className="px-6 py-4">{categoria.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default Categorias;
