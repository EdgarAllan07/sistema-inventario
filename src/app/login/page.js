import React from 'react'
import Layout from './layout.js'
import logoSelectom from "../.."

function page() {
  return (
    <Layout>
       <section className='w-full '>
        <div className='w-1/2'>
            <img src={logoSelectom}></img>
        </div>
        <div></div>
       </section>
    </Layout>
  )
}

export default page