"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function CategoriasForm({ id }) {
  const router = useRouter();
  const [proveedores, setProveedores] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState("");
  const [titulo,setTitulo] = useState("");

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

  useEffect(() => {
    const getCategorias = async () => {
      try {
        if (id) {
          const response = await axios.get(`/api/categorias/${id}`);
          setNombreCategoria(response.data.nombre);
          setProveedorSeleccionado(response.data.id_proveedor);
        }
      } catch (error) {
        console.error("Error al obtener los categorais:", error);
      }
    };
    getCategorias();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await axios.patch(`/api/categorias/${id}`, {
          nombre: nombreCategoria,
          id_proveedor: proveedorSeleccionado,
        });
     
     
      } else {
        const response = await axios.post("/api/categorias", {
          nombre: nombreCategoria,
          id_proveedor: proveedorSeleccionado,
        });
        
      }

      // Redirigir o mostrar mensaje de éxito
      router.push("/Menu");
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  };


  useEffect(()=>{
    if(id){
      setTitulo("Actualize de datos de la categoria con id: "+id)
    }else{
      setTitulo("Ingrese una nueva categoria")
    }
  },[id])

  return (
    <div>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            router.push("/Menu");
          }}
        >
          Regresar
        </button>
        <h1 className="py-4 text-center text-2xl">
          {titulo}
        </h1>
        <form
          className="bg-[#2E6C37] shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="nombre"
            >
              Ingrese el nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="EJ: Carnes, Infantil, Limpieza, etc"
              value={nombreCategoria}
              onChange={(e) => setNombreCategoria(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="proveedor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a supplier
            </label>
            <select
              id="proveedor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={proveedorSeleccionado}
              onChange={(e) => setProveedorSeleccionado(e.target.value)}
            >
              <option value="" disabled>
                Choose a supplier
              </option>
              {proveedores.map((proveedor) => (
                <option
                  key={proveedor.id_proveedor}
                  value={proveedor.id_proveedor}
                >
                  {proveedor.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default CategoriasForm;
