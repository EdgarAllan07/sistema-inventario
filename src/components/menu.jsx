"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

function Menu() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = sessionStorage.getItem("credenciales");
      if (data) {
        setIsAuthenticated(true);
      } else {
        router.push("/");
      }
    }
  }, [router]);

  if (isAuthenticated) {
    return (
      <div>
        <SideBar />
      </div>
    );
  }

  // You can return null or a loading indicator while the redirection is happening
  return null;
}

export default Menu;
