"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Sucursales() {
  const [sucursales, setSucursales] = useState([]);
  const router = useRouter();
  
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

  
  const borrarSucursal =  async (id) => {
    if (id) {
      try {
        await axios.delete(`/api/sucursales/${id}`);
        setSucursales((prevProductos) =>
          prevProductos.filter((sucursal) => sucursal.id_sucursal !== id)
        );
        toast.info("Se ha eliminado La sucursal",{autoClose: 2000});
      } catch (error) {
        console.error("Error al borrar sucursal:", error);
      }
    }
  };
  
  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=>{
        router.push("./Sucursal")
      }}>Ingresar nuevo registro</button>
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
                  <td className="px-6 py-4 flex justify-between gap-4">{sucursal.existencias}
                  <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={()=>{borrarSucursal(sucursal.id_sucursal)}}
                  >Borrar</button>
                      <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={()=>{router.push(`/Sucursal/${sucursal.id_sucursal}`)}}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default Sucursales;
