"use client"
import React from 'react'
import SideBar from './SideBar'
import Table from "./Table"

function Menu() {
  return (
    <div className='w-screen h-screen'>
        <SideBar></SideBar>
        <Table></Table>
    </div>
  )
}

export default Menu
