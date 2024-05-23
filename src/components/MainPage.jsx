import React, {useEffect,useState} from "react";
import { FaTruckLoading } from "react-icons/fa";
import { BiSolidBaguette } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { TbCategoryFilled } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

function MainPage() {

  /*
  const [categorias, setCategorias] = useState([]);
    const [empleados, setEmpleados] = useState([]);
      const [productos, setProductos] = useState([]);
        const [proveedores, setProveedores] = useState([]);
    const [sucursales, setSucursales] = useState([]);
  */


    /**
      useEffect(() => {
    const todos = async () => {
      try {
        const r1 = await axios.get("/api/Empleados");
         const r2 = await axios.get("/api/categorias");
          const r3 = await axios.get("/api/productos");
          const r4 = await axios.get("/api/sucursales")
          const r5 = await axios.get("/api/proveedores")
        setEmpleados(r1.data);
        setCategorias(r2.data)
        setProductos(r3.data)
        setProveedores(r4.data)
        setSucursales(r5.data)
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    todos();
  }, []);
     */
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-5xl overflow-auto ml-52">
          <div className="grid grid-cols-3 gap-4">
            <div
              className="relative overflow-x-auto h-full "
              style={{ maxHeight: "32rem" }}
            >
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Productos
                </h5>
                <BiSolidBaguette className="text-6xl"/>
                <p className="font-normal text-gray-700   text-xl">
                 Cantidad de registro en la tabla: 
                 <p className="font-normal text-2xl text-green-500">10 </p> 
                </p>
              </a>
            </div>
            <div
              className="relative overflow-x-auto h-full "
              style={{ maxHeight: "32rem" }}
            >
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sucursales
                </h5>
                <FaShop className="text-6xl" />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="font-normal text-gray-700   text-xl">
                 Cantidad de registro en la tabla: <p className="font-normal text-2xl text-green-500">10 </p> 
                </p>
                </p>
              </a>
            </div>
            <div
              className="relative overflow-x-auto h-full "
              style={{ maxHeight: "32rem" }}
            >
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Categorias
                </h5>
                <TbCategoryFilled className="text-6xl"/>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="font-normal text-gray-700   text-xl">
                 Cantidad de registro en la tabla: <p className="font-normal text-2xl text-green-500">10 </p> 
                </p>
                </p>
              </a>
            </div>
            <div
              className="relative overflow-x-auto h-full "
              style={{ maxHeight: "32rem" }}
            >
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Proveedores
                </h5>
                <FaTruckLoading className="text-6xl"/>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="font-normal text-gray-700   text-xl">
                 Cantidad de registro en la tabla: <p className="font-normal text-2xl text-green-500">10 </p> 
                </p>
                </p>
              </a>
            </div>
            <div
              className="relative overflow-x-auto h-full "
              style={{ maxHeight: "32rem" }}
            >
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Empleados
                </h5>
                <FaUserGroup className="text-6xl"/>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                <p className="font-normal text-gray-700   text-xl">
                 Cantidad de registro en la tabla: <p className="font-normal text-2xl text-green-500">10 </p> 
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
