"use client";
import React, { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

function SucursalesForm({id}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    direccion: '',
    existencias: ''
  });
  const [titulo,setTitulo] = useState("");

  useEffect(() => {
    const getSucursales = async () => {
      try {
        const response = await axios.get(`/api/sucursales/${id}`);
        setFormData(
          {
            direccion: response.data.direccion,
            existencias: response.data.existencias
          }
        )
      } catch (error) {
        console.error("Error al obtener los sucursales:", error);
      }
    };
    getSucursales();
  }, [id]);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(()=>{
    if(id){
      setTitulo("Actualize de datos de la sucursal con id: "+id)
    }else{
      setTitulo("Ingrese una nueva sucursal")
    }
  },[id])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(id){
        const response = await axios.patch(`/api/sucursales//${id}`, formData);
    

      }else{
        const response = await axios.post('/api/sucursales', formData);
      
      }
      // Redirigir a la página de menú o mostrar un mensaje de éxito
      router.push('/Menu');
    } catch (error) {
      console.error('Error al agregar la sucursal:', error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div>
      <div className="">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            router.push("/Menu");
          }}
        >
          Regresar
        </button>
        <h1 className="py-4 text-center text-2xl">{titulo}</h1>
        <form className="bg-[#2E6C37] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="direccion"
            >
              Dirección
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="direccion"
              type="text"
              placeholder="Dirección de la sucursal"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="existencias"
            >
              Existencias
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="existencias"
              type="text"
              placeholder="Existencias en la sucursal"
              value={formData.existencias}
              onChange={handleChange}
            />
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

export default SucursalesForm;
