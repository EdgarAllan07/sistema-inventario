import React from 'react'
import ProveedoresForm from "../../../components/forms/proveedoresForm"

function page({ params }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ProveedoresForm id={ params.id}></ProveedoresForm>
    </div>
  )
}

export default page
