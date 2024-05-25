"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Productos() {
  const [productos, setProductos] = useState([]);
  const router = useRouter();
  
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

  const borrarProductos = async (id) => {
    if (id) {
      try {
        await axios.delete(`/api/productos/${id}`);
        setProductos((prevProductos) =>
          prevProductos.filter((producto) => producto.id_producto !== id)
        );
        toast.info("Se ha eliminado el producto",{autoClose: 2000});
      } catch (error) {
        console.error("Error al borrar producto:", error);
      }
    }
  };
  
  return (
    <>
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=>{
        router.push("/Producto")
      }}>Ingresar nuevo registro</button>
      <h1 className='text-xl font-semibold text-center mb-5'>Productos</h1>
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
                <tr key={producto.id_producto} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {producto.id_producto}
                  </th>
                  <td className="px-6 py-4">{producto.nombre}</td>
                  <td className="px-6 py-4">{producto.descripcion}</td>
                  <td className="px-6 py-4">{producto.precio}</td>
                  <td className="px-6 py-4">{producto.categoria}</td>
                  <td className="px-6 py-4 flex justify-between gap-4">{producto.existencias}
                  <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={()=>{borrarProductos(producto.id_producto)}}
                  >Borrar</button>
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={()=>{router.push(`/Producto/${producto.id_producto}`)}}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
}

export default Productos;
