import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Empleados() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const getEmpleados = async () => {
      try {
        const response = await axios.get("/api/Empleados");
        setEmpleados(response.data);
      } catch (error) {
        console.error("Error al obtener los proveedores:", error);
      }
    };
    getEmpleados();
  }, []);

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full  overflow-auto ml-52">
      <h1 className='text-xl font-semibold text-center '>Empleados</h1>
        <div className="relative overflow-x-auto h-full "  style={{ maxHeight: '32rem' }}>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Nombres</th>
                <th scope="col" className="px-6 py-3">Apellidos</th>
                <th scope="col" className="px-6 py-3">Dui</th>
                <th scope="col" className="px-6 py-3">Telefono</th>
                <th scope="col" className="px-6 py-3">Direccion</th>
                <th scope="col" className="px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map(empleado => (
                <tr key={empleado.id} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {empleado.id_cliente}
                  </th>
                  <td className="px-6 py-4">{empleado.nombre}</td>
                  <td className="px-6 py-4">{empleado.apellido}</td>
                  <td className="px-6 py-4">{empleado.dui}</td>
                  <td className="px-6 py-4">{empleado.telefono}</td>
                  <td className="px-6 py-4">{empleado.direccion }</td>
                  <td className="px-6 py-4">{empleado.email}</td>
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

export default Empleados;
