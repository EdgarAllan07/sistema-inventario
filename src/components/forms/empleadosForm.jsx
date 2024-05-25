"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

function EmpleadosForm({id}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dui: '',
    direccion: '',
    telefono: '',
    email: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/Empleados', formData);
      // Redirigir a la página de menú o mostrar un mensaje de éxito
      router.push('/Menu');
    } catch (error) {
      console.error('Error al agregar el empleado:', error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div className='h-full'>
      <div className="py-6">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            router.push("/Menu");
          }}
        >
          Regresar
        </button>
        <h1 className="py-4 text-center text-2xl">Ingrese una nuevo Empleado</h1>
        <form className="bg-[#2E6C37] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Nombres del empleado"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="apellido">
              Apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="apellido"
              type="text"
              placeholder="Apellidos del empleado"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="dui">
              DUI
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="dui"
              type="text"
              placeholder="EJ: 019201912"
              value={formData.dui}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="direccion">
              Dirección
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="direccion"
              type="text"
              placeholder="La dirección de residencia del empleado"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="telefono"
              type="text"
              placeholder="EJ:2981121"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Correo electrónico donde contactar"
              value={formData.email}
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

export default EmpleadosForm;
