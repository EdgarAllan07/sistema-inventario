"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [contra, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      
      const response = await axios.post("/api/usuarios", {
        email: email,
        contra: contra,
      });
      toast.loading("Cargando Credenciales..")
      sessionStorage.setItem("credenciales",true)
      // Si la autenticación es exitosa, redirige al usuario a la página principal
      router.push("/Menu");
   
    } catch (error) {
      // Si hay un error en la autenticación, muestra el mensaje de error utilizando un toast
      toast.error("Credenciales incorrectas. Por favor, inténtalo de nuevo.",{autoClose: 1000});
    }
  };

  return (
    <section className="flex">
      <div className="w-1/2">
      
        <Image
      src="/selectos-logo-login.png"
      width={500}
      height={300}
      alt="Picture of the author"
    />
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div>
          <div className="text-center space-y-4 mb-4 w-full">
            <h1 className="text-green-900 text-4xl">Bienvenido</h1>
            <p className="font-semibold text-xl">Ingresa tus credenciales para usar el dashboard</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              className="block w-full p-3 ps-10 text-sm bg-white focus:border-black shadow-xl rounded-xl"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="password"
              className="block w-full p-3 ps-10 text-sm bg-white focus:border-black shadow-xl rounded-xl"
              placeholder="Contraseña"
              value={contra}
              onChange={handleChange}
              required
            />
            <div className="flex justify-center">
              <button
                className="bg-[#61AF30] text-white px-4 py-2 font-semibold rounded-lg shadow-xl"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Componente ToastContainer para mostrar los toasts */}
      <ToastContainer />
    </section>
  );
}

export default Login;
