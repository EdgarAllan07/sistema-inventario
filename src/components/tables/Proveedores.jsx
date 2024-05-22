import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const getProveedores = async () => {
      try {
        const response = await axios.get("/api/proveedores");
        setProveedores(response.data);
      } catch (error) {
        console.error("Error al obtener los proveedores:", error);
      }
    };
    getProveedores();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full  overflow-auto ml-52">
      <h1 className='text-xl font-semibold text-center '>Proveedores</h1>
        <div className="relative overflow-x-auto h-full "  style={{ maxHeight: '32rem' }}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Telefono</th>
                <th scope="col" className="px-6 py-3">Direccion</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(proveedor => (
                <tr key={proveedor.id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {proveedor.id_proveedor}
                  </th>
                  <td className="px-6 py-4">{proveedor.nombre}</td>
                  <td className="px-6 py-4">{proveedor.telefono}</td>
                  <td className="px-6 py-4">{proveedor.direccion }</td>
                  <td className="px-6 py-4">{proveedor.email}</td>
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

export default Proveedores;
