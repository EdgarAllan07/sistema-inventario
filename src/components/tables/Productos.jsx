import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await axios.get("/api/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    getProductos();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <h1 className='text-xl font-semibold text-center '>Productos</h1>
        <div className="relative overflow-x-auto h-full "  style={{ maxHeight: '32rem' }}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Descripción</th>
                <th scope="col" className="px-6 py-3">Precio</th>
                <th scope="col" className="px-6 py-3">Categoría</th>
                <th scope="col" className="px-6 py-3">Existencia</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {producto.id_producto}
                  </th>
                  <td className="px-6 py-4">{producto.nombre}</td>
                  <td className="px-6 py-4">{producto.descripcion}</td>
                  <td className="px-6 py-4">{producto.precio}</td>
                  <td className="px-6 py-4">{producto.categoria}</td>
                  <td className="px-6 py-4">{producto.existencias}</td>
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

export default Productos;
