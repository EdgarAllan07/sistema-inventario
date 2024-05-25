"use client";
import React, { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

function ProveedoresForm({id}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    email: '',
    telefono: ''
  });

  useEffect(() => {
    const getProveedores = async () => {
      try {
        const response = await axios.get(`/api/proveedores/${id}`);
        setFormData({
          nombre: response.data.nombre,
          direccion: response.data.direccion ,
          email: response.data.email,
          telefono: response.data.telefono
        })
      } catch (error) {
        console.error("Error al obtener los proveedores:", error);
      }
    };
    getProveedores();
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    if(id){
      const response = await axios.patch(`/api/proveedores/${id}`, formData);
    }else{
      const response = await axios.post('/api/proveedores', formData);
    }
      
      // Redirigir a la página de menú o mostrar un mensaje de éxito
      router.push('/Menu');
    } catch (error) {
      console.error('Error al agregar el proveedor:', error);
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
        <h1 className="py-4 text-center text-2xl">Ingrese un nuevo proveedor</h1>
        <form className="bg-[#2E6C37] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Nombre del proveedor"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
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
              placeholder="Dirección del proveedor"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email del proveedor"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="telefono"
              type="text"
              placeholder="Teléfono del proveedor"
              value={formData.telefono}
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

export default ProveedoresForm;
