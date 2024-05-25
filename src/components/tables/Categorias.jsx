"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await axios.get("/api/categorias");
        setCategorias(response.data);
      } catch (error) {
        console.error("Error al obtener los categorais:", error);
      }
    };
    getCategorias();
  }, []);

  const borrarCategoria = async (id)=>{
    if(id){
      try{
      const response = await axios.delete(`api/categorias/${id}`)
      setCategorias((prevSponsor) =>
        prevSponsor.filter((categoria) => categoria.id_categoria !== id)

      );
      toast.info("Se ha eliminado la categoria",{autoClose: 2000})
      }catch(error){
        console.error("Error al borrar categoria:", error);
        toast.error("Esta categoria debe estar siendo usada en otra tabla",{autoClose: 2000})
      }
    }
  }


  return (
    <>
    <div className="flex justify-center items-center min-h-screen  w-full">
      <div className="w-full max-w-5xl overflow-auto ml-52">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={()=>{
          router.push('/Categoria')
      }}>Ingresar nuevo registro</button>
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
                <tr key={categoria.id_categoria} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {categoria.id_categoria}
                  </th>
                  <td className="px-6 py-4 flex justify-between gap-12">{categoria.nombre}
                  <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={()=>{borrarCategoria(categoria.id_categoria)}}
                  >Borrar</button>
                  <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" onClick={()=>{router.push(`/Categoria/${categoria.id_categoria}`)}}>Editar</button>
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

export default Categorias;
