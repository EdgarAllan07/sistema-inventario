import React from 'react'
import SucursalesFrom from '../../../components/forms/sucursalesForm'

function page({ params }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <SucursalesFrom id={ params.id}></SucursalesFrom>
    </div>
  )
}

export default page
