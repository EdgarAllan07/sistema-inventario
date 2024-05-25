"use client";
import { useRouter } from "next/navigation";
import React from "react";
import SideBar from "./SideBar";
import Productos from "./tables/Productos";

function Menu() {
  const router = useRouter();
  const data = sessionStorage.getItem("credenciales");
  
  if (data) {
    return (
      <div>
        <SideBar></SideBar>
      </div>
    );
  } else {
    router.push("/");
  }
}

export default Menu;
