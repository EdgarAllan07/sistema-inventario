import React from 'react'
import Layout from './layout.js'
import Image from 'next/image'

function page() {
  return (
    <Layout>
       <section className='flex '>
        <div className='w-1/2'>
            <Image src="/selectos-logo-login.png" 
             width={900}
      height={900}/>
        </div>
        <div className='w-1/2 bg-white flex-cols items-center justify-center'>
                <h1 className='text-green-900'>Bienvenido</h1>
                <label className='d-block'>
                    Nombre usuario
                </label>
                <input type='text' className='shadow'>
                </input>
  
        </div>
       </section>
    </Layout>
  )
}

export default page