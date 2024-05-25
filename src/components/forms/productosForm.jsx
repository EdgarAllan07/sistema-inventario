"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

function ProductosForm({id}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    existencias: '',
    precio: '',
    proveedorSeleccionado: '',
    categoriaSeleccionado: ''
  });
  const [proveedores, setProveedores] = useState([]);
  const [categorias, setCategorias] = useState([]);
const [categoriaNombre,setCategoriaNombre] = useState("")

useEffect(() => {
  const getProductos = async () => {
    try {
      const response = await axios.get(`/api/productos/${id}`);
     setFormData({
      nombre: response.data.nombre,
      descripcion: response.data.descripcion,
      existencias: response.data.existencias,
      precio: response.data.precio,
      proveedorSeleccionado: response.data.id_proveedor,
      categoriaSeleccionado: response.data.id_categoria
     })
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  getProductos();
}, [id]);


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
        const response = await axios.get("/api/categorias");
        setCategorias(response.data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };
    getCategorias();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "categoriaSeleccionado") {
      // Si el cambio ocurre en la categoría, también actualizamos el nombre de la categoría
      const categoriaSeleccionada = categorias.find(c => c.id_categoria === value);
      if (categoriaSeleccionada) {
        setCategoriaNombre(categoriaSeleccionada.nombre);
      } else {
        console.error("No se encontró la categoría seleccionada");
      }
    }
    setFormData({ ...formData, [id]: value });
  };
  
  const obtenerCategoria = () => {
    const categoriaSeleccionada = categorias.find(c => c.id_categoria === formData.categoriaSeleccionado);
    if (categoriaSeleccionada) {
      setCategoriaNombre(categoriaSeleccionada.nombre);
    } else {
      // Manejo en caso de que no se encuentre la categoría seleccionada
      console.error("No se encontró la categoría seleccionada");
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    obtenerCategoria()
    try {
      if(id){
        const response = await axios.patch(`/api/productos/${id}`, {
          nombre:formData.nombre,
          descripcion:formData.descripcion,
          precio:formData.precio,
          categoria:categoriaNombre,
          existencias:formData.existencias,
          id_categoria:formData.categoriaSeleccionado,
          id_proveedor:formData.proveedorSeleccionado
        });
      }else{
        const response = await axios.post('/api/productos', {
          nombre:formData.nombre,
          descripcion:formData.descripcion,
          precio:formData.precio,
          categoria:categoriaNombre,
          existencias:formData.existencias,
          id_categoria:formData.categoriaSeleccionado,
          id_proveedor:formData.proveedorSeleccionado
        });
      }
      router.push('/Menu');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div className='h-full'>
      <div className="py-4">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            router.push("/Menu");
          }}
        >
          Regresar
        </button>
        <h1 className="py-4 text-center text-2xl">Ingrese un nuevo producto</h1>
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
              placeholder="Nombre del producto"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="descripcion"
            >
              Descripción
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="descripcion"
              type="text"
              placeholder="Descripción del producto"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="existencias"
            >
              Existencias
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="existencias"
              type="number"
              placeholder="Cantidad en existencias"
              value={formData.existencias}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="precio"
            >
              Precio
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="precio"
              type="number"
              placeholder="Precio del producto"
              value={formData.precio}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="proveedorSeleccionado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione un proveedor
            </label>
            <select
              id="proveedorSeleccionado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.proveedorSeleccionado}
              onChange={handleChange}
            >
              <option value="" disabled>Seleccione un proveedor</option>
              {proveedores.map(proveedor => (
                <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>
                  {proveedor.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="categoriaSeleccionado"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione una categoría
            </label>
            <select
              id="categoriaSeleccionado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={formData.categoriaSeleccionado}
              onChange={handleChange}
            >
              <option value="" disabled>Seleccione una categoría</option>
              {categorias.map(categoria => (
                <option key={categoria.id_categoria} value={categoria.id_categoria}>
                  {categoria.nombre}
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

export default ProductosForm;
