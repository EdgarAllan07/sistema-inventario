"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  const router = useRouter();
  
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


  const borrarProveedor = async (id) => {
    if (id) {
      try {
        await axios.delete(`/api/proveedores/${id}`);
        setProveedores((prevProductos) =>
          prevProductos.filter((proveedor) => proveedor.id_proveedor !== id)
        );
        toast.info("Se ha eliminado el proveedor de la plantilla",{autoClose: 2000});
      } catch (error) {
        console.error("Error al borrar proveedor:", error);
        toast.error("Este proveedor debe estar siendo usada en otra tabla",{autoClose: 2000})
      }
    }
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full overflow-auto ml-52">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=>{
        router.push("/Proveedor")
      }}>Ingresar nuevo registro</button>
      <h1 className='text-xl font-semibold text-center mb-5'>Proveedores</h1>
        <div className="relative overflow-x-auto h-full" style={{ maxHeight: '32rem' }}>
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-2 py-2">ID</th>
                <th scope="col" className="px-2 py-2">Nombre</th>
                <th scope="col" className="px-2 py-2">Teléfono</th>
                <th scope="col" className="px-2 py-2">Dirección</th>
                <th scope="col" className="px-2 py-2">Email</th>
                <th scope="col" className="px-2 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(proveedor => (
                <tr key={proveedor.id_proveedor} className="bg-white border-b">
                  <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                    {proveedor.id_proveedor}
                  </th>
                  <td className="px-2 py-2">{proveedor.nombre}</td>
                  <td className="px-2 py-2">{proveedor.telefono}</td>
                  <td className="px-2 py-2">{proveedor.direccion}</td>
                  <td className="px-2 py-2">{proveedor.email}</td>
                  <td className="px-2 py-2 flex flex-col gap-2">
                    <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      onClick={() => { borrarProveedor(proveedor.id_proveedor) }}
                    >Borrar</button>
                    <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                      onClick={() => { router.push(`/Proveedor/${proveedor.id_proveedor}`) }}
                    >Editar</button>
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

export default Proveedores;
