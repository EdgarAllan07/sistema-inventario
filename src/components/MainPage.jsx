import React, { useEffect, useState } from "react";
import { FaTruckLoading } from "react-icons/fa";
import { BiSolidBaguette } from "react-icons/bi";
import { FaShop, FaUserGroup } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";
import axios from 'axios';

function MainPage() {
  const [categorias, setCategorias] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [productos, setProductos] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [sucursales, setSucursales] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const r1 = await axios.get("/api/Empleados");
        const r2 = await axios.get("/api/categorias");
        const r3 = await axios.get("/api/productos");
        const r4 = await axios.get("/api/sucursales");
        const r5 = await axios.get("/api/proveedores");
        setEmpleados(r1.data);
        setCategorias(r2.data);
        setProductos(r3.data);
        setProveedores(r5.data);
        setSucursales(r4.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }finally {
        setLoading(false); // Termina la carga
      }
    };
    fetchData();
  }, []); // Cambia la dependencia a []

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-5xl overflow-auto ml-52">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative overflow-x-auto h-full" style={{ maxHeight: "32rem" }}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Productos
                </h5>
                <BiSolidBaguette className="text-6xl" />
                <p className="font-normal text-gray-700 text-xl">
                  Cantidad de registro en la tabla:
                  <p className="font-normal text-2xl text-green-500">{loading? <span>Cargando...</span>:productos.length}</p>
                </p>
              </a>
            </div>
            <div className="relative overflow-x-auto h-full" style={{ maxHeight: "32rem" }}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Sucursales
                </h5>
                <FaShop className="text-6xl" />
                <p className="font-normal text-gray-700 ">
                  <p className="font-normal text-gray-700 text-xl">
                    Cantidad de registro en la tabla:
                    <p className="font-normal text-2xl text-green-500">{loading?<span>Cargando...</span>:sucursales.length}</p>
                  </p>
                </p>
              </a>
            </div>
            <div className="relative overflow-x-auto h-full" style={{ maxHeight: "32rem" }}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Categorias
                </h5>
                <TbCategoryFilled className="text-6xl" />
                <p className="font-normal text-gray-700 ">
                  <p className="font-normal text-gray-700 text-xl">
                    Cantidad de registro en la tabla:
                    <p className="font-normal text-2xl text-green-500">{loading?<span>Cargando...</span>:categorias.length}</p>
                  </p>
                </p>
              </a>
            </div>
            <div className="relative overflow-x-auto h-full" style={{ maxHeight: "32rem" }}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Proveedores
                </h5>
                <FaTruckLoading className="text-6xl" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p className="font-normal text-gray-700 text-xl">
                    Cantidad de registro en la tabla:
                    <p className="font-normal text-2xl text-green-500">{loading?<span>Cargando...</span>:proveedores.length}</p>
                  </p>
                </p>
              </a>
            </div>
            <div className="relative overflow-x-auto h-full" style={{ maxHeight: "32rem" }}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Empleados
                </h5>
                <FaUserGroup className="text-6xl" />
                <p className="font-normal text-gray-700 ">
                  <p className="font-normal text-gray-700 text-xl">
                    Cantidad de registro en la tabla:
                    <p className="font-normal text-2xl text-green-500">{loading? <span>Cargando...</span>:empleados.length}</p>
                  </p>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
