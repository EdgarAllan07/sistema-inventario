import React from 'react'
import ProductosForm from "../../../components/forms/productosForm"

function page({ params }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ProductosForm id={params.id}></ProductosForm>
    </div>
  )
}

export default page
