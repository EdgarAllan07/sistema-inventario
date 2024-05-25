import React from 'react'
import CategoriasForm from '../../../components/forms/categoriasForm'

function page({ params }) {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <CategoriasForm id={params.id}></CategoriasForm>
    </div>
  )
}

export default page
