import React from "react";

export const metadata = {
  title: "Super Selectos Menu",
  description: "Generated by create next app",
};

function layout({ children }) {
  return (
    <div className="bg-[#EEEEEE] h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default layout;
