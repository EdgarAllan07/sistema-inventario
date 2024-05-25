"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getEmpleados = async () => {
      try {
        const response = await axios.get("/api/Empleados");
        setEmpleados(response.data);
      } catch (error) {
        console.error("Error al obtener los empleados:", error);
      }
    };
    getEmpleados();
  }, []);

  const borrarEmpleado = async (id) => {
    if (id) {
      try {
        await axios.delete(`/api/Empleados/${id}`);
        setEmpleados((prevEmpleados) =>
          prevEmpleados.filter((empleado) => empleado.id_cliente !== id)
        );
        toast.info("Se ha eliminado al empleado de la plantilla", { autoClose: 2000 });
      } catch (error) {
        console.error("Error al borrar empleado:", error);
        toast.error("No se pudo eliminar al empleado", { autoClose: 2000 });
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full overflow-auto ml-52">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              router.push("/Empleados");
            }}
          >
            Ingresar nuevo registro
          </button>
          <h1 className="text-xl font-semibold text-center mb-5">Empleados</h1>
          <div className="relative overflow-x-auto h-full" style={{ maxHeight: '32rem' }}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-2">ID</th>
                  <th scope="col" className="px-4 py-2">Nombre</th>
                  <th scope="col" className="px-4 py-2">Apellido</th>
                  <th scope="col" className="px-4 py-2">DUI</th>
                  <th scope="col" className="px-4 py-2">Tel</th>
                  <th scope="col" className="px-4 py-2">Dirección</th>
                  <th scope="col" className="px-4 py-2">Email</th>
                  <th scope="col" className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {empleados.map(empleado => (
                  <tr key={empleado.id_cliente} className="bg-white border-b">
                    <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                      {empleado.id_cliente}
                    </th>
                    <td className="px-4 py-2">{empleado.nombre}</td>
                    <td className="px-4 py-2">{empleado.apellido}</td>
                    <td className="px-4 py-2">{empleado.dui}</td>
                    <td className="px-4 py-2">{empleado.telefono}</td>
                    <td className="px-4 py-2">{empleado.direccion}</td>
                    <td className="px-4 py-2">{empleado.email}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button
                        type="button"
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        onClick={() => { borrarEmpleado(empleado.id_cliente) }}
                      >
                        Borrar
                      </button>
                      <button
                        type="button"
                        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        onClick={() => { router.push(`/Empleados/${empleado.id_cliente}`) }}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Empleados;
