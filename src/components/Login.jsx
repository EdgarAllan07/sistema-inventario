"use client"
import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation.js";

function Login() {
  const router = useRouter()

  const handleChange = (e)=>{

  }
  
  const submitFunction =(e)=>{
    e.preventDefault()
    router.push("/")
  }

  return (
      <section className="flex ">
        <div className="w-1/2">
          <img src="/selectos-logo-login.png" className="w-full h-full" />
        </div>
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div>
            <div className="text-center space-y-4 mb-4 w-full">
              <h1 className="text-green-900 text-4xl">Bienvenido</h1>
              <p className="font-semibold text-xl">
                Ingresa tus credenciales para usar el dashboard
              </p>
            </div>
            <form className="space-y-4" onSubmit={submitFunction}>
              <input
                type="text"
                id="search"
                className="block w-full p-3 ps-10 text-sm bg-white focus:border-black shadow-xl rounded-xl"
                placeholder="Username/email"
                required
              />
              <input
                type="password"
                id="search"
                className="block w-full p-3 ps-10 text-sm bg-white focus:border-black shadow-xl rounded-xl"
                placeholder="Contraseña"
                required
              />
              <div className="flex justify-center">
                <button className="bg-[#61AF30] text-white px-4 py-2 font-semibold rounded-lg shadow-xl" type="submit" onClick={()=>{router.push("/Menu")}}>
                  Ingresa
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    
  );
}

export default Login;
