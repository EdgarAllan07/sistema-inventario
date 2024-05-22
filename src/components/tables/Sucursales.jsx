import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Sucursales() {
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    const getSucursales = async () => {
      try {
        const response = await axios.get("/api/sucursales");
        setSucursales(response.data);
      } catch (error) {
        console.error("Error al obtener los sucursales:", error);
      }
    };
    getSucursales();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <h1 className='text-xl font-semibold text-center mb-5'>Sucursales</h1>
        <div className="relative overflow-x-auto h-full "  style={{ maxHeight: '32rem' }}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Direccion</th>
                <th scope="col" className="px-6 py-3">Existencia</th>
              </tr>
            </thead>
            <tbody>
              {sucursales.map(sucursal => (
                <tr key={sucursal.id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {sucursal.id_sucursal}
                  </th>
                  <td className="px-6 py-4">{sucursal.direccion}</td>
                  <td className="px-6 py-4">{sucursal.existencias}</td>
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

export default Sucursales;
